import type { ExperienceItem, Language, Project, SkillGroup } from "./types";

type ContactFormText = {
  namePlaceholder: string;
  emailPlaceholder: string;
  messagePlaceholder: string;
  sendButton: string;
  sending: string;
  success: string;
  fetchError: string;
  genericError: string;
  loginRequired: string;
};

type ContactInfoLabels = {
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  facebook: string;
  instagram: string;
};

type EducationContent = {
  university: string;
  degree: string;
  project: string;
  grade: string;
};

type ContentShape = {
  nav: string[];
  skipToContent: string;
  hero: {
    name: string;
    greeting: string;
    roles: string[];
    ctaPrimary: string;
    ctaSecondary: string;
  };
  about: {
    title: string;
    text: string;
  };
  skillsTitle: string;
  projectsTitle: string;
  experienceTitle: string;
  educationTitle: string;
  education: EducationContent;
  contactTitle: string;
  contactDescription: string;
  contactInfoLabels: ContactInfoLabels;
  contactForm: ContactFormText;
  footer: string;
};

export const content: Record<Language, ContentShape> = {
  en: {
    nav: [
      "Home",
      "About",
      "Skills",
      "Projects",
      "Experience",
      "Education",
      "Contact",
    ],
    skipToContent: "Skip to content",
    hero: {
      name: "Kamal Abu Zarifa",
      greeting: "Hello, I am",
      roles: [
        "Full-Stack Developer",
        "Computer Systems Engineer",
        "Backend Specialist",
      ],
      ctaPrimary: "View Projects",
      ctaSecondary: "Contact Me",
    },
    about: {
      title: "About Me",
      text: "I am Kamal Abu Zarifa, a Computer Systems Engineering graduate from Al-Azhar University of Gaza. I am passionate about software development, backend engineering, database systems, and modern web technologies. I focus on building scalable and efficient systems that solve real-world problems and deliver measurable value.",
    },
    skillsTitle: "Skills",
    projectsTitle: "Projects",
    experienceTitle: "Experience",
    educationTitle: "Education",
    education: {
      university: "Al-Azhar University of Gaza",
      degree: "Bachelor of Computer Systems Engineering",
      project:
        "Graduation Project: TheraLife - Intelligent Hospital Management System",
      grade: "Project Grade: Excellent",
    },
    contactTitle: "Contact",
    contactDescription: "Have an idea, project, or collaboration in mind? Send me a message and I will get back to you as soon as possible.",
    contactInfoLabels: {
      email: "Email",
      phone: "Phone",
      linkedin: "LinkedIn",
      github: "GitHub",
      facebook: "Facebook",
      instagram: "Instagram",
    },
    contactForm: {
      namePlaceholder: "Enter your name",
      emailPlaceholder: "Enter your email",
      messagePlaceholder: "Write your message here",
      sendButton: "Send Message",
      sending: "Sending...",
      success:
        "Your message has been sent successfully. I will get back to you as soon as possible.",
      fetchError:
        "Unable to reach the contact server. Please make sure the backend is running on port 8000.",
      genericError: "Something went wrong while sending your message. Please try again.",
      loginRequired: "No logged-in client email was found. Please sign in first.",
    },
    footer: "© 2026 Kamal Abu Zarifa. All Rights Reserved.",
  },
  ar: {
    nav: [
      "الرئيسية",
      "نبذة",
      "المهارات",
      "المشاريع",
      "الخبرة",
      "التعليم",
      "التواصل",
    ],
    skipToContent: "تخطي إلى المحتوى",
    hero: {
      name: "كمال ابو ظريفة",
      greeting: "مرحبًا، أنا",
      roles: ["مطور Full-Stack", "مهندس نظم حاسوب", "متخصص Backend"],
      ctaPrimary: "عرض المشاريع",
      ctaSecondary: "تواصل معي",
    },
    about: {
      title: "نبذة عني",
      text: "أنا كمال أبو ظريفة، خريج هندسة نظم الحاسوب من جامعة الأزهر بغزة. لدي شغف بتطوير البرمجيات وهندسة الأنظمة الخلفية وقواعد البيانات وتقنيات الويب الحديثة. أركز على بناء أنظمة قابلة للتوسع وفعالة لحل المشكلات الواقعية وتقديم قيمة حقيقية.",
    },
    skillsTitle: "المهارات",
    projectsTitle: "المشاريع",
    experienceTitle: "الخبرة",
    educationTitle: "التعليم",
    education: {
      university: "جامعة الأزهر - غزة",
      degree: "بكالوريوس هندسة نظم الحاسوب",
      project: "مشروع التخرج: TheraLife - نظام ذكي لإدارة المستشفيات",
      grade: "تقدير المشروع: ممتاز",
    },
    contactTitle: "التواصل",
    contactDescription: "إذا كان لديك فكرة، مشروع، أو فرصة تعاون، أرسل لي رسالة وسأرد عليك في أقرب وقت ممكن.",
    contactInfoLabels: {
      email: "البريد الإلكتروني",
      phone: "الهاتف",
      linkedin: "لينكدإن",
      github: "جيت هاب",
      facebook: "فيسبوك",
      instagram: "إنستغرام",
    },
    contactForm: {
      namePlaceholder: "اكتب اسمك",
      emailPlaceholder: "اكتب بريدك الإلكتروني",
      messagePlaceholder: "اكتب رسالتك هنا",
      sendButton: "إرسال الرسالة",
      sending: "جارٍ الإرسال...",
      success:
        "تم إرسال رسالتك بنجاح، وسأقوم بالرد عليك في أقرب وقت ممكن.",
      fetchError:
        "تعذر الوصول إلى خادم التواصل. تأكد من تشغيل الخادم الخلفي على المنفذ 8000.",
      genericError: "حدث خطأ أثناء إرسال رسالتك. يرجى المحاولة مرة أخرى.",
      loginRequired: "لم يتم العثور على بريد عميل مسجّل الدخول. يرجى تسجيل الدخول أولًا.",
    },
    footer: "© 2026 كمال أبو ظريفة. جميع الحقوق محفوظة.",
  },
};

