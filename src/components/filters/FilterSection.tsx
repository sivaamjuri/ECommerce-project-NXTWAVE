
import React, { useState } from 'react';

interface FilterItemProps {
  title: string;
  isOpen?: boolean;
  options?: { id: string; label: string }[];
  onSelectionChange?: (selected: string[]) => void;
  language: 'english' | 'hindi' | 'telugu';
}

const translations = {
  english: {
    customizable: "Customizable",
    idealFor: "IDEAL FOR",
    occasion: "OCCASION",
    work: "WORK",
    fabric: "FABRIC",
    segment: "SEGMENT",
    suitableFor: "SUITABLE FOR",
    rawMaterials: "RAW MATERIALS",
    pattern: "PATTERN",
    all: "All",
    men: "Men",
    women: "Women",
    babyKids: "Baby & Kids",
    casual: "Casual",
    formal: "Formal",
    party: "Party",
    cotton: "Cotton",
    silk: "Silk",
    wool: "Wool",
    premium: "Premium",
    budget: "Budget",
    luxury: "Luxury",
    summer: "Summer",
    winter: "Winter",
    spring: "Spring",
    organic: "Organic",
    synthetic: "Synthetic",
    plain: "Plain",
    printed: "Printed",
    checkered: "Checkered"
  },
  hindi: {
    customizable: "अनुकूलन योग्य",
    idealFor: "के लिए आदर्श",
    occasion: "अवसर",
    work: "काम",
    fabric: "कपड़ा",
    segment: "खंड",
    suitableFor: "के लिए उपयुक्त",
    rawMaterials: "कच्चा माल",
    pattern: "पैटर्न",
    all: "सभी",
    men: "पुरुष",
    women: "महिला",
    babyKids: "शिशु और बच्चे",
    casual: "आरामदायक",
    formal: "औपचारिक",
    party: "पार्टी",
    cotton: "कपास",
    silk: "रेशम",
    wool: "ऊन",
    premium: "प्रीमियम",
    budget: "बजट",
    luxury: "लक्जरी",
    summer: "गर्मी",
    winter: "सर्दी",
    spring: "वसंत",
    organic: "जैविक",
    synthetic: "सिंथेटिक",
    plain: "सादा",
    printed: "प्रिंटेड",
    checkered: "चेकर्ड"
  },
  telugu: {
    customizable: "అనుకూలీకరించదగినది",
    idealFor: "కోసం ఆదర్శం",
    occasion: "సందర్భం",
    work: "పని",
    fabric: "వస్త్రం",
    segment: "విభాగం",
    suitableFor: "కోసం సరైనది",
    rawMaterials: "ముడి పదార్థాలు",
    pattern: "నమూనా",
    all: "అన్నీ",
    men: "పురుషులు",
    women: "మహిళలు",
    babyKids: "శిశువులు & పిల్లలు",
    casual: "క్యాజువల్",
    formal: "ఫార్మల్",
    party: "పార్టీ",
    cotton: "పత్తి",
    silk: "సిల్క్",
    wool: "ఊల్",
    premium: "ప్రీమియం",
    budget: "బడ్జెట్",
    luxury: "లగ్జరీ",
    summer: "వేసవి",
    winter: "శీతాకాలం",
    spring: "వసంత",
    organic: "ఆర్గానిక్",
    synthetic: "సింథటిక్",
    plain: "సాదా",
    printed: "ప్రింటెడ్",
    checkered: "చెక్కర్డ్"
  }
};

const FilterItem: React.FC<FilterItemProps> = ({ 
  title, 
  isOpen = false, 
  options = [], 
  onSelectionChange,
  language
}) => {
  const [isExpanded, setIsExpanded] = useState(isOpen);
  const [selected, setSelected] = useState<string[]>([]);
  
  const t = translations[language];
  
  const handleOptionToggle = (optionId: string) => {
    const updatedSelection = selected.includes(optionId)
      ? selected.filter(id => id !== optionId)
      : [...selected, optionId];
      
    setSelected(updatedSelection);
    if (onSelectionChange) {
      onSelectionChange(updatedSelection);
    }
  };

  return (
    <div className="w-full mt-6">
      <div className="w-full">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex w-full items-center gap-[40px_100px] font-bold uppercase justify-between"
          aria-expanded={isExpanded}
        >
          <div className="text-[#252020] self-stretch my-auto">{title}</div>
          <img
            src={isExpanded ? "https://cdn.builder.io/api/v1/image/assets/8b82f75be9f94884997a493107b7bf6b/3d071781f1d507db621c91d439accec00a027a3c?placeholderIfAbsent=true" : "https://cdn.builder.io/api/v1/image/assets/8b82f75be9f94884997a493107b7bf6b/8eb7ac8d9c8b0fc2a914914f131d7fbca48bca72?placeholderIfAbsent=true"}
            alt={isExpanded ? "Collapse" : "Expand"}
            className="aspect-[1] object-contain w-4 self-stretch shrink-0 my-auto"
          />
        </button>
        {isExpanded && (
          <div className="text-[#252020] font-normal mt-2 space-y-2">
            <div 
              className={`cursor-pointer ${selected.length === 0 ? 'font-semibold' : ''}`}
              onClick={() => {
                setSelected([]);
                if (onSelectionChange) onSelectionChange([]);
              }}
            >
              {t.all}
            </div>
            {options.map(option => (
              <label key={option.id} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="rounded border-gray-300 text-black focus:ring-black"
                  checked={selected.includes(option.id)}
                  onChange={() => handleOptionToggle(option.id)}
                />
                <span>{option.label}</span>
              </label>
            ))}
          </div>
        )}
      </div>
      <div className="border-neutral-200 border min-h-px max-w-full w-[300px] mt-6 border-solid" />
    </div>
  );
};

