import { Moon } from "lucide-react";

import { Switch } from "@/components/ui/switch";

import { useTheme } from "@/components/theme-provider";

// テーマトグルコンポーネント
export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex w-full items-center justify-between">
      <div className="flex items-center gap-2 font-normal">
        <Moon />
        ダークテーマ
      </div>
      <Switch
        onCheckedChange={(e) => setTheme(e ? "dark" : "light")}
        defaultChecked={theme === "dark"}
      />
    </div>
  );
}
