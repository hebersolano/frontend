function SectionHeader({
  title,
  description,
}: {
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-16 flex flex-col items-center gap-2 text-center">
      <h2 className="font-serif text-2xl font-bold md:text-3xl xl:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="max-w-xl text-balance text-muted-foreground">
          {description}
        </p>
      )}
    </div>
  );
}

export default SectionHeader;
