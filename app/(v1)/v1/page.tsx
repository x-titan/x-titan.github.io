import { ThemeToggle } from "@/components/app/theme-toggle";
import { Anchor } from "@/components/v1/anchor";
import { Button } from "@/components/v1/button";
import { Input } from "@/components/v1/input";
import { Screen } from "@/components/v1/screen";
import { LeafIcon, MoveUpRightIcon } from "lucide-react";

export default function V1Page() {
  return (
    <div className="min-h-full flex flex-col">
      <ThemeToggle />
      <Screen width={600} height={400}>
        <Input />
        <Button>Button</Button>
        <Button _type="icon"><MoveUpRightIcon /></Button>
        <Anchor href="#">Anchor</Anchor>
      </Screen>
    </div>
  );
}
