export const referringData = [
  {
    id: "referring-doctors",
    title: "Referring Doctors",
    hasLinks: true,
    isParent: true,
    introContent: `Welcome to our Referring Doctors section. We value our relationships with referring dentists and are committed to providing excellent care for your patients.

Select from the options below to access our referral form.`,
    links: [
      { id: "referral-form", label: "Referral Form" },
    ],
  },
  {
    id: "referral-form",
    title: "Referral Form",
    parent: "referring-doctors",
    hasSections: true,
    introContent: `To refer a patient to our practice, please download and complete our referral form.`,
    sections: [
      {
        id: "download",
        title: "",
        content: `Open our referral form in a new tab to view, print, or download the PDF:`,
        pdfLink: {
          url: "/forms/ReferralForm.pdf",
          label: "Open Referral Form (PDF)"
        }
      },
    ],
  },
  {
    id: "links-of-interest",
    title: "Links of Interest",
    hasSections: true,
    introContent: `The following websites are provided as a resource for our referring doctors. This page contains hyperlinks to World Wide Web sites that are created and maintained by other organizations. We have included these links because we think that our referring doctors may find them of interest. Keep in mind that our doctors do not necessarily endorse the views expressed on these websites. Also, we do not guarantee the accuracy or completeness of any information presented on these sites.`,
    sections: [
      {
        id: "general-links",
        title: "General Links:",
        content: "",
        links: [
          { url: "http://www.oxyfresh.com", label: "Oxyfresh Dental Products" },
          { url: "http://www.tepeusa.com", label: "TePe Brushes" },
          { url: "https://www.pankey.org/", label: "Pankey Institute" },
          { url: "http://www.ada.org", label: "American Dental Association" },
          { url: "http://www.gadental.org", label: "Georgia Dental Association" },
        ],
      },
      {
        id: "periodontist-links",
        title: "Periodontist Links:",
        content: "",
        links: [
          { url: "http://www.perio.org/", label: "American Academy of Periodontology" },
          { url: "https://www.perio.org/members", label: "American Academy of Periodontists Links Page" },
          { url: "http://www.abperio.org/", label: "American Board of Periodontology" },
          { url: "http://www.icoi.org", label: "International Congress of Oral Implantologists (ICOI)" },
        ],
      },
      {
        id: "dental-implant-links",
        title: "Dental Implant Links:",
        content: "",
        links: [
          { url: "https://osseo.org/", label: "Academy of Osseointegration" },
          { url: "http://www.bicon.com", label: "Bicon" },
          { url: "http://www.nobelbiocare.com", label: "Nobel Biocare" },
          { url: "http://www.straumann.com", label: "Straumann" },
          { url: "http://www.zimmerdental.com/Home/zimmerDental.aspx", label: "Zimmer Dental" },
        ],
      },
      {
        id: "womens-health-links",
        title: "Women's Health Links:",
        content: "",
        links: [
          { url: "http://www.4woman.org", label: "National Women's Health Information Center" },
          { url: "http://www.health.harvard.edu", label: "Harvard Women's Health Watch" },
        ],
      },
    ],
  },
];
