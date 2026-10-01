import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { implantPresentation } from "../data/implantPresentation";

export default function ImplantPresentation({ onClose }: { onClose: () => void }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [modeIndex, setModeIndex] = useState(0);
  const [chapterIndex, setChapterIndex] = useState(0);
  const mode = implantPresentation[modeIndex];
  const chapter = mode.chapters[chapterIndex];

  useEffect(() => {
    const previousFocus = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    const modal = dialog.current!;
    modal.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      modal.close();
      document.body.style.overflow = previousOverflow;
      previousFocus?.focus();
    };
  }, []);

  return createPortal(
    <dialog
      ref={dialog}
      aria-labelledby="implant-presentation-title"
      onCancel={onClose}
      onClick={(event) => { if (event.target === event.currentTarget) onClose(); }}
      className="fixed inset-0 m-auto w-[calc(100%-2rem)] max-w-5xl max-h-[90dvh] overflow-y-auto rounded-xl bg-cream p-0 text-gray-800 shadow-2xl backdrop:bg-black/70"
    >
      <header className="flex items-center justify-between gap-4 border-b border-gray-200 px-6 py-4">
        <h2 id="implant-presentation-title" className="text-xl sm:text-2xl font-semibold">Dental Implants Presentation</h2>
        <button type="button" onClick={onClose} aria-label="Close presentation" className="rounded p-2 text-2xl leading-none hover:bg-gray-200 focus-visible:outline-2">×</button>
      </header>
      <div className="flex flex-wrap gap-2 px-6 pt-5" aria-label="Presentation mode">
        {implantPresentation.map((item, index) => (
          <button key={item.id} type="button" aria-pressed={modeIndex === index}
            onClick={() => { setModeIndex(index); setChapterIndex(0); }}
            className={`rounded px-4 py-2 text-sm ${modeIndex === index ? "bg-gray-800 text-white" : "bg-gray-100 hover:bg-gray-200"}`}>
            {item.label}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-[15rem_1fr] gap-6 p-6">
        <nav aria-label="Video chapters" className="order-2 md:order-1 max-h-72 md:max-h-[55vh] overflow-y-auto space-y-1">
          {mode.chapters.map((item, index) => (
            <button key={item.id} type="button" aria-current={chapterIndex === index ? "true" : undefined}
              onClick={() => setChapterIndex(index)}
              className={`block w-full rounded px-3 py-3 text-left text-sm ${chapterIndex === index ? "bg-gray-800 text-white" : "bg-gray-100 hover:bg-gray-200"}`}>
              <span aria-hidden="true">▶ </span>{item.title}
            </button>
          ))}
        </nav>
        <div className="order-1 md:order-2 min-w-0">
          <h3 className="mb-3 font-medium" aria-live="polite">{chapter.title}</h3>
          <video key={chapter.id} src={chapter.src} controls autoPlay playsInline preload="auto"
            aria-label={chapter.title} lang={mode.id === "spanish" ? "es" : "en"}
            className="aspect-[4/3] w-full rounded bg-black">
            Your browser does not support video playback.
          </video>
        </div>
      </div>
      <footer className="border-t border-gray-200 px-6 py-3 text-xs text-gray-500">© 2021 PBHS, Inc. All Rights Reserved.</footer>
    </dialog>, document.body,
  );
}
