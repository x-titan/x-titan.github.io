import { Textarea } from "@/components/ui/textarea";

export function NoteTextarea() {
  return (
    <Textarea
      placeholder="Take a note..."
      className="resize-none h-60"
      style={{ background: "transparent",outline: "none" }}
    ></Textarea>
  );
}
