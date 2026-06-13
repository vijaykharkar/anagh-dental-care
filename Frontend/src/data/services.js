import clinicHero1 from "../assets/clinicpic_five.jpeg";
import clinicHero2 from "../assets/clinic.jpeg";
import clinicHero3 from "../assets/drsagarpicinterance.jpeg";
import clinicHero4 from "../assets/clinicpic_six.jpeg";

export const featuredServices = [
  {
    id: 1,
    title: "General Dentistry",
    description:
      "Comprehensive preventive care to keep your smile healthy and vibrant for a lifetime.",
    icon: "🦷",
    iconBg: "bg-secondary-container",
    iconColor: "text-on-secondary-container",
  },
  {
    id: 2,
    title: "Cosmetic Dentistry",
    description:
      "Advanced aesthetic treatments to enhance your natural beauty and boost your confidence.",
    icon: "✨",
    iconBg: "bg-primary-fixed",
    iconColor: "text-primary",
  },
  {
    id: 3,
    title: "Orthodontics",
    description:
      "Modern alignment solutions for children and adults using the latest precision technology.",
    icon: "🔬",
    iconBg: "bg-secondary-fixed-dim",
    iconColor: "text-on-secondary-fixed",
  },
];

export const navServices = [
  {
    id: 1,
    title: "Root Canal",
    slug: "root-canal",
    category: "Endodontics",
    icon: "🦷",
    description: "Save your natural teeth from extraction with our advanced, pain-free endodontic procedures in a serene setting.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDhzgb6SNMEE43-yLWOnBOZmI-DMIjMCvAxR5uG7aMh444uIEHLWfxcdaRJk-LqYELgZ0NfiNhPxvp6UcbpRto7rLIPM9c3KJBCwaQL3TnJkkHcmcHJFL5lRvd41iUaSza5-bPziKM58BDOLcI71ZAnoiXC45Tx7GBF06yZcowFWjZUDEnbW-dqH18iIYM8GgHB0RbLyZBbKJ6rHvsTKbUMoPW-7x4-wJNnes4OcvQ57Oj9fY4Ui_nekPTxWMlbcjD1Fi1l_oc7Pay3",
    details: {
      overview: "Root canal treatment (endodontic therapy) is a dental procedure that saves teeth that would otherwise need extraction. At Anagh Dental Care, we use advanced rotary instruments and digital apex locators for precise, comfortable treatment.",
      benefits: ["Saves your natural tooth", "Eliminates infection and pain", "Prevents spread of infection", "Restores normal chewing function", "Virtually pain-free with modern techniques"],
      procedure: ["Digital X-ray and diagnosis", "Local anesthesia for complete comfort", "Removal of infected pulp tissue", "Cleaning and shaping of root canals", "Filling with biocompatible material", "Crown placement for protection"],
      duration: "1-2 visits, 60-90 minutes each",
      recovery: "Mild discomfort for 2-3 days, manageable with over-the-counter painkillers.",
    },
  },
  {
    id: 2,
    title: "Teeth Whitening",
    slug: "teeth-whitening",
    category: "Cosmetic Dentistry",
    icon: "✨",
    description: "Brighten your smile with our professional whitening systems, delivering dramatic results in a single boutique session.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB_8PwsSsy5M-uhr15FS_cH7Xz2HovVf7Qk5zkwLJd5DpbxCKBIdlb0jdLzifCOXk7mm-FL5LZRz3CF6MeZlpfOTIrgOD7l01yZ333l7BthrlKn4Yhta6myZMcVlJgwdP7KB5zUh-epFqPKU9AM-gI7CzDaFXtDeih9EGxHz_x2ka3KCtVfhgnoqChz_h3CZ7MlwnLjjSlXEwt97wB0xgqCJYBqQxvUZQqh5s4qj51bj5TU2z4KGH6S2kgBrrYLc5meXtKFRZbDmKj0",
    details: {
      overview: "Our professional teeth whitening uses FDA-approved, LED-accelerated systems to lighten teeth by up to 8 shades in a single visit. Safe, fast, and dramatically effective.",
      benefits: ["Up to 8 shades whiter in one session", "Safe for enamel", "Long-lasting results (6-24 months)", "Boosts confidence instantly", "Custom-fitted trays for take-home option"],
      procedure: ["Shade assessment and consultation", "Protective gum shield application", "Professional-grade whitening gel applied", "LED light activation (3 cycles)", "Fluoride treatment to reduce sensitivity"],
      duration: "Single visit, approximately 60 minutes",
      recovery: "Temporary sensitivity for 24-48 hours. Avoid staining foods for 48 hours post-treatment.",
    },
  },
  {
    id: 3,
    title: "Veneers & Laminates",
    slug: "veneers-laminates",
    category: "Cosmetic Dentistry",
    icon: "💎",
    description: "Custom-crafted thin shells designed to cover the front surface of teeth for a flawless, natural-looking smile.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBudb-pJhxzte-_odwqPlyZ0hHbzhrfGmn_8ToJ3EB45eSiNL4FbY-a_jcCNcmdSQFkw-maMpUcnwUUfQJ79opL4a8nlGCdhPsY1oRQyxOMOCnhFbBPHcmVTY-d73WK1wPOiOeD7Hc4Umcl6QYlBRn6U2Csg6BWstrNlpC3xzTwVzHLHAaniKWEMft3ltqsfYsXFkHSlqocyaTlUAjIbCVpg4waTXFV_c_8K-KcK1csG15P3dTm8iz2-YRgNOMAHw3YRvRM9MG49PGd",
    details: {
      overview: "Porcelain veneers are ultra-thin, custom-made shells bonded to the front of your teeth. They transform stained, chipped, or misaligned teeth into a perfect, Hollywood-ready smile.",
      benefits: ["Natural-looking, translucent finish", "Stain-resistant porcelain", "Minimal tooth reduction required", "Correct gaps, chips, and discoloration", "Last 10-15 years with proper care"],
      procedure: ["Smile design consultation with digital preview", "Minimal tooth preparation", "Precision impressions for custom fabrication", "Temporary veneers placed", "Final veneer bonding and polishing"],
      duration: "2 visits over 1-2 weeks",
      recovery: "No downtime. Mild sensitivity for a few days is normal.",
    },
  },
  {
    id: 4,
    title: "Smile Makeover",
    slug: "smile-makeover",
    category: "Cosmetic Dentistry",
    icon: "😊",
    description: "A comprehensive, personalized treatment plan combining multiple procedures to completely transform your smile.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAzxzorHwqKHoRpTcMc_XKRxbDDlTZkTCYEeiD4gIZrg3N-cbRdiU2AtYFXTY9iBbs2PgVlulpdvaky8QNNfyKWxo3FTmq0O9OkKeT2XrhGnGngBhxlseme3S5F4hkwa6pAL0cxydUeLqJjSUChLN1w843JdVec-CRVQRSh4disH-H69tBZHE6Yi3ol4vwvlfcTTI8bckT3AIILPKVlCxFe2hD4DO-X7zwr-3fbYA3vdJ-_fkyXuhUfsacdYrcxAG9H49zpU9ztwWv9",
    details: {
      overview: "A smile makeover is a fully customized treatment plan that may include whitening, veneers, bonding, implants, and orthodontics — all coordinated to achieve your dream smile.",
      benefits: ["Completely personalized treatment plan", "Digital smile design preview before treatment", "Addresses multiple concerns in one plan", "Dramatic, life-changing results", "Coordinated by specialist team"],
      procedure: ["Comprehensive oral assessment", "Digital smile design and preview", "Customized treatment roadmap", "Staged treatment execution", "Final refinement and maintenance plan"],
      duration: "Varies by plan — typically 2-6 months",
      recovery: "Depends on individual procedures involved. Full guidance provided at each stage.",
    },
  },
  {
    id: 5,
    title: "Dental Implants",
    slug: "dental-implants",
    category: "Restorative Dentistry",
    icon: "🔩",
    description: "Permanent tooth replacements that look, feel, and function exactly like natural teeth using titanium implant technology.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAErpemNQ_Xm7j4DSDJVCnd50uaQH1wURQ7HJNl0WgMKyWrt2r11sh-Jw6JiUR_Sjvr8mYFlLJA6BMycQ3Cli20lG_Kl6Jm5V3e94FXrNS9W8pQev1lEbTw5QRPtxT2U-Ko0fHWp_Pyk2h2Zuhe8tShnY-54TfSJ5HYHCAz6EuvylBaHq2vLwG7sEdDzsd7XLFzMin35-wBI3HDIkW9Hi12baL7jsgfHUWtLt1IH_7TA58Sstu18IgJzF17M4unYyNFBp6ClZ_JJ37l",
    details: {
      overview: "Dental implants are titanium posts surgically placed in the jawbone to serve as permanent roots for replacement teeth. They are the gold standard for tooth replacement.",
      benefits: ["Permanent, lifelong solution", "Preserves jawbone and facial structure", "No impact on adjacent teeth", "Natural look and feel", "98% success rate"],
      procedure: ["3D CT scan and treatment planning", "Implant placement surgery", "Healing period (osseointegration) — 3-6 months", "Abutment placement", "Custom crown fabrication and fitting"],
      duration: "3-6 months total (healing included)",
      recovery: "1-2 weeks for initial healing. Soft diet recommended during osseointegration.",
    },
  },
  {
    id: 6,
    title: "Composite Bonding",
    slug: "composite-bonding",
    category: "Cosmetic Dentistry",
    icon: "🪥",
    description: "A quick, affordable cosmetic solution to repair chipped, cracked, or discolored teeth in a single visit.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDhVNaPOIIWeFMSYKl_71iD7Cz9Z0awylxMgrMQX5ov51cwPoVTz1oJycArAUP-loghTgPXRvoQzkbAc88OA4J8K-ZmRzeaGp4usZySdCpIPsdhBOKWD2lvHKYEv56UKUI19voO6vg16uS1Ucmzn8_XsEMmYa0jo0ndvETWXCJtBBhBrxhO7ruRYcGNnPGPjGHaN4i-27r0L-s8kVy4tVc0oA3RmIJKh8PqJT7FpV13FGsDrt1xjen8e5sJIKzWLyWB6ei3XbMNznQL",
    details: {
      overview: "Composite bonding uses tooth-colored resin material to repair chips, cracks, gaps, and discoloration. It's one of the most affordable and least invasive cosmetic dental procedures.",
      benefits: ["Completed in a single visit", "Minimal tooth preparation needed", "Natural-looking results", "Cost-effective cosmetic solution", "Reversible procedure"],
      procedure: ["Shade matching to your natural teeth", "Surface preparation (etching)", "Composite resin application and sculpting", "UV light curing", "Final shaping and polishing"],
      duration: "Single visit, 30-60 minutes per tooth",
      recovery: "No downtime. You can eat and drink immediately.",
    },
  },
  {
    id: 7,
    title: "Dental Fillings",
    slug: "dental-fillings",
    category: "Restorative Dentistry",
    icon: "🩺",
    description: "Restore decayed or damaged teeth with natural-looking, durable composite or ceramic filling materials.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBIBb04ZQSkNR7uR-6YIhAOQohGlN5boZMuNp_BTCnZA1SegYIcBBaremH1MnY7OnMLZK74CUyt8WgLUMXp3tfxBhy8VnlEIliv8_Kv4Gv0AYIatCtbIEpNkDBCdiwtiGpvRid8G3uJ_JPElRqmzvJzrN7sSag4YmlwTwBxeJWQi1O4uyW5eFg4vLwv8Gs6d30FfWbDM1_beYSFk1kOZw6NyUVJmPOe4MljfVMhaMdNdJ38_Xj520_acQYCZmWGuc4KRSAkwJcMA1l6",
    details: {
      overview: "We use tooth-colored composite and ceramic fillings to repair cavities and restore tooth structure. Unlike traditional metal fillings, these blend seamlessly with your natural teeth.",
      benefits: ["Invisible, tooth-colored restoration", "Mercury-free and biocompatible", "Bonds directly to tooth structure", "Preserves more natural tooth", "Durable and long-lasting"],
      procedure: ["Decay removal with precision instruments", "Tooth preparation and cleaning", "Layered composite application", "UV light curing of each layer", "Bite adjustment and final polishing"],
      duration: "Single visit, 30-45 minutes",
      recovery: "Immediate. Avoid very hot or cold foods for a few hours.",
    },
  },
  {
    id: 8,
    title: "Invisible Braces",
    slug: "invisible-braces",
    category: "Orthodontics",
    icon: "🦷",
    description: "Straighten your teeth discreetly with clear aligner technology, tailored for adult lifestyles and comfort.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDe0Yg-_tR-3MC2ca0bgtOPhK9BAGgFftatXam8btWcKnz5GoIyIdLwNiGTj24BDtv2CP2Xj2pIq9tf0pULf7xbiF7Lt6rHLNWYoWGbhoD9_i8T6So4mF_kD-M8PwH-Mdnziz-UrBD3nWaQq1urjVwiVT_GsChycZ9hD6fH94plXWj8vqJWoiXPQFhaUC695B5j4wm9w8BNWaLl_5Hh03kr0QMz82YltnVVFJCajC8cdlxwCSvp3t8zUf8SmDyfNf2uqAjPfBToyna6",
    details: {
      overview: "Clear aligners (Invisalign) are virtually invisible, removable trays that gradually straighten your teeth. Perfect for adults who want orthodontic treatment without visible brackets.",
      benefits: ["Nearly invisible appearance", "Removable for eating and brushing", "Comfortable — no wires or brackets", "Predictable results with 3D planning", "Shorter treatment time than traditional braces"],
      procedure: ["3D digital scan (no messy impressions)", "Custom treatment plan with virtual preview", "Series of aligners fabricated", "New aligners every 1-2 weeks", "Regular check-ups every 6-8 weeks"],
      duration: "6-18 months depending on complexity",
      recovery: "No recovery needed. Mild pressure for first 2-3 days with each new aligner.",
    },
  },
  {
    id: 9,
    title: "Pediatric Dentistry",
    slug: "pediatric-dentistry",
    category: "General Dentistry",
    icon: "👶",
    description: "Fun, gentle, and educational dental visits designed to build a lifetime of healthy smiles for your children.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDQ2T3BGaduJiQrt2O6vI8iPeIiJrhf172IFJmKp7Sof4o-cBwLYzLVWba2YGcJo0s68aJ8hFrZmppNCXnSX8HKNPvTxpRnUQmkqrl9cBvUWMXz8KCzwX6mihICJkkQtGAjrAAVGy9ZYv8sqGojeTBrnj6TCRGzipZzAJuA64CMX47QflmWWJJtHLHYf5Z9zR6Y_MWgO6T-gUwPmJHXYrDpN3qeC3QLoBs7AcM1Lah1NAfYgmgFIBtK4F1GAM45j2srSE7_CI8lFFAY",
    details: {
      overview: "Our pediatric dental program creates a positive, anxiety-free experience for children. We focus on prevention, education, and making every visit fun so kids grow up loving their dental health.",
      benefits: ["Child-friendly, fun environment", "Gentle and patient approach", "Early detection of dental issues", "Preventive treatments (sealants, fluoride)", "Orthodontic monitoring from an early age"],
      procedure: ["Welcome and familiarization tour", "Gentle examination and cleaning", "Fluoride treatment", "Dental sealants if needed", "Oral hygiene education with fun demonstrations"],
      duration: "30-45 minutes per visit",
      recovery: "No recovery needed. Children can return to normal activities immediately.",
    },
  },
  {
    id: 10,
    title: "Dental Trauma",
    slug: "dental-trauma",
    category: "Emergency Dentistry",
    icon: "⚡",
    description: "Immediate, expert care for dental emergencies including knocked-out teeth, fractures, and trauma injuries.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCXnyOGc87blFRvbURL6HbzbxZD3mHHYJfHlbqcQOa3fB8cACtu1QyyzyyEH82KLofa2H9zXJdwfS4iPLGrF_ewdiJfkGbdSpqWjYGAAmlw-EfIUber4wJO9l9PfwGpm4FNs2H_2BChMLKfz2MQylaRIaJm-3DuHp-OhHBTqccwqDtSCbGz8xs6jSNv8chxyeCpYthtN9zIKE5Gs8M-AItjlZm25DIi1NpwDKJMttt1q2S9BpQjNNx0oVNZZ1mgI84txI3FK8F1jJUg",
    details: {
      overview: "Dental emergencies require immediate attention. Our 24/7 emergency team handles knocked-out teeth, fractures, severe pain, and trauma with urgent, expert care to save your teeth and relieve pain fast.",
      benefits: ["24/7 emergency availability", "Same-day urgent appointments", "Advanced trauma management protocols", "Pain relief is top priority", "Follow-up care included"],
      procedure: ["Emergency triage and pain management", "Digital imaging for accurate diagnosis", "Immediate stabilization of injured teeth", "Restorative treatment as needed", "Comprehensive follow-up plan"],
      duration: "Immediate attention — treatment time varies by case",
      recovery: "Varies by injury. Full recovery instructions and follow-up appointments provided.",
    },
  },
];

