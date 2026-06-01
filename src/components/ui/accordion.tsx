"use client";

import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export const Accordion = AccordionPrimitive.Root;

export function AccordionItem({ className, ...props }: React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>) {
  return <AccordionPrimitive.Item className={cn("border-b border-border", className)} {...props} />;
}

export function AccordionTrigger({ className, children, ...props }: React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header>
      <AccordionPrimitive.Trigger className={cn("flex w-full items-center justify-between py-5 text-left font-semibold transition hover:text-primary [&[data-state=open]>svg]:rotate-180", className)} {...props}>
        {children}
        <ChevronDown className="size-4 shrink-0 transition-transform" />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

export function AccordionContent({ className, children, ...props }: React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content className="overflow-hidden text-sm text-muted-foreground data-[state=closed]:animate-none data-[state=open]:animate-none" {...props}>
      <div className={cn("pb-5 leading-7", className)}>{children}</div>
    </AccordionPrimitive.Content>
  );
}
