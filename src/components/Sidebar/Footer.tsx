import React from "react";

import { ChevronsUpDown, LogOut, Settings, User2 } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import {
  SidebarFooter,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

import { ModeToggle } from "../mode-toggle";
const Footer = () => {
  return (
    <SidebarFooter>
      <SidebarMenu>
        <SidebarMenuItem>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <SidebarMenuButton>
                <User2 /> Username
                <ChevronsUpDown className="ml-auto" />
              </SidebarMenuButton>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              side="right"
              className="w-56"
              // w-[--radix-popper-anchor-width]
            >
              <DropdownMenuLabel>
                <div className="flex items-center justify-start gap-1">
                  <User2 className="size-7" />
                  <div>
                    <p>User Name</p>
                    <p className="-mt-1 text-xs font-light text-muted-foreground">
                      hogehoge@main.com
                    </p>
                  </div>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <Settings />
                  設定
                </DropdownMenuItem>
                <DropdownMenuLabel className="relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0">
                  <ModeToggle />
                </DropdownMenuLabel>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />

              <DropdownMenuItem>
                <LogOut />
                ログアウト
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarFooter>
  );
};

export default Footer;
