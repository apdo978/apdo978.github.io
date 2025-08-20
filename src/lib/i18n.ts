import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      nav: {
        home: 'Home',
        about: 'About',
        skills: 'Skills',
        projects: 'Projects',
        blog: 'Blog',
        contact: 'Contact',
      },
      hero: {
        name: 'Abdelrhman Muhamed',
        title: 'Full-Stack Web Developer',
        subtitle: 'Creating exceptional digital experiences with modern technologies',
        downloadCV: 'Download CV',
        contactMe: 'Contact Me',
      },
      about: {
        title: 'About Me',
        description: 'Passionate full-stack developer with expertise in modern web technologies. I create scalable, performant applications that deliver exceptional user experiences.',
      },
      skills: {
        title: 'Skills & Technologies',
        frontend: 'Frontend Development',
        backend: 'Backend Development',
        tools: 'Tools & Technologies',
      },
      projects: {
        title: 'Featured Projects',
        viewProject: 'View Project',
        sourceCode: 'Source Code',
      },
      testimonials: {
        title: 'What Clients Say',
      },
      blog: {
        title: 'Latest Blog Posts',
        readMore: 'Read More',
      },
      contact: {
        title: 'Get In Touch',
        subtitle: 'Have a project in mind? Let\'s work together!',
        name: 'Name',
        email: 'Email',
        message: 'Message',
        send: 'Send Message',
        sending: 'Sending...',
        success: 'Message sent successfully!',
        error: 'Failed to send message. Please try again.',
      },
      footer: {
        copyright: '© 2024 Abdelrhman Muhamed. All rights reserved.',
      },
    },
  },
  ar: {
    translation: {
      nav: {
        home: 'الرئيسية',
        about: 'نبذة',
        skills: 'المهارات',
        projects: 'المشاريع',
        blog: 'المدونة',
        contact: 'التواصل',
      },
      hero: {
        name: 'عبدالرحمن محمد',
        title: 'مطور ويب متكامل',
        subtitle: 'إنشاء تجارب رقمية استثنائية باستخدام التقنيات الحديثة',
        downloadCV: 'تحميل السيرة الذاتية',
        contactMe: 'تواصل معي',
      },
      about: {
        title: 'نبذة عني',
        description: 'مطور متكامل شغوف بخبرة في تقنيات الويب الحديثة. أقوم بإنشاء تطبيقات قابلة للتوسع وعالية الأداء تقدم تجارب استخدام استثنائية.',
      },
      skills: {
        title: 'المهارات والتقنيات',
        frontend: 'تطوير الواجهات الأمامية',
        backend: 'تطوير الخلفية',
        tools: 'الأدوات والتقنيات',
      },
      projects: {
        title: 'المشاريع المميزة',
        viewProject: 'عرض المشروع',
        sourceCode: 'الكود المصدري',
      },
      testimonials: {
        title: 'آراء العملاء',
      },
      blog: {
        title: 'أحدث مقالات المدونة',
        readMore: 'اقرأ المزيد',
      },
      contact: {
        title: 'تواصل معي',
        subtitle: 'لديك مشروع في الذهن؟ لنعمل معاً!',
        name: 'الاسم',
        email: 'البريد الإلكتروني',
        message: 'الرسالة',
        send: 'إرسال الرسالة',
        sending: 'جاري الإرسال...',
        success: 'تم إرسال الرسالة بنجاح!',
        error: 'فشل في إرسال الرسالة. يرجى المحاولة مرة أخرى.',
      },
      footer: {
        copyright: '© 2024 عبدالرحمن محمد. جميع الحقوق محفوظة.',
      },
    },
  },
  de: {
    translation: {
      nav: {
        home: 'Startseite',
        about: 'Über mich',
        skills: 'Fähigkeiten',
        projects: 'Projekte',
        blog: 'Blog',
        contact: 'Kontakt',
      },
      hero: {
        name: 'Abdelrhman Muhamed',
        title: 'Full-Stack Webentwickler',
        subtitle: 'Erstelle außergewöhnliche digitale Erfahrungen mit modernen Technologien',
        downloadCV: 'Lebenslauf herunterladen',
        contactMe: 'Kontaktiere mich',
      },
      about: {
        title: 'Über mich',
        description: 'Leidenschaftlicher Full-Stack-Entwickler mit Expertise in modernen Webtechnologien. Ich erstelle skalierbare, leistungsstarke Anwendungen, die außergewöhnliche Benutzererfahrungen bieten.',
      },
      skills: {
        title: 'Fähigkeiten & Technologien',
        frontend: 'Frontend-Entwicklung',
        backend: 'Backend-Entwicklung',
        tools: 'Tools & Technologien',
      },
      projects: {
        title: 'Ausgewählte Projekte',
        viewProject: 'Projekt ansehen',
        sourceCode: 'Quellcode',
      },
      testimonials: {
        title: 'Was Kunden sagen',
      },
      blog: {
        title: 'Neueste Blog-Beiträge',
        readMore: 'Mehr lesen',
      },
      contact: {
        title: 'Kontakt aufnehmen',
        subtitle: 'Haben Sie ein Projekt im Kopf? Lassen Sie uns zusammenarbeiten!',
        name: 'Name',
        email: 'E-Mail',
        message: 'Nachricht',
        send: 'Nachricht senden',
        sending: 'Senden...',
        success: 'Nachricht erfolgreich gesendet!',
        error: 'Fehler beim Senden der Nachricht. Bitte versuchen Sie es erneut.',
      },
      footer: {
        copyright: '© 2024 Abdelrhman Muhamed. Alle Rechte vorbehalten.',
      },
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    debug: false,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