export const skillGroupsByLanguage: Record<Language, SkillGroup[]> = {
  en: [
    {
      title: "Frontend",
      skills: ["HTML5", "CSS3", "JavaScript", "React", "Tailwind CSS"],
    },
    { title: "Backend", skills: ["PHP", "Laravel", "REST APIs"] },
    { title: "Databases", skills: ["MySQL", "Oracle Database", "PL/SQL"] },
    { title: "Programming", skills: ["PHP", "JavaScript", "Java"] },
    {
      title: "Software Engineering",
      skills: [
        "Database Design",
        "System Analysis",
        "API Integration",
        "Software Architecture",
      ],
    },
  ],
  ar: [
    {
      title: "الواجهة الأمامية",
      skills: ["HTML5", "CSS3", "JavaScript", "React", "Tailwind CSS"],
    },
    { title: "الواجهة الخلفية", skills: ["PHP", "Laravel", "REST APIs"] },
    { title: "قواعد البيانات", skills: ["MySQL", "Oracle Database", "PL/SQL"] },
    { title: "البرمجة", skills: ["PHP", "JavaScript", "Java"] },
    {
      title: "هندسة البرمجيات",
      skills: [
        "تصميم قواعد البيانات",
        "تحليل الأنظمة",
        "دمج واجهات API",
        "معمارية البرمجيات",
      ],
    },
  ],
};

