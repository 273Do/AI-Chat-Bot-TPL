import React from "react";

import { ChevronsUpDown, LogOut } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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
  useSidebar,
} from "@/components/ui/sidebar";

import { ThemeToggle } from "../../theme-toggle";

import { useAppSelector } from "@/app/hooks";
import SettingScreen from "@/components/Setting/SettingScreen";
import { successToast } from "@/components/Toast/toast";
import { auth } from "@/firebase/firebase";

// サイドバーのフッター
const Footer = () => {
  const user = useAppSelector((state) => state.user.user);
  const { open } = useSidebar();
  return (
    <SidebarFooter>
      <SidebarMenu>
        <SidebarMenuItem>
          <DropdownMenu>
            <DropdownMenuTrigger asChild className="h-11">
              <SidebarMenuButton>
                <div className="flex items-center justify-start gap-2">
                  <Avatar className={` ${open ? "size-9" : "-ml-2 size-8"}`}>
                    <AvatarImage src={user?.photURL} />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col gap-1">
                    <p>{user?.displayName}</p>
                    <p className="-mt-1 text-xs font-light text-muted-foreground">
                      {user?.email}
                    </p>
                  </div>
                </div>
                <ChevronsUpDown className="ml-auto" />
              </SidebarMenuButton>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              side="right"
              className="w-56"
              // w-[--radix-popper-anchor-width]
            >
              <DropdownMenuLabel>
                <div className="flex items-center justify-start gap-2">
                  <Avatar>
                    <AvatarImage src={user?.photURL} />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col gap-1">
                    <p>{user?.displayName}</p>
                    <p className="-mt-1 text-xs font-light text-muted-foreground">
                      {user?.email}
                    </p>
                  </div>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <SettingScreen />
                <DropdownMenuLabel className="relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0">
                  <ThemeToggle />
                </DropdownMenuLabel>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                className="cursor-pointer"
                onClick={() => {
                  auth.signOut();
                  successToast("👋 ログアウト", "ログインしました。");
                }}
              >
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
