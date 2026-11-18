interface SectionDividerProps {
    showLine?: boolean;
  }
  
  export function SectionDivider({ showLine = true }: SectionDividerProps) {
    return (
      <div className="w-full px-4 sm:px-8 py-12 lg:py-16">
        <div className="max-w-[1200px] mx-auto">
          {showLine && <div className="w-full h-px bg-slate-200/80" />}
        </div>
      </div>
    );
  }