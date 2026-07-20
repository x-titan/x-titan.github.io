import { FieldInput } from "@/components/app/field-input";
import { Navbar } from "@/components/app/navbar";
import { ThemeToggle } from "@/components/app/theme-toggle";
import { Wrapper } from "@/components/app/wrapper";
import { DemoTitle } from "@/components/demo/demo-title";
import { LoginFormDemo } from "@/components/demo/login-form";
import Blur from "@/components/old/blur";
import Figure from "@/components/old/figure";
import Heading from "@/components/old/heading";

export default function IndexPage() {
  return (
    <main>
      <Wrapper>
        <ThemeToggle />
        <DemoTitle />
        <LoginFormDemo />
      </Wrapper>
      <Blur />
    </main>
  );
}
