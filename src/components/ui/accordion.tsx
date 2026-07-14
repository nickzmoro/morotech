import { Accordion as AccordionPrimitive } from "@base-ui/react/accordion";

import { cn } from "@/lib/utils";

function Accordion({ className, ...props }: AccordionPrimitive.Root.Props) {
  return (
    <AccordionPrimitive.Root
      data-slot="accordion"
      className={cn("flex w-full flex-col", className)}
      {...props}
    />
  );
}

function AccordionItem({ className, ...props }: AccordionPrimitive.Item.Props) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn(className)}
      {...props}
    />
  );
}

function AccordionTrigger({
  className,
  children,
  ...props
}: AccordionPrimitive.Trigger.Props) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          "group/accordion-trigger font-heading relative flex flex-1 items-center justify-between gap-6 px-6 py-6 text-left text-base font-medium transition-all outline-none aria-disabled:pointer-events-none aria-disabled:opacity-50 md:px-8 md:py-7 md:text-lg",
          className,
        )}
        {...props}
      >
        <span className="text-white transition-colors duration-300 group-hover/accordion-trigger:text-white/95">
          {children}
        </span>
        {/* Custom Plus/Minus Icon */}
        <div className="relative flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-white/20 text-white/60 transition-all duration-300 group-hover/accordion-trigger:border-white/40 group-hover/accordion-trigger:text-white group-aria-expanded/accordion-trigger:border-white/40 group-aria-expanded/accordion-trigger:bg-white/10 group-aria-expanded/accordion-trigger:text-white">
          {/* Horizontal line */}
          <span className="absolute h-[1.5px] w-3 rounded-full bg-current" />
          {/* Vertical line that scales and rotates when expanded */}
          <span className="absolute h-3 w-[1.5px] rounded-full bg-current transition-all duration-300 ease-in-out group-aria-expanded/accordion-trigger:scale-y-0 group-aria-expanded/accordion-trigger:rotate-90" />
        </div>
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

function AccordionContent({
  className,
  children,
  ...props
}: AccordionPrimitive.Panel.Props) {
  return (
    <AccordionPrimitive.Panel
      data-slot="accordion-content"
      className="data-open:animate-accordion-down data-closed:animate-accordion-up overflow-hidden px-6 font-sans text-sm leading-relaxed font-light text-white/75 md:px-8 md:text-base"
      {...props}
    >
      <div
        className={cn(
          "[&_a]:hover:text-foreground h-(--accordion-panel-height) pt-0 pb-6 data-ending-style:h-0 data-starting-style:h-0 md:pb-7 [&_a]:underline [&_a]:underline-offset-3 [&_p:not(:last-child)]:mb-4",
          className,
        )}
      >
        {children}
      </div>
    </AccordionPrimitive.Panel>
  );
}

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger };
