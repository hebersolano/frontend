import SectionHeader from "@/components/section-header";
import YoutubeVideo from "@/components/youtube-video";
import { MessageSquareQuote } from "lucide-react";
import Image from "next/image";

function KnowAboutUs() {
  return (
    <div className="bg-secondary/80">
      <div className="mx-auto max-w-screen-xl px-4 py-16">
        <SectionHeader title="Conócenos" />
        <div className="flex gap-8">
          <div className="space-y-6">
            <div className="relative w-fit">
              <Image
                src="herrera.webp"
                alt="herrera profile photo"
                width={150}
                height={150}
                className="rounded-[50px]"
              />
              <MessageSquareQuote className="absolute -bottom-3 left-1/2 -translate-x-1/2 text-white" />
            </div>
            <p className="">
              Te doy la bienvenida a esta comunidad de productores y en nombre
              de todos te agradezco que consideres este proyecto o alguno de
              nuestros productos y servicios.
            </p>
            <p className="font-serif text-lg font-bold">Brayan Herrera</p>
          </div>
          {/* video */}
          <div>
            <YoutubeVideo />
          </div>
        </div>
      </div>
    </div>
  );
}

export default KnowAboutUs;
