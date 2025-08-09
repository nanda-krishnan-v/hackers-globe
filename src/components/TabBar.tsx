import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface TabBarProps {
  tabs: string[];
  active: string;
  onChange: (tab: string) => void;
}

const TabBar = ({ tabs, active, onChange }: TabBarProps) => {
  return (
    <div className="w-full overflow-x-auto">
      <div className="flex gap-2 min-w-max">
        {tabs.map((tab) => (
          <Button
            key={tab}
            variant={active === tab ? "default" : "secondary"}
            className={cn("rounded-full", active === tab ? "" : "")}
            onClick={() => onChange(tab)}
            aria-pressed={active === tab}
          >
            {tab}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default TabBar;
