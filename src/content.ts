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
    nav: ["Home", "About", "Skills", "Projects", "Experience", "Education", "Contact"],
    skipToContent: "Skip to content",
    hero: {
      name: "Kamal Abu Zarifa",
      greeting: "Hello, I am",
      roles: ["Full-Stack Developer", "Computer Systems Engineer", "Backend Specialist"],
      ctaPrimary: "View Projects",
      ctaSecondary: "Contact Me"
    },
    about: {
      title: "About Me",
      text: "I am Kamal Abu Zarifa, a Computer Systems Engineering graduate from Al-Azhar University of Gaza. I am passionate about software development, backend engineering, database systems, and modern web technologies. I focus on building scalable and efficient systems that solve real-world problems and deliver measurable value."
    },
    skillsTitle: "Skills",
    projectsTitle: "Projects",
    experienceTitle: "Experience",
    educationTitle: "Education",
    education: {
      university: "Al-Azhar University of Gaza",
      degree: "Bachelor of Computer Systems Engineering",
      project: "Graduation Project: TheraLife - Intelligent Hospital Management System",
      grade: "Project Grade: Excellent"
    },
    contactTitle: "Contact",
    contactDescription: "Let us collaborate on impactful software products.",
    contactInfoLabels: {
      email: "Email",
      phone: "Phone",
      linkedin: "LinkedIn",
      github: "GitHub",
      facebook: "Facebook",
      instagram: "Instagram"
    },
    contactForm: {
      namePlaceholder: "Your Name",
      emailPlaceholder: "Your Email",
      messagePlaceholder: "Your Message",
      sendButton: "Send Message",
      sending: "Sending...",
      success: "Your message has been sent successfully. Please allow a few hours for an email reply.",
      fetchError: "Could not reach contact server. Make sure backend is running on port 8000.",
      genericError: "Could not send message. Please try again."
    },
    footer: "© 2026 Kamal Abu Zarifa. All Rights Reserved."
  },
  ar: {
    nav: ["الرئيسية", "نبذة", "المهارات", "المشاريع", "الخبرة", "التعليم", "التواصل"],
    skipToContent: "تخطي إلى المحتوى",
    hero: {
      name: "كمال ابو ظريفة",
      greeting: "مرحبًا، أنا",
      roles: ["مطور Full-Stack", "مهندس نظم حاسوب", "متخصص Backend"],
      ctaPrimary: "عرض المشاريع",
      ctaSecondary: "تواصل معي"
    },
    about: {
      title: "نبذة عني",
      text: "أنا كمال أبو زريفة، خريج هندسة نظم الحاسوب من جامعة الأزهر بغزة. لدي شغف بتطوير البرمجيات وهندسة الأنظمة الخلفية وقواعد البيانات وتقنيات الويب الحديثة. أركز على بناء أنظمة قابلة للتوسع وفعالة لحل المشكلات الواقعية وتقديم قيمة حقيقية."
    },
    skillsTitle: "المهارات",
    projectsTitle: "المشاريع",
    experienceTitle: "الخبرة",
    educationTitle: "التعليم",
    education: {
      university: "جامعة الأزهر - غزة",
      degree: "بكالوريوس هندسة نظم الحاسوب",
      project: "مشروع التخرج: TheraLife - نظام ذكي لإدارة المستشفيات",
      grade: "تقدير المشروع: ممتاز"
    },
    contactTitle: "التواصل",
    contactDescription: "يسعدني التعاون في بناء منتجات برمجية مؤثرة.",
    contactInfoLabels: {
      email: "البريد الإلكتروني",
      phone: "الهاتف",
      linkedin: "لينكدإن",
      github: "جيت هاب",
      facebook: "فيسبوك",
      instagram: "إنستغرام"
    },
    contactForm: {
      namePlaceholder: "الاسم الكامل",
      emailPlaceholder: "البريد الإلكتروني",
      messagePlaceholder: "اكتب رسالتك",
      sendButton: "إرسال الرسالة",
      sending: "جارٍ الإرسال...",
      success: "تم إرسال رسالتك بنجاح. يرجى الانتظار بضع ساعات للرد عليك عبر البريد الإلكتروني.",
      fetchError: "تعذر الوصول إلى خادم التواصل. تأكد من تشغيل الخادم الخلفي على المنفذ 8000.",
      genericError: "تعذر إرسال الرسالة. يرجى المحاولة مرة أخرى."
    },
    footer: "© 2026 كمال أبو ظريفة. جميع الحقوق محفوظة."
  }
};

