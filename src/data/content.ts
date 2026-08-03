export type Language = "ar" | "en";

export interface SiteContent {
  meta: {
    dir: "rtl" | "ltr";
    fontHeading: string;
    fontBody: string;
  };
  hero: {
    basmala: string;
    verses: string[];
    welcome: string;
    father1: string;
    fathersDivider: string;
    father2: string;
    invitationLine: string;
    groom: string;
    bride: string;
    ampersand: string;
  };
  countdown: {
    title: string;
    days: string;
    hours: string;
    minutes: string;
    seconds: string;
    arrived: string;
  };
  details: {
    title: string;
    date: {
      label: string;
      value: string;
    };
    time: {
      label: string;
      value: string;
    };
    location: {
      label: string;
      value: string;
    };
  };
  dressCode: {
    title: string;
    note: string;
  };
  calendar: {
    title: string;
    googleButton: string;
    icsButton: string;
    eventTitle: string;
    eventDescription: string;
  };
  share: {
    whatsapp: string;
    copyLink: string;
    copied: string;
    message: string;
  };
  wishes: {
    title: string;
    note: string;
    buttonLabel: string;
    formUrl: string;
  };
  footer: {
    message: string;
    hashtag: string;
  };
  languageToggle: {
    label: string;
  };
}

export const content: Record<Language, SiteContent> = {
  ar: {
    meta: {
      dir: "rtl",
      fontHeading: "font-arabic-heading",
      fontBody: "font-arabic-body",
    },
    hero: {
      basmala: "بِسْمِ اللَّهِ الرَّحْمَـٰنِ الرَّحِيمِ",
      verses: [
        "دَامَتْ قطُوفُ المنَى، وَالسَعْدُ مُبْتَسِمُ — وَطَابَ فِي لَيْلَةِ الأَفْرَاحِ جَمْعُكُمُ",
        "فَأَقْبِلُوا كَيْ يَتِمَّ النُّورُ مُكْتَمِلًا — فَإِنَّمَا عِطْرُ هَذَا الحَفْلِ وَصْلُكُمُ",
      ],
      welcome:
        "بِقُلُوبٍ تَفِيضُ بِالمَحَبَّةِ، وَتَتَّسِعُ لِفَرْحَةِ اللِّقَاءِ، يَتَشَرَّفُ كُلٌّ مِن:",
      father1: "الشيخ/ سعد مختار سعد",
      fathersDivider: "و",
      father2: "الرائد/ محمد أنور",
      invitationLine: "بدعوتكم لحضور حفل زفاف نجليهما",
      groom: "محمد",
      bride: "غادة",
      ampersand: "و",
    },
    countdown: {
      title: "العد التنازلي لليوم المنشود",
      days: "يوم",
      hours: "ساعة",
      minutes: "دقيقة",
      seconds: "ثانية",
      arrived: "حان موعد الفرح! 🤍",
    },
    details: {
      title: "تفاصيل الحفل",
      date: {
        label: "التاريخ",
        value: "مساء الخميس ١٠ سبتمبر ٢٠٢٦",
      },
      time: {
        label: "الموعد",
        value: "بعد صلاة العشاء",
      },
      location: {
        label: "المكان",
        value: "قاعة الأكابر، القناطر الخيرية، مصر",
      },
    },
    dressCode: {
      title: "قواعد الملابس",
      note: "يُرجى التكرم بارتداء إطلالة محتشمة وأنيقة تليق بأجواء الحفل.",
    },
    calendar: {
      title: "احفظوا الموعد",
      googleButton: "أضف إلى تقويم Google",
      icsButton: "أضف إلى التقويم (Apple/Outlook)",
      eventTitle: "حفل زفاف محمد وغادة",
      eventDescription: "بدعوتكم لحضور حفل زفافنا 🤍",
    },
    share: {
      whatsapp: "شارك عبر واتساب",
      copyLink: "نسخ الرابط",
      copied: "تم نسخ الرابط!",
      message: "بدعوتكم لحضور حفل زفاف محمد وغادة 🤍",
    },
    wishes: {
      title: "شاركونا تهنئتكم",
      note: "يسعدنا أن نقرأ كلماتكم وتهانيكم لنا بمناسبة زفافنا 🤍",
      buttonLabel: "اكتب لنا تهنئة",
      formUrl:
        "https://docs.google.com/forms/d/e/1FAIpQLSfM4yOIUUHG792xci_wq0f-S933sz_8okNsCCk_pNu3vL9gLg/viewform",
    },
    footer: {
      message: "بحضوركم تكتمل فرحتنا 🤍",
      hashtag: "#Mohamed_Ghada2026",
    },
    languageToggle: {
      label: "English",
    },
  },
  en: {
    meta: {
      dir: "ltr",
      fontHeading: "font-english-heading",
      fontBody: "font-english-body",
    },
    hero: {
      basmala: "In the name of Allah, the Most Gracious, the Most Merciful",
      verses: [
        "May the fruits of hope endure, with happiness ever smiling — and sweet be your gathering on this night of joy.",
        "So come, that the light may shine complete — for the fragrance of this celebration is your presence.",
      ],
      welcome:
        "With hearts overflowing with love, and wide enough for the joy of reunion, we are honored to be:",
      father1: "Sheikh Saad Mokhtar Saad",
      fathersDivider: "&",
      father2: "Major Mohamed Anwar",
      invitationLine: "Inviting you to celebrate the wedding of their children",
      groom: "Mohamed",
      bride: "Ghada",
      ampersand: "&",
    },
    countdown: {
      title: "Counting Down to the Big Day",
      days: "Days",
      hours: "Hours",
      minutes: "Minutes",
      seconds: "Seconds",
      arrived: "The celebration has begun! 🤍",
    },
    details: {
      title: "Celebration Details",
      date: {
        label: "Date",
        value: "Thursday evening September 10, 2026",
      },
      time: {
        label: "Time",
        value: "After Isha prayer",
      },
      location: {
        label: "Venue",
        value: "Al Akaber Hall, El Kanater El Khayreya, Egypt",
      },
    },
    dressCode: {
      title: "Dress Code",
      note: "Kindly wear modest, elegant attire befitting the spirit of the occasion.",
    },
    calendar: {
      title: "Save the Date",
      googleButton: "Add to Google Calendar",
      icsButton: "Add to Calendar (Apple/Outlook)",
      eventTitle: "Mohamed & Ghada's Wedding",
      eventDescription: "Join us to celebrate the wedding of Mohamed & Ghada.",
    },
    share: {
      whatsapp: "Share via WhatsApp",
      copyLink: "Copy Link",
      copied: "Link Copied!",
      message: "You're invited to Mohamed & Ghada's wedding 🤍",
    },
    wishes: {
      title: "Leave Us a Wish",
      note: "We'd love to read your congratulations and well wishes for our wedding 🤍",
      buttonLabel: "Write Us a Wish",
      formUrl:
        "https://docs.google.com/forms/d/e/1FAIpQLSfM4yOIUUHG792xci_wq0f-S933sz_8okNsCCk_pNu3vL9gLg/viewform",
    },
    footer: {
      message: "Our joy is complete with your presence 🤍",
      hashtag: "#Mohamed_Ghada2026",
    },
    languageToggle: {
      label: "العربية",
    },
  },
};

/**
 * Wedding day/time used to calculate the countdown.
 * Approximate time (~8:30 PM Cairo time, UTC+3) after Isha prayer.
 * This is an estimate and may change closer to the event date.
 */
export const WEDDING_DATE_ISO = "2026-09-10T20:30:00+03:00";
