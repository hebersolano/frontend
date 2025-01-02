import YoutubeVideo from "@/components/youtube-video";
import { MessageSquareQuote } from "lucide-react";
import Image from "next/image";

function KnowAboutUs() {
  return (
    <div className="">
      <div className="mx-auto max-w-screen-xl px-4 py-32">
        <div className="flex flex-1 flex-col items-center justify-center gap-16 lg:flex-row">
          <div className="space-y-4 text-center">
            <div className="relative mx-auto w-fit">
              <Image
                src="herrera.webp"
                alt="herrera profile photo"
                width={150}
                height={150}
                className="rounded-[50px]"
              />
              <MessageSquareQuote className="absolute -bottom-3 left-1/2 -translate-x-1/2 text-primary" />
            </div>
            <p className="text-balance leading-7">
              Te doy la bienvenida a esta comunidad de productores y en nombre
              de todos te agradezco que consideres este proyecto o alguno de
              nuestros productos y servicios.
            </p>
            <p className="font-serif text-lg font-bold">Brayan Herrera</p>
          </div>
          {/* video */}
          <div className="w-full grow">
            <YoutubeVideo />
          </div>
        </div>
      </div>
    </div>
  );
}

export default KnowAboutUs;
