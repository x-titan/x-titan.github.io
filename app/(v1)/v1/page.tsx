import { ThemeToggle } from "@/components/app/theme-toggle";
import { Input } from "@/components/v1/input";
import { Screen } from "@/components/v1/screen";

export default function V1Page() {
  return (
    <div>
      <ThemeToggle />
      <Screen width={600} height={400}>
        <Input />
      </Screen>
    </div>
  );
}
