import Reveal from "../components/Reveal";

export default function Disclaimer() {
  return (
    <section className="py-24 px-12 max-w-4xl mx-auto min-h-screen">
      <Reveal>
        <h1 className="text-5xl font-display italic text-gray-800 mb-12">
          Disclaimer & Privacy Policy
        </h1>
      </Reveal>

      {/* Notice Section */}
      <Reveal>
        <div className="mb-12">
          <h2 className="text-2xl font-display italic text-gray-800 mb-4">
            Notice to Website Viewers
          </h2>
          <div className="text-gray-700 font-light leading-loose text-lg space-y-4">
            <p>
              This web site is provided for information and education purposes only. No doctor/patient
              relationship is established by your use of this site. No diagnosis or treatment is being
              provided. The information contained here should be used in consultation with a doctor of
              your choice. No guarantees or warranties are made regarding any of the information
              contained within this web site.
            </p>
            <p>
              This web site is not intended to offer specific medical, dental or surgical advice to anyone.
              Further, this web site, Donna Thomas-Moses, DMD, and Hazeka Kadri, DMD, PC take no responsibility for web sites
              hyper-linked to this site and such hyperlinking does not imply any relationships or
              endorsements of the linked sites.
            </p>
          </div>
        </div>
      </Reveal>

      {/* Privacy Policy Section */}
      <Reveal>
        <div className="mb-12 pt-8 border-t border-gray-200">
          <h2 className="text-2xl font-display italic text-gray-800 mb-4">
            Privacy Policy
          </h2>
          <p className="text-gray-600 text-sm mb-6">
            For https://www.carrolltonperio.com
          </p>
          <div className="text-gray-700 font-light leading-loose text-lg space-y-4">
            <p>
              If you require any more information or have any questions about our privacy policy,
              please feel free to contact us. At https://www.carrolltonperio.com, the privacy of our
              visitors is of extreme importance to us. This privacy policy document outlines the types
              of personal information that is received and collected by https://www.carrolltonperio.com
              and how it is used.
            </p>
          </div>
        </div>
      </Reveal>

      {/* Personal Information Section */}
      <Reveal>
        <div className="mb-12 pt-8 border-t border-gray-200">
          <h2 className="text-2xl font-display italic text-gray-800 mb-4">
            Personal Information
          </h2>
          <div className="text-gray-700 font-light leading-loose text-lg space-y-4">
            <p>
              By entering your full name, email address, and phone number, you are providing personal
              information that will be used by Donna Thomas-Moses, DMD, and Hazeka Kadri, DMD, PC for the sole purpose of
              returning your request to be contacted by us. We will only use this information to contact
              you in order to assist you in scheduling an appointment to be seen by our doctors,
              and/or to answer any questions you may have indicated in the comments section.
            </p>
            <p>
              Our intention is to only use your personal information to return your request for contact
              regarding a dental appointment, and/or a dental related question.
            </p>
          </div>
        </div>
      </Reveal>

      {/* Opt-Out Section */}
      <Reveal>
        <div className="mb-12 pt-8 border-t border-gray-200">
          <h2 className="text-2xl font-display italic text-gray-800 mb-4">
            Opt-Out Option
          </h2>
          <div className="text-gray-700 font-light leading-loose text-lg">
            <p>
              Please contact us if you wish to opt-out/unsubscribe from receiving any future communication.
            </p>
          </div>
        </div>
      </Reveal>

      {/* Log Files Section */}
      <Reveal>
        <div className="mb-12 pt-8 border-t border-gray-200">
          <h2 className="text-2xl font-display italic text-gray-800 mb-4">
            Log Files
          </h2>
          <div className="text-gray-700 font-light leading-loose text-lg">
            <p>
              Like many other Web sites, https://www.carrolltonperio.com makes use of log files.
              The information inside the log files includes internet protocol (IP) addresses, type of
              browser, Internet Service Provider (ISP), date/time stamp, referring/exit pages, and
              number of clicks to analyze trends, administer the site, track user's movement around
              the site, and gather demographic information. IP addresses, and other such information
              are not linked to any information that is personally identifiable.
            </p>
          </div>
        </div>
      </Reveal>

      {/* Accessibility Section */}
      <Reveal>
        <div className="mb-12 pt-8 border-t border-gray-200">
          <h2 className="text-2xl font-display italic text-gray-800 mb-4">
            Accessibility
          </h2>
          <div className="text-gray-700 font-light leading-loose text-lg space-y-4">
            <p>
              We strive to make the Donna Thomas-Moses, DMD, and Hazeka Kadri, DMD, PC website universally accessible and
              we are continuously working to improve the accessibility of content on our website.
            </p>
            <p>
              If this website does not meet your needs, please contact us at{" "}
              <a href="tel:770-832-0089" className="text-amber-700 hover:text-amber-800 font-medium">
                (770) 832-0089
              </a>{" "}
              for assistance.
            </p>
          </div>
        </div>
      </Reveal>

      {/* Contact Card */}
      <Reveal>
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 mt-12">
          <h3 className="text-xl font-display italic text-gray-800 mb-4">
            Questions About This Policy?
          </h3>
          <p className="text-gray-700 font-light mb-4">
            If you have any questions regarding this disclaimer or privacy policy, please contact us:
          </p>
          <div className="space-y-2 text-gray-700">
            <p>
              <span className="font-medium">Phone:</span>{" "}
              <a href="tel:770-832-0089" className="text-amber-700 hover:text-amber-800">
                (770) 832-0089
              </a>
            </p>
            <p>
              <span className="font-medium">Email:</span>{" "}
              <a href="mailto:info@carrolltonperio.com" className="text-amber-700 hover:text-amber-800">
                info@carrolltonperio.com
              </a>
            </p>
            <p>
              <span className="font-medium">Address:</span> 530 Newnan Street, Carrollton, GA 30117
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