interface FilterSectionProps {
  onFilterChange: (filterType: string, values: string[]) => void;
  language: 'english' | 'hindi' | 'telugu';
}

export const FilterSection: React.FC<FilterSectionProps> = ({ onFilterChange, language }) => {
  const [customizable, setCustomizable] = useState(false);
  
  const t = translations[language];
  
  const idealForOptions = [
    { id: 'men', label: t.men },
    { id: 'women', label: t.women },
    { id: 'babyKids', label: t.babyKids },
  ];
  
  const occasionOptions = [
    { id: 'casual', label: t.casual },
    { id: 'formal', label: t.formal },
    { id: 'party', label: t.party },
  ];
  
  const fabricOptions = [
    { id: 'cotton', label: t.cotton },
    { id: 'silk', label: t.silk },
    { id: 'wool', label: t.wool },
  ];
  
  const segmentOptions = [
    { id: 'premium', label: t.premium },
    { id: 'budget', label: t.budget },
    { id: 'luxury', label: t.luxury },
  ];
  
  const suitableForOptions = [
    { id: 'summer', label: t.summer },
    { id: 'winter', label: t.winter },
    { id: 'spring', label: t.spring },
  ];
  
  const rawMaterialsOptions = [
    { id: 'organic', label: t.organic },
    { id: 'synthetic', label: t.synthetic },
  ];
  
  const patternOptions = [
    { id: 'plain', label: t.plain },
    { id: 'printed', label: t.printed },
    { id: 'checkered', label: t.checkered },
  ];

  return (
    <aside className="text-lg text-[#252020]">
      <div className="w-full font-bold whitespace-nowrap uppercase mb-6">
        <label className="flex w-full items-stretch gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={customizable}
            onChange={() => setCustomizable(!customizable)}
            className="border-[color:var(--Text-Secondary-Text,#4D4D4D)] w-[22px] h-[22px] bg-white border-[0.917px] border-solid"
          />
          <span className="text-[#252020] grow shrink w-[266px] basis-auto my-auto">
            {t.customizable}
          </span>
        </label>
      </div>
      <div className="border-neutral-200 border min-h-px max-w-full w-[300px] mt-6 border-solid" />
      
      <FilterItem 
        title={t.idealFor} 
        isOpen={true} 
        options={idealForOptions}
        onSelectionChange={(values) => onFilterChange('idealFor', values)}
        language={language}
      />
      <FilterItem 
        title={t.occasion} 
        options={occasionOptions}
        onSelectionChange={(values) => onFilterChange('occasion', values)}
        language={language}
      />
      <FilterItem 
        title={t.work}
        language={language}
      />
      <FilterItem 
        title={t.fabric}
        options={fabricOptions}
        onSelectionChange={(values) => onFilterChange('fabric', values)}
        language={language}
      />
      <FilterItem 
        title={t.segment}
        options={segmentOptions}
        onSelectionChange={(values) => onFilterChange('segment', values)}
        language={language}
      />
      <FilterItem 
        title={t.suitableFor}
        options={suitableForOptions}
        onSelectionChange={(values) => onFilterChange('suitableFor', values)}
        language={language}
      />
      <FilterItem 
        title={t.rawMaterials}
        options={rawMaterialsOptions}
        onSelectionChange={(values) => onFilterChange('rawMaterials', values)}
        language={language}
      />
      <FilterItem 
        title={t.pattern}
        options={patternOptions}
        onSelectionChange={(values) => onFilterChange('pattern', values)}
        language={language}
      />
    </aside>
  );
};
