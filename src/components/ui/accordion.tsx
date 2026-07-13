import { Accordion as AccordionPrimitive } from "@base-ui/react/accordion"

import { cn } from "@/lib/utils"

function Accordion({ className, ...props }: AccordionPrimitive.Root.Props) {
  return (
    <AccordionPrimitive.Root
      data-slot="accordion"
      className={cn(
        "flex w-full flex-col",
        className
      )}
      {...props}
    />
  )
}

function AccordionItem({ className, ...props }: AccordionPrimitive.Item.Props) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn(className)}
      {...props}
    />
  )
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
          "group/accordion-trigger relative flex flex-1 items-center justify-between gap-6 px-6 py-6 md:px-8 md:py-7 text-left font-heading text-base md:text-lg font-medium transition-all outline-none aria-disabled:pointer-events-none aria-disabled:opacity-50",
          className
        )}
        {...props}
      >
        <span className="text-white transition-colors duration-300 group-hover/accordion-trigger:text-white/95">
          {children}
        </span>
        {/* Custom Plus/Minus Icon */}
        <div className="relative flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-white/20 text-white/60 transition-all duration-300 group-hover/accordion-trigger:border-white/40 group-hover/accordion-trigger:text-white group-aria-expanded/accordion-trigger:border-white/40 group-aria-expanded/accordion-trigger:text-white group-aria-expanded/accordion-trigger:bg-white/10">
          {/* Horizontal line */}
          <span className="absolute h-[1.5px] w-3 bg-current rounded-full" />
          {/* Vertical line that scales and rotates when expanded */}
          <span className="absolute h-3 w-[1.5px] bg-current rounded-full transition-all duration-300 ease-in-out group-aria-expanded/accordion-trigger:rotate-90 group-aria-expanded/accordion-trigger:scale-y-0" />
        </div>
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
}

function AccordionContent({
  className,
  children,
  ...props
}: AccordionPrimitive.Panel.Props) {
  return (
    <AccordionPrimitive.Panel
      data-slot="accordion-content"
      className="overflow-hidden px-6 md:px-8 text-sm md:text-base text-white/75 font-sans font-light leading-relaxed data-open:animate-accordion-down data-closed:animate-accordion-up"
      {...props}
    >
      <div
        className={cn(
          "h-(--accordion-panel-height) pt-0 pb-6 md:pb-7 data-ending-style:h-0 data-starting-style:h-0 [&_a]:underline [&_a]:underline-offset-3 [&_a]:hover:text-foreground [&_p:not(:last-child)]:mb-4",
          className
        )}
      >
        {children}
      </div>
    </AccordionPrimitive.Panel>
  )
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