export const projectsByLanguage: Record<Language, Project[]> = {
  en: [
    {
      title: "TheraLife Healthcare System",
      subtitle: "Graduation Project",
      image: "/TheraLife%20Healthcare%20System.jpg",
      url: "https://github.com/kamalabuzarifa/hospitalManagementSystem",
      description:
        "Intelligent hospital management system designed for efficient clinical workflows.",
      features: [
        "Patient Management",
        "Doctor Management",
        "Appointment Scheduling",
        "Medical Records",
        "Administration Dashboard",
      ],
      technologies: ["Laravel", "MySQL", "JavaScript"],
    },
    {
      title: "E-Commerce Website",
      image: "/E-Commerce%20Websit.jpg",
      url: "https://github.com/kamalabuzarifa/ArabCart",
      description:
        "Online shopping platform built for product browsing, cart management, and streamlined ordering.",
      features: [
        "Product Catalog",
        "Shopping Cart",
        "Order Flow",
        "Responsive UI",
        "User Authentication",
      ],
      technologies: ["PHP", "Laravel", "MySQL", "JavaScript"],
    },
    {
      title: "Under Development",
      image: "/deplo.png",
      description:
        "This third project is currently under development and will be published soon.",
      features: ["Work in progress", "Details coming soon"],
      technologies: ["Coming Soon"],
    },
  ],
  ar: [
    {
      title: "نظام TheraLife للرعاية الصحية",
      subtitle: "مشروع التخرج",
      image: "/TheraLife%20Healthcare%20System.jpg",
      url: "https://github.com/kamalabuzarifa/hospitalManagementSystem",
      description:
        "نظام ذكي لإدارة المستشفى مصمم لتحسين سير العمل الطبي بكفاءة.",
      features: [
        "إدارة المرضى",
        "إدارة الأطباء",
        "جدولة المواعيد",
        "السجلات الطبية",
        "لوحة تحكم الإدارة",
      ],
      technologies: ["Laravel", "MySQL", "JavaScript"],
    },
    {
      title: "موقع تجارة إلكترونية",
      image: "/E-Commerce%20Websit.jpg",
      url: "https://github.com/kamalabuzarifa/ArabCart",
      description:
        "منصة تسوق إلكتروني لعرض المنتجات وإدارة السلة وتسهيل عملية الطلب.",
      features: [
        "كتالوج المنتجات",
        "سلة التسوق",
        "مسار الطلب",
        "واجهة متجاوبة",
        "تسجيل دخول المستخدم",
      ],
      technologies: ["PHP", "Laravel", "MySQL", "JavaScript"],
    },
    {
      title: "تحت التطوير",
      image: "/deplo.png",
      description: "المشروع الثالث ما زال تحت التطوير وسيتم نشره قريبًا.",
      features: ["العمل جارٍ عليه", "سيتم إضافة التفاصيل قريبًا"],
      technologies: ["قريبًا"],
    },
  ],
};

export const experienceByLanguage: Record<Language, ExperienceItem[]> = {
  en: [
    {
      title: "Software Engineering Training - Nasser Medical Hospital",
      period: "Training Program",
      description:
        "Focused on practical engineering workflows, systems integration, and healthcare software context.",
    },
    {
      title: "Full-Stack Development Experience",
      period: "Professional Practice",
      description:
        "Built full-stack applications with strong backend architecture and responsive frontend interfaces.",
    },
    {
      title: "Database Engineering & Backend Development",
      period: "Core Expertise",
      description:
        "Designed relational schemas, optimized queries, and delivered robust backend services for business workflows.",
    },
  ],
  ar: [
    {
      title: "تدريب هندسة البرمجيات - مستشفى ناصر الطبي",
      period: "برنامج تدريبي",
      description:
        "التركيز على مسارات العمل الهندسية العملية وتكامل الأنظمة وسياق برمجيات الرعاية الصحية.",
    },
    {
      title: "خبرة تطوير Full-Stack",
      period: "ممارسة مهنية",
      description:
        "تطوير تطبيقات متكاملة بواجهة خلفية قوية وواجهات أمامية متجاوبة.",
    },
    {
      title: "هندسة قواعد البيانات وتطوير Backend",
      period: "خبرة أساسية",
      description:
        "تصميم مخططات علائقية وتحسين الاستعلامات وتقديم خدمات خلفية قوية لسير أعمال الشركات.",
    },
  ],
};
