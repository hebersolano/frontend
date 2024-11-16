import { HeadingH2 } from "./ui/typography";

function SectionHeader({
  title,
  description,
}: {
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-12 flex flex-col items-center gap-2 text-center">
      <HeadingH2>{title}</HeadingH2>
      {description ? (
        <p className="max-w-xl text-balance text-muted-foreground">
          {description}
        </p>
      ) : (
        <div className="h-[1.5rem]" />
      )}
    </div>
  );
}

export default SectionHeader;
