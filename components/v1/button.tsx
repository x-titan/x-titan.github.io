import { cn } from "@/lib/utils";
import { Button as ButtonPrimitive } from "@base-ui/react/button";

export function Button({ className, ...props }: ButtonPrimitive.Props) {
  return (
    <ButtonPrimitive
      className={cn("bg-gray-200 hover:bg-gray-300", className)}
      {...props}
    />
  );
}
