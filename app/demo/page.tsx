import { ChatDemo } from "@/components/demo/chat";
import { ColorsDemo } from "@/components/demo/colors";
import { DemoTitle } from "@/components/demo/demo-title";
import { IconsDemo } from "@/components/demo/icons";
import { ImageDemo } from "@/components/demo/image";
import { InteractiveDemo } from "@/components/demo/interactive";
import { LoginFormDemo } from "@/components/demo/login-form";

export default function DemoPage() {
  return (
    <div className="container mx-auto max-w-6xl p-4 md:p-8">
      <div className="fixed"></div>
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6 [column-fill:_balance]">
        <div className="break-inside-avoid mb-6">
          <DemoTitle />
        </div>
        <div className="break-inside-avoid mb-6">
          <ColorsDemo />
        </div>
        <div className="break-inside-avoid mb-6">
          <ImageDemo />
        </div>
        <div className="break-inside-avoid mb-6">
          <IconsDemo />
        </div>
        <div className="break-inside-avoid mb-6">
          <InteractiveDemo />
        </div>
        <div className="break-inside-avoid mb-6">
          <LoginFormDemo />
        </div>
        <div className="break-inside-avoid mb-6">
          <ChatDemo />
        </div>
      </div>
    </div>
  );
}
