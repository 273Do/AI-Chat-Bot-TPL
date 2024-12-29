import { useEffect, useState } from "react";

import { CalendarDays, House } from "lucide-react";

import { Calendar } from "@/components/ui/calendar";
import {
  SidebarGroupLabel,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const ModeDiary = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  useEffect(() => {
    if (!date) return;
    const dateStr = `${date?.getFullYear()}-${date?.getMonth()}-${date?.getDate()}`;
    console.log(dateStr);
  }, [date]);

  return (
    <SidebarMenuItem>
      <SidebarGroupLabel className="gap-2 text-xs font-normal text-muted-foreground">
        <CalendarDays size={16} />
        Calendar
      </SidebarGroupLabel>
      <SidebarMenuItem>
        <Calendar
          mode="single"
          captionLayout="dropdown-buttons"
          className="bg-card-muted mb-2 rounded-lg border"
          selected={date}
          onSelect={setDate}
          fromYear={1960}
          toYear={2030}
        />
      </SidebarMenuItem>
      <SidebarMenuButton onClick={() => setDate(new Date())}>
        <House size={16} />
        今日のルームを表示
      </SidebarMenuButton>
    </SidebarMenuItem>
  );
};

export default ModeDiary;
