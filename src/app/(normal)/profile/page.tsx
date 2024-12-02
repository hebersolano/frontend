import { ThemeProvider } from "next-themes";
import ThemeSelector from "./components/theme-selector";
import Profile from "./profile";
import { Separator } from "@/components/ui/separator";

export default function SettingsProfilePage() {
  return (
    <div className="space-y-6">
      <Profile />

      <Separator />
      <div>
        <h3 className="text-lg font-medium">Appearance</h3>
        <p className="text-sm text-muted-foreground">
          Customize the appearance of the app. Automatically switch between day
          and night themes.
        </p>
      </div>
      <ThemeProvider attribute="class" enableSystem={false}>
        <ThemeSelector />
      </ThemeProvider>
    </div>
  );
}