export const skillGroupsByLanguage: Record<Language, SkillGroup[]> = {
  en: [
    { title: "Frontend", skills: ["HTML5", "CSS3", "JavaScript", "React", "Tailwind CSS"] },
    { title: "Backend", skills: ["PHP", "Laravel", "REST APIs"] },
    { title: "Databases", skills: ["MySQL", "Oracle Database", "PL/SQL"] },
    { title: "Programming", skills: ["PHP", "JavaScript", "Java"] },
    { title: "Software Engineering", skills: ["Database Design", "System Analysis", "API Integration", "Software Architecture"] }
  ],
  ar: [
    { title: "الواجهة الأمامية", skills: ["HTML5", "CSS3", "JavaScript", "React", "Tailwind CSS"] },
    { title: "الواجهة الخلفية", skills: ["PHP", "Laravel", "REST APIs"] },
    { title: "قواعد البيانات", skills: ["MySQL", "Oracle Database", "PL/SQL"] },
    { title: "البرمجة", skills: ["PHP", "JavaScript", "Java"] },
    { title: "هندسة البرمجيات", skills: ["تصميم قواعد البيانات", "تحليل الأنظمة", "دمج واجهات API", "معمارية البرمجيات"] }
  ]
};

export const projectsByLanguage: Record<Language, Project[]> = {
  en: [
    {
      title: "TheraLife Healthcare System",
      subtitle: "Graduation Project",
      description: "Intelligent hospital management system designed for efficient clinical workflows.",
      features: [
        "Patient Management",
        "Doctor Management",
        "Appointment Scheduling",
        "Medical Records",
        "Administration Dashboard"
      ],
      technologies: ["Laravel", "MySQL", "JavaScript"]
    },
    {
      title: "Sales Management System",
      description: "Enterprise-oriented sales platform with advanced data processing features.",
      features: [
        "CRUD Operations",
        "Oracle Database Integration",
        "Stored Procedures",
        "Database Triggers",
        "Reporting System"
      ],
      technologies: ["PHP", "Oracle Database", "PL/SQL", "JavaScript"]
    },
    {
      title: "News Platform",
      description: "Dynamic content platform for publishing and managing categorized news.",
      features: ["Dynamic News Publishing", "Authentication System", "User Roles", "Search Functionality"],
      technologies: ["Laravel", "MySQL", "Blade", "JavaScript"]
    }
  ],
  ar: [
    {
      title: "نظام TheraLife للرعاية الصحية",
      subtitle: "مشروع التخرج",
      description: "نظام ذكي لإدارة المستشفى مصمم لتحسين سير العمل الطبي بكفاءة.",
      features: [
        "إدارة المرضى",
        "إدارة الأطباء",
        "جدولة المواعيد",
        "السجلات الطبية",
        "لوحة تحكم الإدارة"
      ],
      technologies: ["Laravel", "MySQL", "JavaScript"]
    },
    {
      title: "نظام إدارة المبيعات",
      description: "منصة مبيعات موجهة للأعمال مع ميزات متقدمة لمعالجة البيانات.",
      features: [
        "عمليات CRUD",
        "دمج Oracle Database",
        "الإجراءات المخزنة",
        "مشغلات قاعدة البيانات",
        "نظام التقارير"
      ],
      technologies: ["PHP", "Oracle Database", "PL/SQL", "JavaScript"]
    },
    {
      title: "منصة أخبار",
      description: "منصة محتوى ديناميكية لنشر وإدارة الأخبار المصنفة.",
      features: ["نشر أخبار ديناميكي", "نظام مصادقة", "صلاحيات المستخدم", "خاصية البحث"],
      technologies: ["Laravel", "MySQL", "Blade", "JavaScript"]
    }
  ]
};

export const experienceByLanguage: Record<Language, ExperienceItem[]> = {
  en: [
    {
      title: "Software Engineering Training - Nasser Medical Hospital",
      period: "Training Program",
      description: "Focused on practical engineering workflows, systems integration, and healthcare software context."
    },
    {
      title: "Full-Stack Development Experience",
      period: "Professional Practice",
      description: "Built full-stack applications with strong backend architecture and responsive frontend interfaces."
    },
    {
      title: "Database Engineering & Backend Development",
      period: "Core Expertise",
      description: "Designed relational schemas, optimized queries, and delivered robust backend services for business workflows."
    }
  ],
  ar: [
    {
      title: "تدريب هندسة البرمجيات - مستشفى ناصر الطبي",
      period: "برنامج تدريبي",
      description: "التركيز على مسارات العمل الهندسية العملية وتكامل الأنظمة وسياق برمجيات الرعاية الصحية."
    },
    {
      title: "خبرة تطوير Full-Stack",
      period: "ممارسة مهنية",
      description: "تطوير تطبيقات متكاملة بواجهة خلفية قوية وواجهات أمامية متجاوبة."
    },
    {
      title: "هندسة قواعد البيانات وتطوير Backend",
      period: "خبرة أساسية",
      description: "تصميم مخططات علائقية وتحسين الاستعلامات وتقديم خدمات خلفية قوية لسير أعمال الشركات."
    }
  ]
};
