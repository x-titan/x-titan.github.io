import { NoteDock } from "@/components/app/note/dock";
import { NoteTextarea } from "@/components/app/note/textarea";
import { NoteTopPanel } from "@/components/app/note/top-panel";
import { ThemeToggle } from "@/components/app/theme-toggle";
import { Wrapper } from "@/components/app/wrapper";
import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

export default function NotePage() {
  return (
    <Wrapper>
      <Card className="w-full max-w-sm p-3 rounded-4xl bg-black">
        <NoteTopPanel />
        <NoteTextarea />
        <NoteDock />
      </Card>
    </Wrapper>
  );
}
