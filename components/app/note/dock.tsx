import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import {
  ALargeSmallIcon,
  ListTodoIcon,
  NotebookPenIcon,
  PaperclipIcon,
  SignatureIcon,
  TableIcon,
} from "lucide-react";

export function NoteDock() {
  return (
    <ButtonGroup orientation="horizontal" className="[--radius:9999rem] w-full">
      <Button variant="outline" size="icon">
        <ALargeSmallIcon />
      </Button>
      <Button variant="outline" size="icon">
        <ListTodoIcon />
      </Button>
      <Button variant="outline" size="icon">
        <TableIcon />
      </Button>
      {/* <Button variant="outline" size="icon">
        <NotebookPenIcon />
      </Button> */}
      <Button variant="outline" size="icon">
        <PaperclipIcon />
      </Button>
      <Button variant="outline" size="icon">
        <SignatureIcon />
      </Button>
    </ButtonGroup>
  );
}
