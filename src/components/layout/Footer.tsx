
import React from 'react';
import { NewsletterForm } from '../forms/NewsletterForm';

interface FooterProps {
  language: 'english' | 'hindi' | 'telugu';
}

const translations = {
  english: {
    beFirstToKnow: "BE THE FIRST TO KNOW",
    signUpForUpdates: "Sign up for updates from mettā muse.",
    contactUs: "CONTACT US",
    currency: "CURRENCY",
    transactionsNote: "Transactions will be completed in Euros and a currency reference is available on hover.",
    mettaMuse: "mettā muse",
    aboutUs: "About Us",
    stories: "Stories",
    artisans: "Artisans",
    boutiques: "Boutiques",
    euCompliances: "EU Compliances Docs",
    quickLinks: "QUICK LINKS",
    ordersShipping: "Orders & Shipping",
    joinLoginSeller: "Join/Login as a Seller",
    paymentPricing: "Payment & Pricing",
    returnRefunds: "Return & Refunds",
    faqs: "FAQs",
    privacyPolicy: "Privacy Policy",
    termsConditions: "Terms & Conditions",
    followUs: "FOLLOW US",
    mettaMuseAccepts: "mettā muse ACCEPTS",
    copyright: "Copyright © 2023 mettamuse. All rights reserved."
  },
  hindi: {
    beFirstToKnow: "सबसे पहले जानें",
    signUpForUpdates: "मेट्टा म्यूज़ से अपडेट के लिए साइन अप करें।",
    contactUs: "संपर्क करें",
    currency: "मुद्रा",
    transactionsNote: "लेनदेन यूरो में पूरा किया जाएगा और मुद्रा संदर्भ होवर पर उपलब्ध है।",
    mettaMuse: "मेट्टा म्यूज़",
    aboutUs: "हमारे बारे में",
    stories: "कहानियाँ",
    artisans: "कारीगर",
    boutiques: "बुटीक",
    euCompliances: "ईयू अनुपालन दस्तावेज़",
    quickLinks: "त्वरित लिंक",
    ordersShipping: "ऑर्डर और शिपिंग",
    joinLoginSeller: "विक्रेता के रूप में शामिल/लॉगिन करें",
    paymentPricing: "भुगतान और मूल्य निर्धारण",
    returnRefunds: "वापसी और धनवापसी",
    faqs: "अक्सर पूछे जाने वाले प्रश्न",
    privacyPolicy: "गोपनीयता नीति",
    termsConditions: "नियम और शर्तें",
    followUs: "हमें फॉलो करें",
    mettaMuseAccepts: "मेट्टा म्यूज़ स्वीकार करता है",
    copyright: "कॉपीराइट © 2023 मेट्टाम्यूज़। सर्वाधिकार सुरक्षित।"
  },
  telugu: {
    beFirstToKnow: "మొదట తెలుసుకోండి",
    signUpForUpdates: "మెట్టా మ్యూజ్ నుండి అప్డేట్‌ల కోసం సైన్ అప్ చేయండి.",
    contactUs: "మమ్మల్ని సంప్రదించండి",
    currency: "కరెన్సీ",
    transactionsNote: "లావాదేవీలు యూరోలలో పూర్తవుతాయి మరియు కరెన్సీ రిఫరెన్స్ హోవర్‌లో అందుబాటులో ఉంటుంది.",
    mettaMuse: "మెట్టా మ్యూజ్",
    aboutUs: "మా గురించి",
    stories: "కథలు",
    artisans: "శిల్పులు",
    boutiques: "బౌటిక్స్",
    euCompliances: "EU అనుసరణ పత్రాలు",
    quickLinks: "త్వరిత లింక్స్",
    ordersShipping: "ఆర్డర్స్ & షిప్పింగ్",
    joinLoginSeller: "విక్రేతగా చేరండి/లాగిన్ చేయండి",
    paymentPricing: "చెల్లింపు & ధరలు",
    returnRefunds: "రిటర్న్ & రీఫండ్స్",
    faqs: "తరచుగా అడిగే ప్రశ్నలు",
    privacyPolicy: "ప్రైవసీ పాలసీ",
    termsConditions: "నియమాలు & షరతులు",
    followUs: "మమ్మల్ని అనుసరించండి",
    mettaMuseAccepts: "మెట్టా మ్యూజ్ ఆమోదిస్తుంది",
    copyright: "కాపీరైట్ © 2023 మెట్టామ్యూజ్. అన్ని హక్కులు రిజర్వ్ చేయబడ్డాయి."
  }
};

