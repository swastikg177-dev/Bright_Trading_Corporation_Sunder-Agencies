import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  body,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  body?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={cn("max-w-3xl space-y-5", align === "center" && "mx-auto text-center")}>
      <Badge>{eyebrow}</Badge>
      <div className="space-y-3">
        <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
          {title}
        </h2>
        {body ? (
          <p className="text-base leading-8 text-muted-foreground sm:text-lg">{body}</p>
        ) : null}
      </div>
    </div>
  );
}
