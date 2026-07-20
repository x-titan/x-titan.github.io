import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import { CardAction } from "@/components/ui/card";
import {
  CheckIcon,
  ChevronLeftIcon,
  EllipsisIcon,
  SquareArrowOutUpRightIcon,
} from "lucide-react";

export function NoteTopPanel() {
  return (
    <ButtonGroup orientation="horizontal" className="[--radius:9999rem] w-full justify-between">
      <ButtonGroup>
        <Button variant="outline" size="icon">
          <ChevronLeftIcon />
        </Button>
      </ButtonGroup>

      <ButtonGroup className="flex row gap-2">
        <ButtonGroup
          orientation="horizontal"
        >
          <Button variant="outline" size="icon">
            <SquareArrowOutUpRightIcon />
          </Button>
          <Button variant="outline" size="icon">
            <EllipsisIcon />
          </Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button variant="outline" size="icon" style={{ backgroundColor: "#f5cf28ff" }}>
            <CheckIcon />
          </Button>
        </ButtonGroup>
      </ButtonGroup>
    </ButtonGroup>
  );
}