export const Footer: React.FC<FooterProps> = ({ language }) => {
  const t = translations[language];

  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Top section with two columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* First column */}
          <div>
            <h2 className="text-xl font-bold uppercase">{t.beFirstToKnow}</h2>
            <p className="mt-4">{t.signUpForUpdates}</p>
            <NewsletterForm />
          </div>
          
          {/* Second column */}
          <div>
            <h2 className="text-xl font-bold uppercase">{t.contactUs}</h2>
            <a href="tel:+442211335360" className="block mt-4 hover:underline">+44 221 133 5360</a>
            <a href="mailto:customercare@mettamuse.com" className="block mt-4 hover:underline">customercare@mettamuse.com</a>
            
            <h2 className="text-xl font-bold uppercase mt-8">{t.currency}</h2>
            <div className="flex items-center gap-2 mt-4">
              <div className="w-6 h-6 rounded-full overflow-hidden flex items-center justify-center bg-white">
                <img
                  src="/lovable-uploads/8e8de4c2-8e0c-41c3-9f4a-ace319ac7d49.png" 
                  alt="USD flag"
                  className="w-full h-full object-cover"
                />
              </div>
              <span>USD</span>
            </div>
            <p className="text-xs mt-2">{t.transactionsNote}</p>
          </div>
        </div>
        
        <hr className="border-t border-white/20 my-8" />
        
        {/* Bottom section with three columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* First column */}
          <div>
            <h2 className="text-2xl font-bold">{t.mettaMuse}</h2>
            <nav className="mt-4 space-y-4">
              <a href="#" className="block hover:underline">{t.aboutUs}</a>
              <a href="#" className="block hover:underline">{t.stories}</a>
              <a href="#" className="block hover:underline">{t.artisans}</a>
              <a href="#" className="block hover:underline">{t.boutiques}</a>
              <a href="#" className="block hover:underline">{t.contactUs}</a>
              <a href="#" className="block hover:underline">{t.euCompliances}</a>
            </nav>
          </div>
          
          {/* Second column */}
          <div>
            <h2 className="text-xl font-bold uppercase">{t.quickLinks}</h2>
            <nav className="mt-4 space-y-4">
              <a href="#" className="block hover:underline">{t.ordersShipping}</a>
              <a href="#" className="block hover:underline">{t.joinLoginSeller}</a>
              <a href="#" className="block hover:underline">{t.paymentPricing}</a>
              <a href="#" className="block hover:underline">{t.returnRefunds}</a>
              <a href="#" className="block hover:underline">{t.faqs}</a>
              <a href="#" className="block hover:underline">{t.privacyPolicy}</a>
              <a href="#" className="block hover:underline">{t.termsConditions}</a>
            </nav>
          </div>
          
          {/* Third column */}
          <div>
            <h2 className="text-xl font-bold uppercase">{t.followUs}</h2>
            <div className="flex gap-4 mt-4">
              <a href="#" className="bg-white/10 w-10 h-10 flex items-center justify-center rounded-full" aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="bg-white/10 w-10 h-10 flex items-center justify-center rounded-full" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
            </div>
            <div>
          <div className="text-white text-xl font-bold uppercase mb-12">mettā muse ACCEPTS</div>
          <div className="mt-8 flex flex-wrap gap-4">
            <svg width="48" height="32" viewBox="0 0 48 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="48" height="32" rx="4" fill="white"/>
              <path d="M18.1133 21.2H16.0625V13.3594H18.1133V21.2ZM12.3125 21.2H10.2617V13.3594H12.3125V21.2ZM15.2109 21.2H13.1641V13.3594H15.2109V21.2ZM21.9727 13.3594L23.3281 18.7773L24.6836 13.3594H27.1055L24.8047 21.2H21.8516L19.5508 13.3594H21.9727ZM31.1875 18.4961H29.4492V21.2H27.3984V13.3594H31.1875C32.0938 13.3594 32.8112 13.5911 33.3398 14.0547C33.8685 14.5182 34.1328 15.1484 34.1328 15.9453C34.1328 16.5234 34.0143 17.0156 33.7773 17.4219C33.5404 17.8281 33.1888 18.1536 32.7227 18.3984L34.4141 21.2H32.1836L31.1875 18.4961ZM29.4492 16.8867H31.1875C31.5417 16.8867 31.8151 16.7891 32.0078 16.5938C32.2005 16.3984 32.2969 16.1328 32.2969 15.7969C32.2969 15.4609 32.2005 15.1953 32.0078 15C31.8151 14.8047 31.5417 14.707 31.1875 14.707H29.4492V16.8867ZM37.7891 21.2H35.7383V13.3594H37.7891V21.2Z" fill="#EB001B"/>
            </svg>
            <svg width="48" height="32" viewBox="0 0 48 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="48" height="32" rx="4" fill="white"/>
              <path d="M24 23C27.866 23 31 19.866 31 16C31 12.134 27.866 9 24 9C20.134 9 17 12.134 17 16C17 19.866 20.134 23 24 23Z" fill="#FFB600"/>
              <path d="M24 23C27.866 23 31 19.866 31 16C31 12.134 27.866 9 24 9" fill="#F7981D"/>
              <path d="M24 23C27.866 23 31 19.866 31 16" fill="#FF8500"/>
            </svg>
            <svg width="48" height="32" viewBox="0 0 48 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="48" height="32" rx="4" fill="white"/>
              <path d="M20.5254 21.2H18.4746V13.3594H20.5254V21.2ZM24.6074 21.2H22.5566V13.3594H24.6074V21.2ZM28.6895 21.2H26.6387V13.3594H28.6895V21.2Z" fill="#1A1F71"/>
            </svg>
            <svg width="48" height="32" viewBox="0 0 48 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="48" height="32" rx="4" fill="white"/>
              <path d="M24 23C27.866 23 31 19.866 31 16C31 12.134 27.866 9 24 9C20.134 9 17 12.134 17 16C17 19.866 20.134 23 24 23Z" fill="#00A1DF"/>
              <path d="M24 23C27.866 23 31 19.866 31 16C31 12.134 27.866 9 24 9" fill="#0061A7"/>
              <path d="M24 23C27.866 23 31 19.866 31 16" fill="#003B6F"/>
            </svg>
          </div>
        </div>
          </div>
        </div>
        
        <p className="text-center text-sm mt-12">{t.copyright}</p>
      </div>
    </footer>
  );
};
