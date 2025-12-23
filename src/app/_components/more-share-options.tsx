import * as Popover from "@radix-ui/react-popover";
import { cn } from "@/app/utilities/tailwind";
import { iconStyles } from "@/app/_styles/common";
import { BsCopy } from "react-icons/bs";
import { GoShare } from "react-icons/go";
import { CopyButton } from "@/app/_components/copy-button";

interface MoreShareOptionsProps {
  link: string;
}

export function MoreShareOptions({ link }: MoreShareOptionsProps) {
  return (
    <Popover.Root modal>
      <Popover.Trigger asChild>
        <button className={cn(iconStyles)} type="button" aria-label="Share">
          <GoShare fontSize={22} />
        </button>
      </Popover.Trigger>
      <Popover.Content className="min-w-48 rounded-lg border bg-white p-2 shadow-sm outline-red-600">
        <ul className="flex flex-col text-sm">
          <li className="w-full">
            <Popover.Close asChild>
              <CopyButton
                text={link}
                className="flex w-full items-center gap-2 rounded-lg p-2 text-sm outline-red-600 hover:bg-red-50"
              >
                <BsCopy fontSize={14} />
                <span>Copy Link</span>
              </CopyButton>
            </Popover.Close>
          </li>
        </ul>
      </Popover.Content>
    </Popover.Root>
  );
}
