import { cn } from "@/lib/utils";

type SectionProps = {
  children: React.ReactNode;
  className?: string;
  id: string;
};

export function Section({ children, className, id }: SectionProps) {
  return (
    <section 
      id={id} 
      className={cn(
        "relative min-h-screen flex flex-col justify-center pt-16 sm:pt-24",
        className
      )}
    >
      {children}
    </section>
  );
}
