function SectionHeader({
  title,
  description,
}: {
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-12 flex flex-col items-center gap-2 text-center">
      <h2 className="scroll-m-20 font-serif text-3xl font-semibold tracking-tight lg:text-4xl">
        {title}
      </h2>
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
