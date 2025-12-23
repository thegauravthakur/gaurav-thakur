import * as Popover from "@radix-ui/react-popover";
import { cn } from "@/app/utilities/tailwind";
import { iconStyles } from "@/app/_styles/common";
import { IoMdMore } from "react-icons/io";
import Link from "next/link";
import { links } from "@/app/_components/header";

export function MobileMenu() {
  return (
    <Popover.Root modal>
      <Popover.Trigger asChild>
        <button className={cn(iconStyles)} aria-label="Menu" type="button">
          <IoMdMore fontSize={20} />
        </button>
      </Popover.Trigger>
      <Popover.Content className="mr-2 mt-2 min-w-48 rounded-lg border bg-white p-2 shadow-sm outline-red-600">
        <ul className="flex flex-col text-sm">
          {links.map((link) => (
            <li key={link.name} className="w-full">
              <Popover.Close asChild>
                <Link
                  href={link.href}
                  className="inline-block w-full rounded-lg p-2 outline-red-600 hover:bg-red-50"
                >
                  {link.name}
                </Link>
              </Popover.Close>
            </li>
          ))}
        </ul>
      </Popover.Content>
    </Popover.Root>
  );
}
