import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { SetStateAction } from "react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

interface PopoverProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<SetStateAction<boolean>>;
}
export default function LogsFilterPopover({ isOpen, setIsOpen }: PopoverProps) {
  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger>
        <span />
      </PopoverTrigger>
      <PopoverContent side="bottom" align="end" className="w-max">
        <p className="font-semibold pb-1">Filter By:</p>
        <hr />
        <ToggleGroup type="single" className="flex-col mt-2" variant="outline">
          <ToggleGroupItem
            value="environment"
            className="w-full"
            id="environment"
          >
            Environment
          </ToggleGroupItem>
          <ToggleGroupItem value="service" className="w-full" id="service">
            Service
          </ToggleGroupItem>
          <ToggleGroupItem
            value="status_code"
            className="w-full"
            id="status_code"
          >
            Status Code
          </ToggleGroupItem>
          <ToggleGroupItem value="date" className="w-full" id="date">
            Date
          </ToggleGroupItem>
        </ToggleGroup>
      </PopoverContent>
    </Popover>
  );
}
