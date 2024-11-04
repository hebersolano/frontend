import Image from "next/image";

function PageTitle({ title }: { title: string }) {
  return (
    <div className="mt-16 bg-gradient-to-t from-background from-0% to-accent to-20%">
      <div className="mx-auto max-w-screen-xl px-4 lg:px-0">
        <h1 className="py-16 text-center font-serif text-3xl font-bold md:text-5xl">
          {title}
        </h1>
        <div className="relative h-12 rounded-t-xl bg-background md:h-24">
          <Image
            src="header-leaf.webp"
            alt="header leaf"
            width={209}
            height={90}
            className="absolute -top-4 right-1/2 w-32 translate-x-1/2 md:w-40"
          />
        </div>
      </div>
    </div>
  );
}

export default PageTitle;
