export interface PageSEO {
  title: string;
  description: string;
  keywords: string;
  image?: string;
}

export const seoData: Record<string, PageSEO> = {
  home: {
    title: 'Carrollton Periodontics | Expert Periodontal Care & Dental Implants in Carrollton, GA',
    description: 'Leading periodontal specialists in Carrollton, GA. Dr. Donna Thomas-Moses & Dr. Hazeka Kadri provide expert care in gum disease treatment, dental implants, and cosmetic periodontal procedures. Accepting new patients.',
    keywords: 'periodontics Carrollton GA, dental implants Carrollton, gum disease treatment, periodontist near me, Dr. Donna Thomas-Moses, Dr. Hazeka Kadri, Carrollton dentist, dental implants Georgia, periodontal specialist, gum specialist, implant dentistry, Carrollton periodontal office',
    image: '/images/carousel/Moses-031-2000x680.jpeg',
  },
  contact: {
    title: 'Contact Us | Carrollton Periodontics - Schedule Your Appointment Today',
    description: 'Schedule an appointment with Carrollton Periodontics. Located at 530 Newnan Street, Carrollton, GA 30117. Call (770) 832-0089. Accepting new patients, consultations available.',
    keywords: 'contact periodontist Carrollton, schedule appointment, periodontics office hours, Carrollton GA dentist, emergency periodontal care, new patient appointment, dental consultation Carrollton, periodontal office location',
  },
  about: {
    title: 'About Our Practice | Carrollton Periodontics',
    description: 'Learn about our periodontal practice, our commitment to excellence, and advanced treatment techniques in Carrollton, GA.',
    keywords: 'about Carrollton Periodontics, periodontal practice, dental practice Carrollton GA',
  },
  patientInfo: {
    title: 'Patient Information | Carrollton Periodontics',
    description: 'Important information for new and existing patients including forms, insurance, and what to expect during your visit.',
    keywords: 'patient information, dental forms, insurance, periodontal care instructions',
  },
  periodontalDisease: {
    title: 'Periodontal Disease Treatment | Expert Gum Disease Care in Carrollton, GA',
    description: 'Comprehensive periodontal disease treatment including diagnosis, prevention, and advanced therapies for gum disease. Early detection and treatment can save your teeth and improve overall health.',
    keywords: 'gum disease, periodontal disease, gingivitis, periodontitis treatment, Carrollton GA, bleeding gums, receding gums, gum infection, bone loss, periodontal therapy, deep cleaning, scaling root planing',
  },
  nonSurgical: {
    title: 'Non-Surgical Procedures | Carrollton Periodontics',
    description: 'Advanced non-surgical periodontal treatments including scaling, root planing, and laser therapy.',
    keywords: 'non-surgical periodontal treatment, scaling and root planing, laser gum therapy, Carrollton',
  },
  surgical: {
    title: 'Surgical Procedures | Advanced Periodontal Surgery in Carrollton, GA',
    description: 'Expert surgical periodontal procedures including gum grafting, crown lengthening, bone grafting, and regenerative treatments. Minimally invasive techniques with advanced technology for optimal results.',
    keywords: 'periodontal surgery, gum grafting, crown lengthening, bone grafting, Carrollton GA, dental implant surgery, tissue regeneration, cosmetic gum surgery, gummy smile correction, pocket reduction surgery, sinus lift, ridge augmentation',
  },
  tmj: {
    title: 'TMJ Treatment | TMD Therapy & Jaw Pain Relief in Carrollton, GA',
    description: 'Comprehensive TMJ disorder diagnosis and treatment options to relieve jaw pain and dysfunction. Expert care for temporomandibular joint problems, headaches, and bite disorders.',
    keywords: 'TMJ treatment, TMD, jaw pain, temporomandibular joint, Carrollton, TMJ specialist, jaw disorder, bite problems, TMJ headaches, jaw clicking, jaw locking, occlusal therapy, TMJ appliance',
  },
  referringDoctors: {
    title: 'Referring Doctors | Carrollton Periodontics',
    description: 'Information for dental professionals referring patients for specialized periodontal care.',
    keywords: 'referring doctors, dental referrals, periodontal specialists, professional referrals',
  },
  ourTeam: {
    title: 'Our Team | Carrollton Periodontics',
    description: 'Meet our experienced team of periodontal specialists and staff dedicated to your oral health.',
    keywords: 'periodontal team, Dr. Donna Thomas-Moses, Dr. Hazeka Kadri, dental staff Carrollton',
  },
  teamStaff: {
    title: 'Our Staff | Carrollton Periodontics',
    description: 'Meet our friendly and professional dental staff committed to providing exceptional patient care.',
    keywords: 'dental staff, office team, patient care, Carrollton periodontics',
  },
  officeTour: {
    title: 'Office Tour | Carrollton Periodontics',
    description: 'Take a virtual tour of our modern, comfortable periodontal office in Carrollton, GA.',
    keywords: 'office tour, dental office, Carrollton periodontics facility',
  },
};