export const heroSlides = [
  {
    id: 1,
    image: clinicHero1,
    alt: "Anagh Dental Care clinic interior",
  },
  {
    id: 2,
    image: clinicHero2,
    alt: "Anagh Dental Care clinic",
  },
  {
    id: 3,
    image: clinicHero3,
    alt: "Dr. Sagar at clinic entrance",
  },
  {
    id: 4,
    image: clinicHero4,
    alt: "Anagh Dental Care treatment area",
  },
];

export const allServices = [
  {
    id: 1,
    title: "Dental Implants",
    description:
      "Restore your confidence with permanent tooth replacements that function and feel exactly like natural teeth.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAErpemNQ_Xm7j4DSDJVCnd50uaQH1wURQ7HJNl0WgMKyWrt2r11sh-Jw6JiUR_Sjvr8mYFlLJA6BMycQ3Cli20lG_Kl6Jm5V3e94FXrNS9W8pQev1lEbTw5QRPtxT2U-Ko0fHWp_Pyk2h2Zuhe8tShnY-54TfSJ5HYHCAz6EuvylBaHq2vLwG7sEdDzsd7XLFzMin35-wBI3HDIkW9Hi12baL7jsgfHUWtLt1IH_7TA58Sstu18IgJzF17M4unYyNFBp6ClZ_JJ37l",
  },
  {
    id: 2,
    title: "Teeth Whitening",
    description:
      "Brighten your smile with our professional whitening systems, delivering dramatic results in a single boutique session.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB_8PwsSsy5M-uhr15FS_cH7Xz2HovVf7Qk5zkwLJd5DpbxCKBIdlb0jdLzifCOXk7mm-FL5LZRz3CF6MeZlpfOTIrgOD7l01yZ333l7BthrlKn4Yhta6myZMcVlJgwdP7KB5zUh-epFqPKU9AM-gI7CzDaFXtDeih9EGxHz_x2ka3KCtVfhgnoqChz_h3CZ7MlwnLjjSlXEwt97wB0xgqCJYBqQxvUZQqh5s4qj51bj5TU2z4KGH6S2kgBrrYLc5meXtKFRZbDmKj0",
  },
  {
    id: 3,
    title: "Porcelain Veneers",
    description:
      "Custom-crafted thin shells designed to cover the front surface of teeth to improve your overall aesthetic appearance.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBudb-pJhxzte-_odwqPlyZ0hHbzhrfGmn_8ToJ3EB45eSiNL4FbY-a_jcCNcmdSQFkw-maMpUcnwUUfQJ79opL4a8nlGCdhPsY1oRQyxOMOCnhFbBPHcmVTY-d73WK1wPOiOeD7Hc4Umcl6QYlBRn6U2Csg6BWstrNlpC3xzTwVzHLHAaniKWEMft3ltqsfYsXFkHSlqocyaTlUAjIbCVpg4waTXFV_c_8K-KcK1csG15P3dTm8iz2-YRgNOMAHw3YRvRM9MG49PGd",
  },
  {
    id: 4,
    title: "Invisible Braces (Invisalign)",
    description:
      "Straighten your teeth discreetly with our clear aligner technology, tailored for adult lifestyles and comfort.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDe0Yg-_tR-3MC2ca0bgtOPhK9BAGgFftatXam8btWcKnz5GoIyIdLwNiGTj24BDtv2CP2Xj2pIq9tf0pULf7xbiF7Lt6rHLNWYoWGbhoD9_i8T6So4mF_kD-M8PwH-Mdnziz-UrBD3nWaQq1urjVwiVT_GsChycZ9hD6fH94plXWj8vqJWoiXPQFhaUC695B5j4wm9w8BNWaLl_5Hh03kr0QMz82YltnVVFJCajC8cdlxwCSvp3t8zUf8SmDyfNf2uqAjPfBToyna6",
  },
  {
    id: 5,
    title: "Pediatric Dentistry",
    description:
      "Building a lifetime of healthy smiles through gentle, fun, and educational dental visits for our youngest patients.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDQ2T3BGaduJiQrt2O6vI8iPeIiJrhf172IFJmKp7Sof4o-cBwLYzLVWba2YGcJo0s68aJ8hFrZmppNCXnSX8HKNPvTxpRnUQmkqrl9cBvUWMXz8KCzwX6mihICJkkQtGAjrAAVGy9ZYv8sqGojeTBrnj6TCRGzipZzAJuA64CMX47QflmWWJJtHLHYf5Z9zR6Y_MWgO6T-gUwPmJHXYrDpN3qeC3QLoBs7AcM1Lah1NAfYgmgFIBtK4F1GAM45j2srSE7_CI8lFFAY",
  },
  {
    id: 6,
    title: "Root Canal Treatment",
    description:
      "Save your natural teeth from extraction with our advanced, pain-free endodontic procedures in a serene setting.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDhzgb6SNMEE43-yLWOnBOZmI-DMIjMCvAxR5uG7aMh444uIEHLWfxcdaRJk-LqYELgZ0NfiNhPxvp6UcbpRto7rLIPM9c3KJBCwaQL3TnJkkHcmcHJFL5lRvd41iUaSza5-bPziKM58BDOLcI71ZAnoiXC45Tx7GBF06yZcowFWjZUDEnbW-dqH18iIYM8GgHB0RbLyZBbKJ6rHvsTKbUMoPW-7x4-wJNnes4OcvQ57Oj9fY4Ui_nekPTxWMlbcjD1Fi1l_oc7Pay3",
  },
];

export const serviceOptions = [
  "General Consultation",
  "Dental Implants",
  "Teeth Whitening",
  "Orthodontic Braces",
  "Root Canal Treatment",
  "Cosmetic Dentistry",
];

export const timeSlots = [
  { time: "09:00 AM", available: true },
  { time: "10:30 AM", available: true },
  { time: "11:00 AM", available: true },
  { time: "02:00 PM", available: true },
  { time: "04:30 PM", available: true },
  { time: "05:30 PM", available: false },
];
