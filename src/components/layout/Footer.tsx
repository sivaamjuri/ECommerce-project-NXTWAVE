
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
                  src="/lovable-uploads/f7d9d8c6-8aa6-4372-9097-bd77ff9a2075.png" 
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
            
            <h2 className="text-xl font-bold uppercase mt-8">{t.mettaMuseAccepts}</h2>
            <div className="flex flex-wrap gap-2 mt-4">
              <div className="bg-white/10 w-12 h-8 flex items-center justify-center rounded">
                <span className="text-xs">VISA</span>
              </div>
              <div className="bg-white/10 w-12 h-8 flex items-center justify-center rounded">
                <span className="text-xs">MC</span>
              </div>
              <div className="bg-white/10 w-12 h-8 flex items-center justify-center rounded">
                <span className="text-xs">AMEX</span>
              </div>
              <div className="bg-white/10 w-12 h-8 flex items-center justify-center rounded">
                <span className="text-xs">GPAY</span>
              </div>
              <div className="bg-white/10 w-12 h-8 flex items-center justify-center rounded">
                <span className="text-xs">PPAY</span>
              </div>
              <div className="bg-white/10 w-12 h-8 flex items-center justify-center rounded">
                <span className="text-xs">APAY</span>
              </div>
            </div>
          </div>
        </div>
        
        <p className="text-center text-sm mt-12">{t.copyright}</p>
      </div>
    </footer>
  );
};
