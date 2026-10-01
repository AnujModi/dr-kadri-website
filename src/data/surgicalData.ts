export const surgicalData = [
  {
    id: "surgical-procedures",
    title: "Surgical Procedures",
    hasLinks: true,
    introContent: `This Practice provides a variety of surgical services for the treatment of periodontal issues. We pride ourselves on the fact that we are very conservative in our treatment recommendations and limit surgery to the areas where it is absolutely necessary.

Select any of the categories below for more information about the surgical services offered here.`,
    links: [
      { id: "guided-bone-regeneration", label: "Guided Bone & Tissue Regeneration" },
      { id: "gingival-grafting", label: "Free Gingival Grafting Surgery (Gum Graft)" },
      { id: "reduction-surgery", label: "Reduction Surgery" },
      { id: "cosmetic-periodontal-surgery", label: "Cosmetic Periodontal Surgery" },
      { id: "crown-lengthening", label: "Crown Lengthening" },
      { id: "bone-grafting", label: "Bone Grafting" },
      { id: "tooth-extractions", label: "Tooth Extractions" },
      { id: "biopsy", label: "Biopsy/Oral Pathology" },
      { id: "dental-implants", label: "Dental Implants" },
      { id: "pinhole-surgical", label: "Pinhole Surgical Technique™" },
      { id: "surgical-instructions", label: "Surgical Instructions" },
    ],
  },

  // GUIDED BONE & TISSUE REGENERATION (Standalone)
  {
    id: "guided-bone-regeneration",
    title: "Guided Bone & Tissue Regeneration",
    hasSections: true,
    introContent: `Gum disease has traditionally been treated by eliminating the gum pockets by trimming away the infected gum tissue and by re-contouring the uneven bone tissue. Although this is still an effective way of treating gum disease, new and more sophisticated procedures are used routinely today. One of these advancements is guided bone regeneration, also referred to as guided tissue regeneration. This procedure is used to stabilize endangered teeth or to prepare the jaw for dental implants.`,
    sections: [
      {
        id: "procedure",
        title: "",
        content: `As periodontal disease progresses, pockets of degenerated bone develop in the jaw. These pockets can promote the growth of bacteria and the spread of infection. To address these pockets, The doctor may recommend tissue regeneration. During this surgical procedure, the pockets are cleaned thoroughly, and a membrane is installed between the soft tissue and the pocket in the bone. Some of these membranes are bio-absorbable and some require removal. The membrane covers the pocket so that fast-growing soft tissue is blocked, and slower-growing bone can begin to grow, or "regenerate" itself.

The effectiveness of the procedure generally depends on the patient's willingness to follow a strict postoperative diet and careful oral care. The doctor will help you determine if bone regeneration surgery is right for you.`,
      },
    ],
  },
  // GINGIVAL GUM GRAFTING (Standalone)
  {
    id: "gingival-grafting",
    title: "Gingival Gum Grafting",
    hasSections: true,
    video: "/videos/surgical/gingival grafting.mp4",
    imageSet: {
      images: [
        { src: "/images/surgical/before graft.jpg", label: "Before" },
        { src: "/images/surgical/after graft.jpg", label: "After" }
      ]
    },
    introContent: `When recession of the gingiva occurs, the body loses a natural defense against both bacterial penetration and trauma. When gum recession is a problem, gum reconstruction using grafting techniques is an option.`,
    sections: [
      {
        id: "when-needed",
        title: "",
        content: `When there is only minor recession, some healthy gingiva often remains and protects the tooth, so that no treatment other than modifying home care practices is necessary. However, when recession reaches the mucosa, the first line of defense against bacterial penetration is lost.

In addition, gum recession often results in root sensitivity to hot and cold foods as well as an unsightly appearance of the gum and tooth. When significant, gum recession can predispose to worsening recession and expose the root surface, which is softer than enamel, leading to root caries and root gouging.`,
      },
      {
        id: "procedure",
        title: "The Gingival Graft Procedure",
        content: `A gingival graft is designed to solve these problems. A thin piece of tissue is taken from the roof of the mouth or gently moved over from adjacent areas to provide a stable band of attached gingiva around the tooth. The gingival graft may be placed in such a way as to cover the exposed portion of the root.

The gingival graft procedure is highly predictable and results in a stable, healthy band of attached tissue around the tooth.`,
      },
    ],
  },
  // REDUCTION SURGERY
  {
    id: "reduction-surgery",
    title: "Reduction Surgery",
    hasLinks: true,
    isParent: true,
    introContent: `Reduction surgery procedures are designed to treat and eliminate periodontal disease, restore gum health, and improve the aesthetics of your smile.`,
    links: [
      { id: "osseous-surgery", label: "Osseous Surgery" },
      { id: "gingivectomy", label: "Gingivectomy" },
      { id: "frenectomy", label: "Frenectomy" },
    ],
  },
  {
    id: "osseous-surgery",
    title: "Osseous Surgery",
    parent: "reduction-surgery",
    hasSections: true,
    introContent: `Osseous surgery, sometimes referred to as pocket reduction surgery or gingivectomy, refers to a number of different surgeries aimed at gaining access to the tooth roots to remove tartar and disease-causing bacteria.`,
    sections: [
      {
        id: "goals",
        title: "Goals of Osseous Surgery",
        content: `Osseous surgery is used to reshape deformities and remove pockets in the alveolar bone surrounding the teeth. It is a common necessity in effective treatment of more advanced periodontal diseases. The ultimate goal of osseous surgery is to reduce or eliminate the periodontal pockets that cause periodontal disease. Despite the word "surgery" the procedure is reported to feel more like a thorough cleaning.

The specific goals of osseous surgery include:`,
        subsections: [
          {
            title: "Reducing Bacterial Spread:",
            content: `Bacteria from the mouth can spread throughout the body and cause other life-threatening conditions such as heart disease and respiratory disease. Removing deep tartar and thereby bacteria can help reduce the risk of bacteria spreading.`,
          },
          {
            title: "Preventing Bone Loss:",
            content: `The immune system's inflammatory response prompted by periodontal bacteria can lead to bone loss in the jaw region, and cause teeth to fall out. Osseous surgery seeks to stop periodontal disease before it progresses to this level.`,
          },
          {
            title: "Enhancing the Smile:",
            content: `Mouths plagued with periodontal disease are often unsightly. Brown gums, rotting teeth, and ridge indentations can leave a person feeling depressed and too self-conscious to smile. Fortunately, osseous surgery can help reduce bacteria and disease and thereby restore your mouth to its former radiance, while restoring confidence at the same time.`,
          },
          {
            title: "Facilitating Home Care:",
            content: `As the gum pocket deepens, it can become nearly impossible to brush and floss adequately. Osseous surgery reduces pocket size, making it easier to brush and floss, and thereby prevent further periodontal disease.`,
          },
        ],
      },
      {
        id: "procedure",
        title: "What does osseous surgery entail?",
        content: `A local anesthetic will be used to numb the area prior to surgery. First, the doctor will cut around each tooth of the affected area to release the gum tissue from the bone. This allows access to the bone and roots of the teeth. After the roots have been thoroughly cleaned through scaling, a drill and hand tools will be used to reshape the bone around the teeth. Bone is removed in some areas to restore the normal rise and fall of the bone, but at a lower level. Bone grafting may also be necessary to fill in large defects.

Next, the gums will be placed back over the remaining bone and suture them in place. The site will also be covered with a bandage (periodontal pack) or dressing. Pain medicine and mouth rinses containing chlorhexidine are generally prescribed following the surgery.

Do not be alarmed if bleeding and swelling occur after the surgery. This can be controlled easily by placing an ice pack on the outside of the affected area. In cases where the bleeding and swelling is in excess, it is advised that you call to notify our office. Several follow up visits may be necessary and you must fulfill a meticulous maintenance program especially during the initial phases of healing to avoid post-operative infection.`,
      },
    ],
  },
  {
    id: "gingivectomy",
    title: "Gingivectomy",
    parent: "reduction-surgery",
    hasSections: true,
    introContent: `The gum tissue can be very thick and large covering the tooth surface making the teeth look short. This can happen because of medications, bone that extends too close to the surface of the teeth, or inflammation due to gum disease.

A gingivectomy is a periodontal procedure that eliminates excess gum tissue. The term "gingivectomy" is derived from Latin: "gingiva" means gum tissue, "-ectomy" means to remove.`,
    sections: [
      {
        id: "reasons",
        title: "Reasons for Gingivectomy",
        content: `The following are some reasons a gingivectomy might be needed:`,
        subsections: [
          {
            title: "Cosmetics:",
            content: `To make the teeth look normal in size when the gum is covering too much of it, making the teeth look longer and more proportional.`,
          },
          {
            title: "Functional/Esthetics:",
            content: `To remove excess gum tissue (gingival overgrowth) that has formed as a result of certain drugs such as anti-seizure and organ-transplant medications, and certain high blood pressure medications.`,
          },
          {
            title: "Bone and gum health around the teeth:",
            content: `To shrink deep gum pockets. This procedure might require some bone work as well.`,
          },
        ],
      },
      {
        id: "procedure",
        title: "The Gingivectomy Procedure",
        content: `The doctor will first anesthetize the area(s) to be treated. The excess of gum tissue is removed either with a scalpel blade and sometimes some rotary instruments or a laser. In most cases no sutures (stitches) are required. The surgical sites will be sore for 24-48 hours, and medication will be provided to alleviate any discomfort experienced. A week follow-up appointment is usually needed to ensure proper healing.`,
      },
    ],
  },
  {
    id: "frenectomy",
    title: "Frenectomy",
    parent: "reduction-surgery",
    hasSections: true,
    introContent: `A frenum is a naturally occurring muscle attachment, normally seen between the front teeth (either upper or lower). It connects the inner aspect of the lip with the gum. A lack of attached gingiva, in conjunction with a high (closer to the biting surface) frenum attachment, which exaggerates the pull on the gum margin, can result in recession. Additionally, an excessively large frenum can prevent the teeth from coming together resulting in a gap between the front teeth.`,
    sections: [
      {
        id: "procedure",
        title: "",
        content: `If pulling is seen or the frenum is too large to allow the teeth to come together, the frenum is surgically released from the gum with a frenectomy. A frenectomy is simply the surgical removal of a frenum.

When Orthodontic treatment is planned or initiated, the removal of an abnormal frenum, with or without a gingival graft, can increase stability and improve success of the final orthodontic result.`,
      },
    ],
  },

  // BONE GRAFTING
  {
    id: "bone-grafting",
    title: "Bone Grafting",
    hasLinks: true,
    isParent: true,
    video: "/videos/surgical/bone grafting overview.mp4",
    introContent: `Bone grafting procedures can repair implant sites with inadequate bone structure, restore jaw function, and prepare your mouth for dental implants.`,
    links: [
      { id: "cosmetic-periodontal-surgery", label: "Cosmetic Periodontal Surgery" },
      { id: "crown-lengthening", label: "Crown Lengthening" },
      { id: "major-bone-grafting", label: "Major & Minor Bone Grafting" },
      { id: "jaw-bone-health", label: "Importance of Teeth for Jaw Bone Health" },
      { id: "bone-loss-reasons", label: "Reasons for Jaw Bone Loss" },
      { id: "about-bone-grafting", label: "About Bone Grafting" },
      { id: "ridge-augmentation", label: "Ridge Augmentation" },
      { id: "sinus-augmentation", label: "Sinus Augmentation" },
      { id: "socket-preservation", label: "Socket Preservation" },
      { id: "tooth-extractions", label: "Tooth Extractions" },
      { id: "biopsy", label: "Biopsy/Oral Pathology" },
    ],
  },
  {
    id: "cosmetic-periodontal-surgery",
    title: "Cosmetic Periodontal Surgery",
    hasSections: true,
    image: "/images/surgical/cosmetic periodontal surgery.gif",
    introContent: `Cosmetic periodontal procedures are a conventional way to cover unsightly, sensitive, or exposed root surfaces and to prevent future gum recession. If you are unhappy with the appearance of short, unsightly teeth, this can be greatly improved by a combination of periodontal procedures by the doctor and cosmetic dentistry by your dentist.`,
    sections: [
      {
        id: "procedures",
        title: "Cosmetic Periodontal Surgery Procedures",
        content: ``,
        subsections: [
          {
            title: "Crown Lengthening",
            content: `Although your teeth appear short, they may actually be the proper length. The teeth may be covered with too much gum tissue. We can correct this by performing the periodontal plastic surgery procedure, crown lengthening. During this procedure, excess gum and bone tissue are reshaped to expose more of the natural tooth. This can be done to more than one tooth, to even your gum line, and to create a beautiful smile.`,
          },
          {
            title: "Gum Grafting",
            content: `Another cosmetic procedure is the soft tissue graft. It is used to cover unattractive tooth roots, reduce gum recession, and protect the roots from decay and eventual loss.`,
          },
          {
            title: "Bone Grafting",
            content: `Tooth loss causes the jaw bone to recede and can lead to an unnatural looking indentation in your gums and jaw, and appearance of a general aging. The original look of your mouth may not be recaptured because of spaces remaining under and between replacement teeth. They may appear too long compared to nearby teeth.

Bone grafting following tooth loss can preserve the socket/ridge and minimize gum and bone collapse. There is less shrinkage and a more aesthetic tooth replacement for either an implant crown or fixed bridge around the replacement teeth.`,
          },
        ],
      },
    ],
  },
  {
    id: "crown-lengthening",
    title: "Crown Lengthening",
    hasSections: true,
    image: "/images/surgical/crown lengthening.gif",
    introContent: `Crown lengthening is usually performed to improve the health of the gum tissue, prepare the mouth for a procedure, or correct a "gummy smile". A "gummy smile" is used to describe an instance where teeth are covered with excess gum tissue resulting in a less esthetically-pleasing smile.`,
    sections: [
      {
        id: "why-needed",
        title: "Why would I need crown lengthening?",
        content: `The procedure involves reshaping or recontouring the gum tissue and bone around the tooth in question to create a new gum-to–tooth relationship. Crown lengthening can be performed on a single tooth, many teeth, or the entire gum line.

Crown lengthening is often required when your tooth needs a new crown or other restoration. The edge of that restoration is deep below the gum tissue and not immediately accessible. It is also usually too close to the bone or below the bone.

Crown lengthening allows us to reach the edge of the restoration, ensuring a proper fit to the tooth. It should also provide enough tooth structure so the new restoration will not come loose in the future. This allows you to clean the edge of the restoration when you brush and floss to prevent decay and gum disease.`,
      },
      {
        id: "procedure",
        title: "About the Crown Lengthening Procedure",
        content: `Crown lengthening takes approximately one hour but will largely depend on the amount of teeth involved and if any amount of bone will need to be removed. The procedure is usually performed under local anesthetic and involves a series of small incisions around the tissue to separate the gums from the teeth. Even if only one tooth requires the procedure, it will probably be necessary to adjust the surrounding teeth to enable a more even reshaping. In some cases, extraction of a small amount of bone will be necessary as well.

When the doctor is satisfied that the teeth have sufficient exposure and the procedure is completed, the incisions will be cleaned with sterile water. Sutures and a protective bandage are then placed to help secure the new gum-to-tooth relationship. Your teeth will look noticeably longer immediately after surgery because the gums have now been repositioned. You will need to be seen in one or two weeks to remove the sutures and evaluate your healing. The surgical site should be completely healed in approximately two to three months following the procedure.`,
      },
    ],
  },
  {
    id: "major-bone-grafting",
    title: "Major & Minor Bone Grafting",
    parent: "bone-grafting",
    hasSections: true,
    video: "/videos/surgical/bone grafting overview.mp4",
    introContent: `Missing teeth over a period of time can cause your jaw bone to atrophy, or resorb. This often results in poor quality and quantity of bone suitable for the placement of dental implants as well as long term shifting of remaining teeth and changes to facial structure. Most patients, in these situations, are not candidates for dental implants.

Fortunately, today we have the ability to grow bone where it is needed. This not only gives us the opportunity to place implants of proper length and width, but it also gives us a chance to restore functionality and aesthetic appearance.`,
    sections: [
      {
        id: "major",
        title: "Major Bone Grafting",
        content: `Bone grafting can repair implant sites with inadequate bone structure due to previous extractions, gum disease, or injuries. The bone is either obtained from a tissue bank or your own bone is taken from the jaw, hip or tibia (below the knee). Sinus bone grafts are also performed to replace bone in the posterior upper jaw. In addition, special membranes may be utilized that dissolve under the gum to protect the bone graft, as well as encourage bone regeneration. This is called guided bone regeneration, or guided tissue regeneration.

Major bone grafts are typically performed to repair defects of the jaws. These defects may arise as a result of traumatic injuries, tumor surgery, or congenital defects. Large defects are repaired using the patient's own bone. This bone is harvested from a number of different areas depending on the size needed. The skull (cranium), hip (iliac crest), and lateral knee (tibia), are common donor sites. These procedures are routinely performed in an operating room and require a hospital stay.`,
      },
    ],
  },
  {
    id: "jaw-bone-health",
    title: "The Importance of Teeth for Jaw Bone Health",
    parent: "bone-grafting",
    hasSections: true,
    introContent: `When one or more teeth are missing it can lead to bone loss at the site of the gap. This loss of jaw bone can develop into additional problems, both with your appearance and your overall health. You may experience pain, problems with your remaining teeth, altered facial appearance, and eventually even the inability to speak and/or eat normally.`,
    sections: [
      {
        id: "maintenance",
        title: "",
        content: `In the same way that muscles are maintained through exercise, bone tissue is maintained by use. Natural teeth are embedded in the jaw bone and stimulate the jaw bone through activities such as chewing and biting. When teeth are missing, the alveolar bone, or the portion of the jaw bone that anchors the teeth into the mouth, no longer receives the necessary stimulation it needs and begins to break down, or resorb. The body no longer uses or "needs" the jaw bone, so it deteriorates.`,
      },
      {
        id: "consequences",
        title: "Potential Consequences of Tooth and Jaw Bone Loss",
        content: `• Problems with remaining teeth, including, misalignment, drifting, loosening and loss
• Collapsed facial profile
• Limited lip support
• Skin wrinkling around the mouth
• Distortion of other facial features
• Jaw (temporomandibular joint [TMJ]) pain, facial pain, and headaches
• Difficulty speaking and communicating
• Inadequate nutrition as a result of the inability to chew properly and painlessly
• Sinus expansion`,
      },
    ],
  },
  {
    id: "bone-loss-reasons",
    title: "Reasons for Jaw Bone Loss and Deterioration",
    parent: "bone-grafting",
    hasSections: true,
    introContent: `The following are the most common causes for jaw bone deterioration and loss that may require a bone grafting procedure:`,
    sections: [
      {
        id: "extractions",
        title: "Tooth Extractions",
        content: `When an adult tooth is removed and not replaced, jaw bone deterioration may occur. Natural teeth are embedded in the jaw bone, and stimulate the jaw bone through activities such as chewing and biting. When teeth are missing, the alveolar bone, or the portion of the jaw bone that anchors the teeth in the mouth, no longer receives the necessary stimulation, and begins to break down, or resorb. The body no longer uses or "needs" the jaw bone, so it deteriorates and goes away.

The rate the bone deteriorates, as well as the amount of bone loss that occurs, varies greatly among individuals. However, most loss occurs within the first eighteen months following the extraction, and continues throughout life.`,
      },
      {
        id: "periodontal",
        title: "Periodontal Disease",
        content: `Periodontal diseases are ongoing infections of the gums that gradually destroy the support of your natural teeth. Periodontal disease affects one or more of the periodontal tissues: alveolar bone, periodontal ligament, cementum, or gingiva. While there are many diseases which affect the tooth-supporting structures, plaque-induced inflammatory lesions make up the majority of periodontal issues, and are divided into two categories: gingivitis and periodontitis. While gingivitis, the less serious of the diseases, may never progress into periodontitis, it always precedes periodontitis.

Dental plaque is the primary cause of gingivitis in genetically-susceptible individuals. Plaque is a sticky colorless film, composed primarily of food particles and various types of bacteria, which adhere to your teeth at and below the gum line. Plaque constantly forms on your teeth, even minutes after cleaning. Bacteria found in plaque produce toxins or poisons that irritate the gums. Gums may become inflamed, red, swollen, and bleed easily. If this irritation is prolonged, the gums separate from the teeth causing pockets (spaces) to form. If daily brushing and flossing are neglected, plaque can also harden into a rough, porous substance known as calculus (or tartar). This can occur both above and below the gum line.

Periodontitis is affected by bacteria that adhere to the tooth's surface, along with an overly aggressive immune response to these bacteria. If gingivitis progresses into periodontitis, the supporting gum tissue and bone that holds teeth in place deteriorates. The progressive loss of this bone, the alveolar, can lead to loosening and subsequent loss of teeth.`,
      },
      {
        id: "dentures",
        title: "Dentures/Bridgework",
        content: `Unanchored dentures are placed on top of the gum line, but they do not provide any direct stimulation to the underlying alveolar bone. Over time, the lack of stimulation causes the bone to resorb and deteriorate. Because this type of denture relies on the bone to hold them in place, people often experience loosening of their dentures and problems eating and speaking. Eventually, bone loss may become so severe that dentures cannot be held in place even with strong adhesives, and a new set may be required. Proper denture care, repair, and refitting are essential to maintaining oral health.

Some dentures are supported by anchors, which do help adequately stimulate, and therefore preserve bone.

With bridgework, the teeth on either side of the appliance provide sufficient stimulation to the bone, but the portion of the bridge that spans the gap where the teeth are missing receives no direct stimulation. Bone loss can occur in this area.

By completing a bone graft procedure, the doctor is now able to restore bone function and growth, thereby halting the effects of poor denture care.`,
      },
      {
        id: "trauma",
        title: "Facial Trauma",
        content: `When a tooth is knocked out or broken to the extent that no biting surface is left below the gum line, bone stimulation stops, which results in jaw bone loss. Some common forms of tooth and jaw trauma include: teeth knocked out from injury or accident, jaw fractures, or teeth with a history of trauma that may die and lead to bone loss years after the initial trauma.

A bone grafting procedure would be necessary to reverse the effects of bone deterioration, restoring function and promoting new bone growth in traumatized areas.`,
      },
      {
        id: "misalignment",
        title: "Misalignment",
        content: `Misalignment issues can create a situation in the mouth where some teeth no longer have an opposing tooth structure. The unopposed tooth can over-erupt, causing deterioration of the underlying bone.

Issues such as TMJ problems, normal wear-and-tear, and lack of treatment can also create abnormal physical forces that interfere with the teeth's ability to grind and chew properly. Over time, bone deterioration can occur where bone is losing stimulation.`,
      },
      {
        id: "osteomyelitis",
        title: "Osteomyelitis",
        content: `Osteomyelitis is a type of bacterial infection in the bone and bone marrow of the jaw. The infection leads to inflammation, which can cause a reduction of blood supply to the bone. Treatment for osteomyelitis generally requires antibiotics and removal of the affected bone. A bone graft procedure may then be required to restore bone function and growth lost during removal.`,
      },
      {
        id: "tumors",
        title: "Tumors",
        content: `Benign facial tumors, though generally non-threateningly, may grow large and require removal of a portion of the jaw. Malignant mouth tumors almost always spread into the jaw, requiring removal of a section of the jaw. In both cases, reconstructive bone grafting is usually required to help restore function to the jaw. Grafting in patients with malignant tumors may be more challenging because treatment of the cancerous tumor generally requires removal of surrounding soft tissue as well.`,
      },
      {
        id: "developmental",
        title: "Developmental Deformities",
        content: `Some conditions or syndromes known as birth defects are characterized by missing portions of the teeth, facial bones, jaw or skull. The doctor may be able to perform a bone graft procedure to restore bone function and growth where it may be absent.`,
      },
      {
        id: "sinus",
        title: "Sinus Deficiencies",
        content: `When molars are removed from the upper jaw, air pressure from the air cavity in the maxilla (maxillary sinus), causes resorption of the bone that formerly helped the teeth in place. As a result, the sinuses become enlarged, a condition called hyperpneumatized sinus.

This condition usually develops over several years, and may result in insufficient bone for the placement of dental implants. The doctor can perform a procedure called a "sinus lift" that can treat enlarged sinuses.`,
      },
    ],
  },
  {
    id: "about-bone-grafting",
    title: "About Bone Grafting",
    parent: "bone-grafting",
    hasSections: true,
    introContent: `Over a period of time, the jaw bone associated with missing teeth atrophies and is reabsorbed. This often leaves a condition in which there is poor quality and quantity of bone suitable for placement of dental implants. In these situations, most patients are not candidates for placement of dental implants.

With bone grafting, we now have the opportunity to not only replace bone where it is missing, but also the ability to promote new bone growth in that location! This not only gives us the opportunity to place implants of proper length and width, it also gives us a chance to restore functionality and esthetic appearance.`,
    sections: [
      {
        id: "types",
        title: "Types of Bone Grafts",
        content: ``,
        subsections: [
          {
            title: "Autogenous Bone Grafts",
            content: `Autogenous bone grafts, also known as autografts, are made from your own bone, taken from somewhere else in the body. The bone is typically harvested from the chin, jaw, lower leg bone, hip, or the skull. Autogenous bone grafts are advantageous in that the graft material is live bone, meaning it contains living cellular elements that enhance bone growth. However, one downside to the autograft is that it requires a second procedure to harvest bone from elsewhere in the body. Depending on your condition, a second procedure may not be in your best interest.`,
          },
          {
            title: "Allogenic Bone",
            content: `Allogenic bone, or allograft, is dead bone harvested from a cadaver, then processed using a freeze-dry method to extract the water via a vacuum. Unlike autogenous bone, allogenic bone cannot produce new bone on it's own. Rather, it serves as a framework or scaffold over which bone from the surrounding bony walls can grow to fill the defect or void.`,
          },
          {
            title: "Xenogenic Bone",
            content: `Xenogenic bone is derived from non-living bone of another species, usually a cow. The bone is processed at very high temperatures to avoid the potential for immune rejection and contamination. Like allogenic grafts, xenogenic grafts serve as a framework for bone from the surrounding area to grow and fill the void.`,
          },
        ],
      },
      {
        id: "substitutes",
        title: "Bone Graft Substitutes",
        content: `As a substitute to using real bone, many synthetic materials are available as a safe and proven alternative, including:`,
        subsections: [
          {
            title: "Demineralized Bone Matrix (DBM)/Demineralized Freeze-Dried Bone Allograft (DFDBA)",
            content: `This product is processed allograft bone, containing collagen, proteins, and growth factors that are extracted from the allograft bone. It is available in the form of powder, putty, chips, or as a gel that can be injected through a syringe.`,
          },
          {
            title: "Graft Composites",
            content: `Graft composites consist of other bone graft materials and growth factors to achieve the benefits of a variety of substances. Some combinations may include: collagen/ceramic composite, which closely resembles the composition of natural bone, DBM combined with bone marrow cells, which aid in the growth of new bone, or a collagen/ceramic/autograft composite.`,
          },
          {
            title: "Bone Morphogenetic Proteins",
            content: `Bone morphogenetic proteins (BMPs) are proteins naturally produced in the body that promote and regulate bone formation and healing.`,
          },
        ],
      },
      {
        id: "advantages",
        title: "",
        content: `Synthetic materials also have the advantage of not requiring a second procedure to harvest bone, reducing risk and pain. Each bone grafting option has its own risks and benefits. The doctor will determine which type of bone graft material is right for you.`,
      },
    ],
  },
  {
    id: "ridge-augmentation",
    title: "Ridge Augmentation",
    parent: "bone-grafting",
    hasSections: true,
    introContent: `A ridge augmentation is a common dental procedure often performed following a tooth extraction to help recreate the natural contour of the gums and jaw that may have been lost due to bone loss as a result of a tooth extraction, or for another reason.`,
    sections: [
      {
        id: "what-is",
        title: "What is a ridge augmentation?",
        content: `The alveolar ridge of the jaw is the bone that surrounds the roots of teeth. When a tooth is removed, an empty socket is left in the alveolar ridge bone. Usually this empty socket will heal on its own, filling with bone and tissue. Sometimes when a tooth is removed, the bone surrounding the socket breaks, and it unable to heal on its own. The previous height and width of the socket will continue to deteriorate.

Rebuilding the original height and width of the alveolar ridge is not medically necessary, but may be required for dental implant placement, or for aesthetic purposes. Dental implants require bone to support their structure, and a ridge augmentation can help rebuild this bone to accommodate the implant.`,
      },
      {
        id: "procedure",
        title: "How is a ridge augmentation accomplished?",
        content: `A ridge augmentation is accomplished by placing bone graft material in the tooth socket. It is often done immediately after the tooth is removed, to avoid the need for a second procedure later. Next, the gum tissue is placed over the socket and secured with sutures. The doctor may choose to use a space-maintaining product over the top of the graft to help restore the height and width of the space created by the tooth and bone loss, and into which new bone should grow. Once the socket has healed, the alveolar ridge can be prepared for dental implant placement.

A ridge augmentation procedure is typically performed in the doctor's office under local anesthesia. Some patients may also request sedative medication in addition.`,
      },
    ],
  },
  {
    id: "sinus-augmentation",
    title: "Sinus Augmentation",
    parent: "bone-grafting",
    hasSections: true,
    image: "/images/surgical/bone grafting sinus augmentation.gif",
    introContent: `The maxillary sinuses are behind your cheeks and on top of the upper teeth. These sinuses are empty, air-filled spaces. Some of the roots of the natural upper teeth extend up into the maxillary sinuses. When these upper teeth are removed, there is often just a thin wall of bone separating the maxillary sinus and the mouth. Dental implants need bone to hold them in place. When the sinus wall is very thin, it is impossible to place dental implants in this bone.`,
    sections: [
      {
        id: "procedure",
        title: "The Sinus Augmentation Procedure",
        content: `The key to a successful and long-lasting dental implant is the quality and quantity of jaw bone to which the implant will be attached. If bone loss has occurred due to injury or periodontal disease, a sinus augmentation can raise the sinus floor and allow for new bone formation.

In the most common sinus augmentation procedure, a small incision is made on the premolar or molar region to expose the jaw bone. A small opening is cut into the bone, and the membrane lining the sinus is pushed upward. The underlying space is filled with bone grafting material, either from your own body or from a cadaver. Sometimes, synthetic materials that can imitate bone formation are used. After the bone is implanted, the incision is stitched up and the healing process begins. After several months of healing, the bone becomes part of the patient's jaw and dental implants can be inserted and stabilized in this new sinus bone.

If enough bone between the upper jaw ridge and the bottom of the sinus is available to stabilize the implant well, sinus augmentations and implant placement can sometimes be performed as a single procedure. If not enough bone is available, the sinus augmentation will have to be performed first, then the graft will have to mature for several months, depending upon the type of graft material used. Once the graft has matured, the implants can be placed.

The sinus graft makes it possible for many patients to have dental implants when years ago there was no other option besides wearing loose dentures.`,
      },
    ],
  },
  {
    id: "socket-preservation",
    title: "Socket Preservation Procedure",
    parent: "bone-grafting",
    hasSections: true,
    video: "/videos/surgical/bone grafting socket preservation.mp4",
    introContent: `Removal of teeth is sometimes necessary because of pain, infection, bone loss or fracture of the tooth. The bone that holds the tooth in place (the socket) is often damaged by disease and/or infection resulting in deformity of the jaw after the tooth is extracted. In addition, when teeth are extracted, the surrounding bone and gums can shrink and recede very quickly after the extraction resulting in unsightly defects and collapse of the lips, and cheeks.`,
    sections: [
      {
        id: "importance",
        title: "Preserving Your Jaw Bone after Extraction",
        content: `These jaw defects can create major problems in performing restorative dentistry whether your treatment involves dental implants, bridges or dentures. Jaw deformities from tooth removal can be prevented and repaired by a procedure called socket preservation. Socket preservation can greatly improve your smile's appearance and increase your chances for successful dental implants for years to come.

Several techniques can be used to preserve the bone and minimize bone loss after an extraction. In one common method, the tooth is removed and the socket is filled with bone or bone substitute. It is then covered with gum, artificial membrane, or tissue stimulating proteins to encourage your body's natural ability to repair the socket. With this method, the socket heals eliminating shrinkage and collapse of surrounding gum and facial tissues. The newly formed bone in the socket also provides a foundation for an implant to replace the tooth. If your dentist has recommended tooth removal, be sure to ask if socket preservation is necessary. This is particularly important if you are planning on replacing the front teeth.`,
      },
    ],
  },
  {
    id: "tooth-extractions",
    title: "Tooth Extractions",
    hasSections: true,
    video: "/videos/surgical/tooth extractions.mp4",
    introContent: `You and the doctor may determine that you need a tooth extraction for any number of reasons. Some teeth are extracted because they are severely decayed; others may have advanced periodontal disease, or have broken in a way that cannot be repaired. Other teeth may need removal because they are poorly positioned in the mouth (such as impacted teeth), or in preparation for orthodontic treatment.`,
    sections: [
      {
        id: "importance",
        title: "",
        content: `The removal of a single tooth can lead to problems related to your chewing ability, problems with your jaw joint, and shifting teeth, which can have a major impact on your dental health.

To avoid these complications, in most cases, the doctor will discuss alternatives to extractions as well as replacement of the extracted tooth.`,
      },
      {
        id: "process",
        title: "The Tooth Extraction Process",
        content: `At the time of extraction the doctor will need to numb your tooth, jaw bone and gums that surround the area with a local anesthetic.

During the extraction process you will feel a lot of pressure. This is from the process of firmly rocking the tooth in order to widen the socket for removal.

You feel the pressure without pain as the anesthetic has numbed the nerves stopping the transference of pain, yet the nerves that transmit pressure are not profoundly affected.

If you do feel pain at any time during the extraction please let us know right away.`,
      },
      {
        id: "sectioning",
        title: "Sectioning a Tooth",
        content: `Some teeth require sectioning. This is a very common procedure done when a tooth is so firmly anchored in its socket or the root is curved and the socket can't expand enough to remove it. The doctor simply cuts the tooth into sections then removes each section one at a time.`,
      },
      {
        id: "after",
        title: "After Tooth Extraction",
        content: `For details on home care after tooth extraction, see the page "After Extractions" under "Surgical Instructions".`,
      },
    ],
  },
  {
    id: "biopsy",
    title: "Biopsy/Oral Pathology",
    hasSections: true,
    introContent: `This page is currently under development. Please check back later for information about Biopsy/Oral Pathology.`,
    sections: [],
  },

  // DENTAL IMPLANTS
  {
    id: "dental-implants",
    title: "Dental Implants",
    hasLinks: true,
    isParent: true,
    image: "/images/surgical/dental-implants-launch-button.jpg",
    introContent: `Dental implants are the most comfortable and permanent solution for replacing missing teeth. They form a strong foundation for teeth and keep the jaw healthy and strong.`,
    links: [
      { id: "what-are-implants", label: "What are dental implants?" },
      { id: "replacing-missing-teeth", label: "Replacing Missing Teeth" },
      { id: "implant-placement-overview", label: "Overview of Implant Placement" },
      { id: "missing-all-teeth", label: "Missing All Upper or Lower Teeth" },
      { id: "bone-grafting-implants", label: "Bone Grafting for Implants" },
      { id: "implant-overdenture", label: "Implant Supported Overdenture" },
      { id: "after-implant-faq", label: "After Dental Implant Placement FAQ" },
      { id: "implant-cost", label: "Considering the Cost of Dental Implants" },
      { id: "pinhole-surgical", label: "Pinhole Surgical Technique PST™" },
    ],
  },
  {
    id: "what-are-implants",
    title: "What are dental implants?",
    parent: "dental-implants",
    hasSections: true,
    introContent: `A natural tooth consists of a root and a crown. If you compare natural teeth to implant-supported replacement teeth, you'll see they have the same basic parts. Both have a crown (the visible part used to chew food). Both have a root that holds the tooth securely under the gum and is anchored into the jaw. The difference is that the implant is made of titanium – the same time-tested material used by surgeons for artificial joints.`,
    sections: [
      {
        id: "process",
        title: "",
        content: `When you lose a tooth, you lose both the root and the crown. To replace the tooth, the surgeon first replaces the root with a small dental implant.

Time is allowed for bone to heal and grow around the dental implant. The bone bonds with the titanium, creating a strong foundation for artificial teeth. A support post (abutment) is then placed on the implant and a new replacement tooth (crown) is placed on top of the abutment. In many cases a temporary replacement tooth can be attached to the implant immediately after it is placed. If all of your teeth are missing, a variety of treatment options are available to support the replacement teeth.`,
      },
      {
        id: "advances",
        title: "Surgical Advances in Dental Implants",
        content: `Using the most recent advances in dental implant technology, the doctor is able to place single stage implants. These implants do not require a second procedure to uncover them, but do require a minimum of six weeks of healing time before artificial teeth are placed. There are even situations where the implant can be placed at the same time as the tooth extraction – further minimizing your number of surgical procedures.

Dental implant placement is a team effort between a periodontist and a restorative dentist. The doctor performs the actual implant surgery, initial tooth extractions, and bone grafting if necessary. The restorative dentist (your dentist) fits and makes the permanent prosthesis. Your dentist will also make any temporary prosthesis needed during the implant process.`,
      },
    ],
  },
  {
    id: "replacing-missing-teeth",
    title: "Replacing Missing Teeth",
    parent: "dental-implants",
    hasSections: true,
    introContent: `Your teeth affect your whole body. When they're healthy, you're healthier too. A missing tooth can affect your bite, speech and eating choices. As you rely more on your remaining teeth, you increase the chance they will wear out prematurely, or be damaged or lost. You may also experience headaches and/or jaw pain.`,
    sections: [
      {
        id: "importance",
        title: "",
        content: `Who would want their appearance and health to deteriorate? That's the natural consequence of missing teeth – the jaw literally melts away. Generally, people will lose 25% of their supporting jawbone structure within the first year after tooth loss. Dental implants are more easily placed when teeth are first extracted because bone replacement becomes more complex as time passes. The great news? Implants act just like your natural teeth. They safeguard and preserve your bone structure, oral health and appearance. Your dentist and the implant surgeon will provide you with options so that you can make the most informed decision concerning tooth replacement.`,
      },
      {
        id: "options",
        title: "Tooth Replacement Options",
        content: `You can select from a number of different options to replace your missing teeth – from temporary to long-lasting solutions. A good candidate is anyone missing one or more teeth, or who is unhappy with their dentures. Age is not a factor. However, smoking, diseases such as diabetes, and radiation therapy to the area, have been shown to lower the success rate of implant placement.`,
        subsections: [
          {
            title: "Fixed Bridge",
            content: `A fixed bridge is a connected set of replacement teeth. For support, it is cemented into position on top of the teeth adjacent to the empty space. The protective outer layer of these teeth is usually removed or ground down prior to attaching the bridge.`,
            image: "/images/surgical/dental implants replace missing teeth fixed bridge.jpg"
          },
          {
            title: "Flipper",
            content: `A fragile, temporary and inexpensive solution is a removable plastic tooth with a plastic retainer, often called a "flipper".`,
            image: "/images/surgical/dental implants replace missing teeth flipper.jpg"
          },
          {
            title: "Metal Partial",
            content: `A less fragile option is a removable partial denture cast in metal and plastic. It is held in place by wire clips. A removable partial denture can be removed and reinserted when required by the patient.`,
            image: "/images/surgical/dental implants replace missing teeth metal partial.jpg"
          },
          {
            title: "Denture",
            content: `The most common solution, for people missing all teeth in one or both jaws are complete dentures. Some people adapt well to dentures. Others find them uncomfortable, even intolerable, because of differences in jaw size and shape.`,
            image: "/images/surgical/dental implants replace missing teeth denture.jpg"
          },
          {
            title: "Dental Implants",
            content: `Dental implants are the most comfortable and permanent solution. They form a strong foundation for teeth and keep the jaw healthy and strong. Implants support individual replacement teeth or secure specialized dentures in place. Unlike bridges, no healthy teeth are damaged. Unlike most bridges, implants can last a lifetime. Implant-supported replacement teeth can be attractive, stable, and comfortable for almost any patient.`,
            image: "/images/surgical/dental implants replace missing teeth dental implants.jpg"
          },
        ],
      },
      {
        id: "why-implants",
        title: "Why select dental implants over more traditional types of restorations?",
        content: `There are several reasons: A dental bridge can sacrifice the structure of surrounding good teeth to bridge the space of the missing tooth/teeth. In addition, removing a denture or a "partial" at night may be inconvenient, not to mention dentures that slip can be uncomfortable and rather embarrassing.`,
      },
    ],
  },
  {
    id: "implant-placement-overview",
    title: "Overview of Implant Placement",
    parent: "dental-implants",
    hasSections: true,
    video: "/videos/surgical/dental implants overview of implant placement.mp4",
    imageSet: {
      title: "The Surgical Procedure Steps",
      images: [
        { src: "/images/surgical/dental implants overview of implant placement the surgical procedure normal.jpg", label: "Normal Tooth" },
        { src: "/images/surgical/dental implants overview of implant placement the surgical procedure tooth loss.jpg", label: "Tooth Loss" },
        { src: "/images/surgical/dental implants overview of implant placement the surgical procedure implant placed.jpg", label: "Implant Placed" },
        { src: "/images/surgical/dental implants overview of implant placement the surgical procedure healing.jpg", label: "Healing" },
        { src: "/images/surgical/dental implants overview of implant placement the surgical procedure healed bone.jpg", label: "Healed Bone" },
        { src: "/images/surgical/dental implants overview of implant placement the surgical procedure implant restored.jpg", label: "Implant Restored" }
      ]
    },
    introContent: `The procedure to place a dental implant takes 30 to 60 minutes for one implant and only 2 to 3 hours for multiple implants. The number of appointments and time required, vary from patient to patient. The surgeon will bring great precision and attention to the details of your case.`,
    sections: [
      {
        id: "surgical-procedure",
        title: "The Surgical Procedure",
        content: `Prior to surgery, you may receive antibiotics and for greater comfort, intravenous sedation or nitrous oxide (laughing gas). These options are discussed with you at your consultation appointment. A local anesthetic will be administered to numb the area where the dental implant will be placed.

When you are comfortable, the surgeon makes a small incision in the gum tissue to reveal the bone, creates space using special instruments, and gently inserts the titanium implant. The top of this implant is often visible through the gum. Sometimes it is better in the early stages of healing to have the implant covered by the gum tissue.`,
      },
      {
        id: "healing",
        title: "Healing after Dental Implant Surgery",
        content: `Now the healing begins. The length of time varies from person to person, depending upon the quality and quantity of bone. In some cases, implants may be restored immediately after they are placed. The surgeon will advise you on follow-up care and timing. After the initial phase of healing, the surgeon places an abutment (support post) or a healing cap onto the dental implant during a brief follow-up visit. This allows gum tissue to mature and provides access to the implant.

Occasionally, impressions are made at the time the implant is placed. This enables the crown to be ready when the implants have healed. How long your mouth needs to heal is determined by a variety of factors. Follow-up care (one to four appointments) is usually needed to ensure that your mouth is healing well and to determine when you are ready for the restorative phase of your treatment.

It may be beneficial to perform a soft tissue graft to obtain stronger, more easily cleaned and natural appearing gum tissue in the area around the implant. This process involves moving a small amount of gum tissue from one part of your mouth to the area around the implant. Most often, it is a brief and relatively comfortable procedure.

Whether it's one tooth or all of your teeth that are being replaced, your dentist will complete the restoration by fitting the replacement tooth (crown) to the dental implant.`,
      },
      {
        id: "when-placed",
        title: "When are dental implants placed?",
        content: `Implants are often placed several months after extraction. At times, an implant may be placed immediately after extraction of a tooth. This may involve a little more risk, but it simplifies the process—you won't have to wait for another appointment to place the implant. When infection or other problems with the bone are present, immediate implant placement is not the best treatment.

If your tooth has been missing for some time, the adjacent support bone is likely to grow thinner and shrink. This occurs because the root of the natural tooth has to be present to stimulate the bone. As much as one third of your jaw's thickness can be lost in the year following tooth extraction. If you are missing enough bone, you may benefit from having additional bone grafted into the area. This ensures the implant will be adequately supported when it is placed in the jaw.`,
      },
      {
        id: "how-many",
        title: "How many implants do I need?",
        content: `Most frequently, one implant per missing tooth is placed. Because many of the larger teeth in the back of your jaws have two or three roots, the most common approach is to replace missing back teeth with larger implants.`,
      },
    ],
  },
  {
    id: "missing-all-teeth",
    title: "Missing All Upper or Lower Teeth",
    parent: "dental-implants",
    hasSections: true,
    introContent: `Although many patients have no problem wearing an upper denture, some people find it difficult to wear and eat with lower dentures. Several implant-supported replacement options are available if you are missing all of your lower or upper teeth.`,
    sections: [
      {
        id: "lower-options",
        title: "Missing All Lower Teeth",
        content: ``,
        subsections: [
          {
            title: "Ball Attachment Denture",
            content: `One option is to have two implants placed in your lower jaw and a denture made that snaps onto these implants. This option allows your lower denture to be more stable while chewing than without implants. However, there will still be movement of your lower denture, and sore spots will occur if any food particles, especially seeds, are caught under it. As with all removable replacement teeth, you still will need periodic appointments for denture adjustment.`,
            imageSet: {
              images: [
                { src: "/images/surgical/dental implants missing all upper or lower teeth ball attachment before.jpg", label: "Before" },
                { src: "/images/surgical/dental implants missing all upper or lower teeth ball attachment implant placed.jpg", label: "Implant Placed" },
                { src: "/images/surgical/dental implants missing all upper or lower teeth ball attachment after.jpg", label: "After" }
              ]
            }
          },
          {
            title: "Bar Attachment Denture",
            content: `Another option involves placing four to six implants, depending on your jaw size or shape, into your lower jaw. After healing is complete, the implants are connected with a custom-made support bar. Your denture will be made with special internal retention clips that attach onto the support bar, enabling the denture to snap firmly into place. This is called an "overdenture." The advantage of this option is that it is much more stable than the first option and allows very little denture movement. Your denture is still removable for easy cleaning and maintenance.`,
            imageSet: {
              images: [
                { src: "/images/surgical/dental implants missing all upper or lower teeth bar attachment denture before.jpg", label: "Before" },
                { src: "/images/surgical/dental implants missing all upper or lower teeth bar attachment denture implant placed.jpg", label: "Implant Placed" },
                { src: "/images/surgical/dental implants missing all upper or lower teeth bar attachment denture after.jpg", label: "After" }
              ]
            }
          },
          {
            title: "Screw Retained Denture",
            content: `A third option involves placing five or more implants in your jaw and attaching a permanent denture. Your denture is held in place by screws or clasps that secure it to the support posts or bar. It doesn't touch the gum tissue, which allows you to clean under the denture without removing it. This denture will replace all your missing lower teeth and will not be removed except at maintenance visits. Although cleaning under your denture without removing it is more time consuming and requires more dexterity, many patients who want a permanent denture prefer this option.`,
            imageSet: {
              images: [
                { src: "/images/surgical/dental implants missing all upper or lower teeth screw retained denture before.jpg", label: "Before" },
                { src: "/images/surgical/dental implants missing all upper or lower teeth screw retained denture implant placed.jpg", label: "Implant Placed" },
                { src: "/images/surgical/dental implants missing all upper or lower teeth screw retained denture after.jpg", label: "After" }
              ]
            }
          },
          {
            title: "Individual Implants",
            content: `The final option is to have all your teeth individually replaced so that they will appear to be growing out of your gum tissue and will most closely resemble the appearance of your natural teeth. This option usually requires eight or more implants. Separate abutments or support posts for each one of these implants will be made and crowns for each missing tooth will be placed. Overall, this is the most costly option, because it requires the most implants and individual replacement tooth fabrication.`,
            imageSet: {
              images: [
                { src: "/images/surgical/dental implants missing all upper or lower teeth individual implants before.jpg", label: "Before" },
                { src: "/images/surgical/dental implants missing all upper or lower teeth individual implants implants placed.jpg", label: "Implants Placed" },
                { src: "/images/surgical/dental implants missing all upper or lower teeth individual implants after.jpg", label: "After" }
              ]
            }
          },
        ],
      },
      {
        id: "upper-options",
        title: "Missing All Upper Teeth",
        content: `A similar range of treatment options is also available for your upper jaw. However, because the bone is not as hard as that in the lower jaw, people often need more implants to support their new replacement teeth.`,
        subsections: [
          {
            title: "Implant Retained Upper Denture",
            content: `Depending upon the number of implants to be placed, it may be possible to eliminate the need for covering the roof of your mouth with a complete denture. This option allows you to fully taste your food and gives you a better sense of its temperature. Your denture will feel more natural. You will still have a removable denture, which makes cleaning the support bar and denture much easier.`,
            image: "/images/surgical/dental implants missing all upper or lower teeth what if  implant retained upper denture.jpg"
          },
          {
            title: "Individual Upper Implants",
            content: `If you want a restoration that is similar to your natural teeth and therefore not removable, you probably will need eight to ten individual implants placed. This is followed after healing by the placement of the abutments and new replacement crowns.`,
            image: "/images/surgical/dental implants missing all upper or lower teeth what if individual upper implants.jpg"
          },
        ],
      },
    ],
  },
  {
    id: "bone-grafting-implants",
    title: "Bone Grafting for Implants",
    parent: "dental-implants",
    hasSections: true,
    imageSet: {
      title: "Bone Grafting Process",
      images: [
        { src: "/images/surgical/dental implants bone grafting for implants inadequate bone 1.jpg", label: "Inadequate Bone" },
        { src: "/images/surgical/dental implants bone grafting for implants inadequate bone 2.jpg", label: "Bone Assessment" },
        { src: "/images/surgical/dental implants bone grafting for implants grafting material placed 1.jpg", label: "Grafting Material Placed" },
        { src: "/images/surgical/dental implants bone grafting for implants grafting materials and implants placed 2.jpg", label: "Material & Implants" },
        { src: "/images/surgical/dental implants bone grafting for implants implants placed.jpg", label: "Implants Placed" }
      ]
    },
    introContent: `After tooth extraction, if the walls of the socket are very thick, they will usually fill naturally with bone in two to three months. However, when the walls of your socket are very thin (such as in your upper and lower front teeth), this type of healing will not be as predictable.`,
    sections: [
      {
        id: "enough-bone",
        title: "Do I have enough bone for dental implants?",
        content: `In these situations, a bone graft is often placed at the time of tooth extraction to help your body fill in the empty socket with bone. This step will maintain the width and volume of bone you will need for implant placement several months later.

There may be inadequate bone for implant placement if your tooth was removed many years ago and your bony ridge is extremely thin. In this case, a bone graft can be placed next to the thin bone and allowed to heal for up to six months. After the graft has fused to your pre-existing bone, the ridge will be re-entered and the implant placed. Bone grafting is usually a relatively comfortable office procedure. Many different bone-grafting materials are available, including your own bone.

You may also need bone grafting if the sinus cavities in your upper jaw are very large, or very low, and extend into the tooth-bearing areas. This often occurs when teeth in the back of a person's upper jaw have been removed many years before, and the amount of bone available for implant placement is limited. A "sinus grafting procedure" is then required. Most often, it is performed in the office with local anesthesia and perhaps sedation. During this procedure, the membrane that lines the sinus will be located and elevated. Bone will then be added to restore the bone height and ensure that dental implants of an adequate length can be placed. This procedure often can be performed at the time of implant placement.`,
      },
    ],
  },
  {
    id: "implant-overdenture",
    title: "Implant Supported Overdenture",
    parent: "dental-implants",
    hasSections: true,
    video: "/videos/surgical/dental implants implant supported overdenture.mp4",
    introContent: `An Implant Supported Overdenture is a contemporary restoration that has revolutionized the way surgeons and dentists think of replacing a full set of teeth. Standard dentures are unsecured prostheses with inherent limitations. Most often, dentures are painful, inconvenient and unstable. Such dentures can make chewing foods difficult, limiting the foods that you once enjoyed. Modern dentistry can help with implant supported dentures.`,
    sections: [
      {
        id: "benefits",
        title: "",
        content: `The Implant Supported Overdenture treatment concept replaces your missing teeth with a full dental bridge supported by dental implants. Fewer implants are needed and overall treatment time and cost is reduced. An Implant Supported Overdenture solution also ensures greater stability in the bone, reducing the need for bone graft surgery to increase bone volume. Implant-supported overdentures stay connected with bar and clip attachment methods or use a variety of abutment-based attachments (ball, magnets, and resilient stud attachments such as Locators). The most appropriate attachment system for your individual needs relates to a variety of factors that is determined early in the treatment. Typically, a temporary set of teeth can be placed on the same day of surgery. The temporary teeth allow you to lead a normal life immediately after surgery. After a short healing period, your dentist will place the final bridge. Your quality of life is improved, and you can start enjoying your favorite foods again with renewed confidence.

Implant Supported Overdentures offer you many advantages:
• A cost effective solution. When compared to some other implant supported restoration methods, your new replacement teeth require fewer implants for each jaw. With fewer implants required, the cost is lowered.
• Reduced need for bone grafting. The special angled placement of two of the implants ensures a secure and stable anchorage for the replaced arch, often making bone grafting unnecessary.
• Faster treatment and healing time. Your replacement arch can be attached to your implants immediately after insertion.
• Scientifically proven and documented. Implant Supported Overdentures have had good clinical outcomes from decade long studies with favorable results.`,
      },
    ],
  },
  {
    id: "after-implant-faq",
    title: "After Dental Implant Placement FAQ",
    parent: "dental-implants",
    hasSections: true,
    image: "/images/surgical/dental implants after implant placement.jpg",
    introContent: `Common questions and answers about the dental implant process and recovery.`,
    sections: [
      {
        id: "temporary-teeth",
        title: "What can I use for teeth while the implants heal?",
        content: `Many options are available, and they are tailored to your specific requirements. If you need a replacement tooth while the implants are healing, temporary removable teeth or a temporary bridge can be made. If all of your teeth are missing, we can usually modify your present complete denture or make you a new temporary denture. If you would prefer non-removable teeth during the healing phase, temporary transitional implants usually can be placed along with the permanent implants, and temporary teeth may be made and inserted the same day. Depending on your particular situation, some implants can be placed and "loaded" immediately. This means a temporary or permanent replacement tooth can be placed on, or shortly after, the day the implant is placed.`,
      },
      {
        id: "potential-problems",
        title: "What are the potential problems after dental implant surgery?",
        content: `Although it is natural to be concerned about the pain that may be caused by these procedures, most patients do not experience severe or significant post-operative pain. Pain medication and antibiotics will be prescribed for you to make your recovery as easy as possible. Occasionally, some people develop post-operative infections that require additional antibiotic treatment. Even though great care is taken to place the implant precisely, occasionally adjacent teeth are injured in the placement process. In addition, there is a chance that the nerve in the lower jaw, which provides sensation to your lower lip and chin, may be affected. If you are missing quite a lot of bone, it might be difficult to place an implant without infringing on the nerve space. Although we take great care to avoid this nerve, occasionally it is irritated during the procedure, resulting in tingling, numbness or a complete lack of sensation in your lip, chin or tongue. Usually these altered sensations will resolve within time, but they can be permanent and/or painful. If you notify us of post-operative numbness as soon as possible, it will allow us to manage your care in the most appropriate way.`,
      },
      {
        id: "how-long-last",
        title: "How long will the implants last?",
        content: `Implants usually last a long time. When patients are missing all of their teeth, long-term studies (more than 30 years) show an 80 to 90 percent success rate. For patients missing one or several teeth, recent studies show a success rate of greater than 95 percent, which compares favorably with other areas in the body that receive implant replacement (such as hips or knees). However, if one of your dental implants either doesn't heal properly or loosens after a period of time, you may need to have it removed. After the site heals (or on occasion at the time of removal), another implant usually can be placed.`,
      },
      {
        id: "when-attached",
        title: "When are the replacement teeth attached to the implant?",
        content: `The replacement teeth are usually attached to the implant when adequate healing has occurred and your jaw bone is firmly fused to the implant. Depending on a variety of factors, it may be possible to begin this phase of your treatment immediately or shortly after implant placement. We will review the most appropriate treatment sequence and timing for your particular situation.

The dental work required to complete your treatment is complex. Most of the work involves actually making the new teeth before they are placed. Your appointments are considered more comfortable and more pleasant than previous methods of tooth replacement. Frequently, this process can be performed without local anesthesia.`,
      },
      {
        id: "how-clean",
        title: "How do I clean my new teeth?",
        content: `As with natural teeth, it is important that you clean implant-supported restorations regularly with toothbrushes, floss and any other recommended aids. You should also visit your dentist several times each year for hygiene and maintenance. As with regular dentures and other tooth replacements, your dental implants and their associated components are subject to wear and tear and eventually will need repair, including clip replacement, relines, screw tightening, and other adjustments.`,
      },
      {
        id: "one-doctor",
        title: "Will one doctor do everything?",
        content: `Usually, a dental surgeon places the dental implant(s) and performs other necessary surgical procedures – your general dentist provides the temporary and permanent replacement teeth. Both doctors are involved in planning your dental treatment. Also, depending upon a variety of factors, different dental specialists may help with your dental care.`,
      },
      {
        id: "cost",
        title: "How much does dental implant treatment cost?",
        content: `Before treatment begins, every effort will be made to give you an accurate estimate of all the expenses involved in placing the implants and making your replacement teeth. In many cases, there is an initial charge for the diagnostic work-up, including study models, x-rays, and the fabrication of a surgical template to ensure the best possible result. In addition you will be charged for the abutment or support post(s), plus the crown, dentures, or anything else that will be placed over the implants, including temporary restorations. Periodic maintenance such as hygiene visits, tissue conditioners, denture relines and other repairs will also incur additional charges.

When different doctors are involved in your treatment, you will be charged separately for their services. We will try to assist you in estimating what your actual payments will be after we evaluate your insurance coverage or other third party payments. Also, you should consider your personal financial investment in each treatment option as some insurance companies provide limited or no coverage.`,
      },
    ],
  },
  {
    id: "implant-cost",
    title: "Considering the Cost of Dental Implants",
    parent: "dental-implants",
    hasSections: true,
    introContent: `Dental implants have been available for several decades. However, for most patients, they are still a relatively new concept. When considering the cost of dental implants and comparing quotes, there are several important points that should be kept in mind.`,
    sections: [
      {
        id: "longevity",
        title: "Longevity",
        content: `When comparing the cost of dental implants to other tooth replacement methods such as dentures and bridges, it is important to take into consideration the longevity offered by dental implants that is not always afforded by other, more traditional methods.

While dentures and bridges are initially less expensive, their affordability can be short-lived. Because these older methods require repair and replacement every 5-10 years, they are often more expensive over time. By contrast, dental implants, when properly placed and cared for, can last a lifetime.`,
      },
      {
        id: "jaw-health",
        title: "Jaw Bone Health",
        content: `Over time, when a tooth is missing, the jaw bone deteriorates. So while a denture or bridge may seem to function similarly to a tooth, underneath the surface damage is being done to the jaw bone and ultimately to the structure of the face. This can result in the distortion of the shape of a person's face, leading to additional cosmetic costs down the road.

On the other hand, dental implants are made of titanium, which actually integrates with the jaw bone, strengthening it and stimulating bone growth. This preserves the natural strength and quality of the mouth, lessening problems in the future.`,
      },
      {
        id: "quality-life",
        title: "Quality of Life",
        content: `Dental implants can be seen as a long-term investment not only in terms of money, but also in terms of quality of life. A dental implant is the closest thing to a natural tooth. In addition to allowing the patient to eat the same healthy foods he or she has always enjoyed, it also eliminates the day-to-day hassles and possible embarrassment that are frequently caused by dentures.`,
      },
      {
        id: "comparing-quotes",
        title: "Comparing Dental Implant Quotes",
        content: `There are several steps (and often multiple professionals) involved in the placement of a dental implant. When comparing quotes, it's important to factor in the cost of each of these steps:

• Exams/office visits
• Tooth/root extraction
• Bone grafting
• Placement of the titanium root (the "dental implant")
• Placement of the crown
• X-rays, pre/post operative care`,
      },
      {
        id: "financing",
        title: "Financing for Dental Implants",
        content: `First, check with your dental insurance carrier to see what portion, if any, of dental implants they cover.

There are health care credit companies that offer no-interest and low-interest loans for medical procedures including dental implants.

Dental Implants are an investment in your health as well as your appearance. A full set of teeth makes eating a pleasure again, making it easier to eat a balanced, healthy diet. A full set of teeth also preserves the contours of the face, keeping you from looking old before your time.`,
      },
    ],
  },
  {
    id: "pinhole-surgical",
    title: "Pinhole Surgical Technique PST™",
    hasSections: true,
    introContent: `The Pinhole Surgical Technique PST™ is a procedure in which the doctor uses specialized instruments to make a small hole in your gum and add collagen material which stabilizes the area of gum recession. This new method is simple, suture-free and minimally invasive.

PST™ was developed and patented by John Chao, D.D.S. It has been featured in the International Journal of Periodontics, one of the most prestigious dentistry journals in the world.`,
    sections: [
      {
        id: "causes",
        title: "What causes gum recession?",
        content: `While gum recession is usually viewed as one of the symptoms of gum disease, it can also be caused by insufficient tooth brushing, overly aggressive tooth brushing, or from certain medications that can affect gum health. Gum recession can even be caused by orthodontic treatments and appliances like braces or retainers.`,
      },
      {
        id: "why-choose",
        title: "Why choose PST™?",
        content: `Unlike gum grafting, The Pinhole Surgical Technique PST™ is minimally invasive and does not cut gum tissue, making it a much less painful option. Gum recession was traditionally treated using a connective tissue graft, which "harvests" gum tissue from the roof of the mouth and then sutures it to the affected area. Connective tissue grafts have a recovery period of up to three weeks and patients often experience side effects including: gum pain, swelling and bleeding. Palatal tissue grafts (tissue taken from the roof of your mouth) also have a different esthetic appearance than normal gum tissue, as the color and texture of roof tissue does not match that of your gums. Other methods, such as using donor tissues, may require intricate suturing, leading to possible complications and infection.`,
      },
      {
        id: "benefits",
        title: "Benefits of PST™",
        content: `• Non-invasive
• Reduces the side effects of gum surgery (bleeding, swelling, gum pain)
• Near-immediate cosmetic improvement
• Incision and suture-free
• Accelerated recovery
• One visit can treat multiple areas of recession

If you have any concerns about possible gum recession, or are worried about the side effects of gum grafting, contact our office today to schedule an appointment. We will be happy to discuss the details and benefits of The Pinhole Surgical Technique PST™.`,
      },
    ],
  },

  // SURGICAL INSTRUCTIONS
  {
    id: "surgical-instructions",
    title: "Surgical Instructions",
    hasLinks: true,
    isParent: true,
    introContent: `Important pre-operative and post-operative instructions to ensure proper healing and recovery.`,
    links: [
      { id: "pre-operative", label: "Pre-operative Instructions" },
      { id: "general-post-op", label: "General Post-operative Instructions" },
      { id: "biopsy-post-op", label: "Biopsy Post-Op Instructions" },
      { id: "extractions-post-op", label: "Extractions Post-Op Instructions" },
      { id: "periodontal-post-op", label: "Periodontal/Oral Surgery/Dental Implants Post-Op" },
      { id: "gingival-graft-post-op", label: "Gingival Graft Post-Op" },
    ],
  },
  {
    id: "pre-operative",
    title: "Pre-operative Instructions",
    parent: "surgical-instructions",
    hasSections: true,
    introContent: `** IT IS VERY IMPORTANT THAT YOU EAT BEFORE YOUR SURGICAL APPOINTMENT! **

The following instructions may be helpful when preparing for your upcoming surgery. Please do not hesitate to call if you have any last minute questions. We can be reached at 770-832-0089 during regular business hours.`,
    sections: [
      {
        id: "prescriptions",
        title: "Prescriptions",
        content: `You should receive your pre/post-operative prescriptions at your pre-operatory appointment. For your convenience, please have any prescriptions filled prior to your scheduled surgery, unless they have been previously phoned into the pharmacy of your choice. Please bring your filled prescriptions with you to your surgical appointment.`,
      },
      {
        id: "medications",
        title: "Regular Medications",
        content: `Please consult with your physician regarding instructions on how to take, or temporarily cease taking, your regular medications. It may be important to stop taking aspirin and non-steroidals (such as Iburopfen), or blood thinners (such as Coumadin). If you take antibiotic pre-med, please take it as directed before your surgery.`,
      },
      {
        id: "eating",
        title: "Before Surgery",
        content: `WE RECOMMEND THAT YOU EAT PRIOR TO YOUR SURGERY. You will feel better if you have eaten prior to surgery. We keep the office cool, so dress warmly. You may bring entertainment devices (mobile phone, tablet, etc.) with you if you like.

In order to evaluate your progress and healing, we will see you for weekly post-operative checks during the first 1-6 weeks.`,
      },
      {
        id: "antibiotics",
        title: "Antibiotics",
        content: `Please alert the office to any allergies or sensitivities that you might have to antibiotics. You will be prescribed an antibiotic if the doctor determines it to be necessary. Take as directed until gone. It is advisable not to take these medications on an empty stomach, as nausea may result. For women taking birth control pills, be advised that antibiotics may interfere with their effectiveness.`,
      },
      {
        id: "sedatives",
        title: "Sedatives",
        content: `For comfort, our Practice offers nitrous oxide (laughing gas) and an option. Please note that we are unable to administer nitrous oxide if you have elected to take an oral sedative — patients may choose either nitrous oxide OR an oral sedative, but not both. Please note that if you opt for an oral sedative, you must have a ride to and from the office. Please bring your remaining tablets with you. Remember, we encourage you to eat prior to your surgery.`,
      },
      {
        id: "food-suggestions",
        title: "Food Suggestions",
        content: `Eating is important not only for your recovery but also for your while taking prescribed medication. Taking medication on an empty stomach may cause nausea. When preparing a post-op menu, please consider menu options that contain protein. Some examples are:

• Poultry
• Protein Shakes
• Macaroni & Cheese
• Beans
• Mashed Potatoes with Cheese
• Yogurt
• Casseroles
• Eggs
• Fish
• Cheese
• Peanut Butter`,
      },
    ],
  },
  {
    id: "general-post-op",
    title: "General Post-operative Instructions",
    parent: "surgical-instructions",
    hasSections: true,
    introContent: `Should you have any questions or concerns during regular office hours, please do not hesitate to contact us at 770-832-0089. After hours in case of an emergency, you may contact 770-459-7333.

These instructions apply to the surgical procedure just completed. They are designed to help you minimize post-surgical discomfort and inform you of any situation that may require special attention.`,
    sections: [
      {
        id: "eating",
        title: "EAT FOODS HIGH IN PROTEIN AND DRINK PLENTY OF WATER",
        content: `Eating is very important not only for your recovery process but also for you while taking the prescribed medication. Taking medication on an empty stomach will often cause nausea.

PROTEIN: Steak, fish, chicken, peanut butter, cottage cheese, yogurt, eggs with cheese, and mashed potatoes with cheese (If you don't feel up to eating a big meal a simple egg and cheese sandwich is a great option)

If you are having surgery for implants and they are immediately loading the implants (meaning they are putting teeth on them the day of surgery), you can ONLY eat "soft" foods for 3 to 6 months.

FLUIDS: Plenty of fluids will not only promote your healing process but help with swelling and bruising you may experience. We encourage you to drink 1-2 GALLONS OF WATER PER DAY!`,
      },
      {
        id: "pain-medications",
        title: "Pain Medications",
        content: `It is not unusual to have discomfort for at least the first week following your surgical procedure. You will be given a prescription for medication to help you tolerate the post-surgical recovery period. Please take your medications as directed. It is advisable to not take pain medication on an empty stomach, as nausea may result.

Please alert the office to any allergies or sensitivities that you might have to antibiotics. An antibiotic may be prescribed following your surgical procedure. Take as directed until gone. It is advisable not to take these medications on an empty stomach, as nausea may result. For women taking birth control pills, be advised that antibiotics may interfere with their effectiveness.`,
      },
      {
        id: "alcohol",
        title: "Alcohol",
        content: `Do not drink alcohol while taking prescription pain medications.`,
      },
      {
        id: "suture-removal",
        title: "Suture Removal",
        content: `You may notice increased discomfort 3-4 days after the surgical procedure. As the tissues begin to heal, they may pull against the sutures and dressing. You may choose to take some form of pain medication one hour prior to your suture removal appointment to minimize tenderness. If you are a patient for whom antibiotic pre-medication is required, take the prescribed antibiotics as directed for your suture removal appointment.`,
      },
    ],
  },
  {
    id: "biopsy-post-op",
    title: "Biopsy Post-Op Instructions",
    parent: "surgical-instructions",
    hasSections: true,
    introContent: `Specific post-operative instructions for biopsy procedures.`,
    sections: [
      {
        id: "content",
        title: "",
        content: `Follow the general post-operative instructions provided by the doctor. Avoid disturbing the surgical site and maintain good oral hygiene in other areas of your mouth.`,
      },
    ],
  },
  {
    id: "extractions-post-op",
    title: "Extractions Post-Op Instructions",
    parent: "surgical-instructions",
    hasSections: true,
    introContent: `Specific post-operative instructions for tooth extraction procedures.`,
    sections: [
      {
        id: "content",
        title: "",
        content: `After extraction, follow all general post-operative instructions. Avoid spitting, using straws, or smoking for at least 48 hours to prevent dry socket. Bite on gauze as directed to control bleeding.`,
      },
    ],
  },
  {
    id: "periodontal-post-op",
    title: "Periodontal/Oral Surgery/Dental Implants Post-Op",
    parent: "surgical-instructions",
    hasSections: true,
    introContent: `Post-operative instructions for periodontal surgery, oral surgery, and dental implant procedures (includes all surgical procedures except biopsy, extraction & gingival graft).`,
    sections: [
      {
        id: "content",
        title: "",
        content: `Follow all general post-operative instructions carefully. Take prescribed medications as directed. Maintain excellent oral hygiene while avoiding the surgical site during initial healing. Attend all follow-up appointments as scheduled.`,
      },
    ],
  },
  {
    id: "gingival-graft-post-op",
    title: "Gingival Graft Post-Op",
    parent: "surgical-instructions",
    hasSections: true,
    introContent: `Specific post-operative instructions for gingival graft procedures.`,
    sections: [
      {
        id: "content",
        title: "",
        content: `Avoid brushing or flossing the grafted area until cleared by the doctor. Eat soft foods and avoid hot or spicy foods. Do not pull on your lip to look at the graft as this may cause damage. Follow all prescribed medications and attend follow-up appointments.`,
      },
    ],
  },
];
