import React from 'react';

interface FilterItemProps {
  title: string;
  isOpen?: boolean;
}

const FilterItem: React.FC<FilterItemProps> = ({ title, isOpen = false }) => {
  const [isExpanded, setIsExpanded] = React.useState(isOpen);

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
          <div className="text-[#252020] font-normal mt-2">All</div>
        )}
      </div>
      <div className="border-neutral-200 border min-h-px max-w-full w-[300px] mt-6 border-solid" />
    </div>
  );
};

export const FilterSection = () => {
  return (
    <aside className="text-lg text-[#252020]">
      <div className="w-full font-bold whitespace-nowrap uppercase mb-6">
        <label className="flex w-full items-stretch gap-2">
          <input
            type="checkbox"
            className="border-[color:var(--Text-Secondary-Text,#4D4D4D)] flex w-[22px] shrink-0 h-[22px] bg-white border-[0.917px] border-solid"
          />
          <span className="text-[#252020] grow shrink w-[266px] basis-auto my-auto">
            Customizable
          </span>
        </label>
      </div>
      <div className="border-neutral-200 border min-h-px max-w-full w-[300px] mt-6 border-solid" />
      
      <FilterItem title="IDEAL FOR" isOpen={true} />
      <FilterItem title="OCCASION" />
      <FilterItem title="WORK" />
      <FilterItem title="FABRIC" />
      <FilterItem title="SEGMENT" />
      <FilterItem title="SUITABLE FOR" />
      <FilterItem title="RAW MATERIALS" />
      <FilterItem title="PATTERN" />
    </aside>
  );
};
