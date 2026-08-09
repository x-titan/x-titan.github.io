import { Anchor } from "@/components/v1/anchor";
import { Button } from "@/components/v1/button";
import { Stack } from "@/components/v1/stack";
import { Input } from "@/components/v1/input";
import {
  FileQuestionIcon,
  LeafIcon,
  MoveUpRightIcon,
  SearchIcon,
  ShareIcon,
} from "lucide-react";
import { ThemeHotkey } from "@/components/v1/theme-hot-key";
import { Card, CardContent } from "@/components/v1/card";
import { RadioGroup, RadioGroupItem } from "@/components/v1/radio-group";
import { Label } from "@/components/v1/label";

export default function V1Page() {
  return (
    <div className="min-h-full flex flex-col">
      <ThemeHotkey />

      <Card>
        <CardContent>
          <Stack orientation="vertical">
            <Stack orientation="horizontal">
              <Button>Button</Button>
              <Button _type="icon">
                <ShareIcon />
              </Button>
              <Anchor _type="icon">
                <MoveUpRightIcon />
              </Anchor>
            </Stack>
            <Stack orientation="horizontal">
              <RadioGroup>
                <RadioGroupItem name="radio" value="1">
                  
                </RadioGroupItem>
                <Label >Label</Label>
                <RadioGroupItem name="radio" value="2"></RadioGroupItem>
                <RadioGroupItem name="radio" value="3"></RadioGroupItem>
                <RadioGroupItem name="radio" value="4"></RadioGroupItem>
              </RadioGroup>
            </Stack>
          </Stack>
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <Stack orientation="vertical">
            <Stack orientation="vertical">
              <Button>Button</Button>
              <Stack orientation="horizontal">
                <Button _type="icon">
                  <LeafIcon />
                </Button>
                <Anchor _type="icon">
                  <MoveUpRightIcon />
                </Anchor>
                <Button _type="icon">
                  <FileQuestionIcon />
                </Button>
              </Stack>
            </Stack>

            <Anchor href="#">Anchor</Anchor>
          </Stack>
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <Stack orientation="horizontal">
            <Input placeholder="type something" />
            <Button _type="icon">
              <SearchIcon />
            </Button>
          </Stack>
        </CardContent>
      </Card>
    </div>
  );
}
