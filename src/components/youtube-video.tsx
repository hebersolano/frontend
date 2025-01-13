"use client";

import { CirclePlay } from "lucide-react";
import { useState } from "react";
import ControlledModal from "./controlled-modal";

function YoutubeVideo() {
  const [show, setShow] = useState(false);
  const onClose = () => setShow(false);

  return (
    <>
      <ControlledModal display={show} onClose={onClose}>
        <iframe
          className="aspect-video max-w-[1280px] grow"
          src="https://www.youtube.com/embed/o6ztBsSAXSU"
          title="Torrefactora de Café Herrera | Café San Luis"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </ControlledModal>
      <div
        onClick={() => setShow(true)}
        className="flex w-full items-center justify-center overflow-hidden rounded-xl bg-slate-300 bg-[url(/img/cover-torrecafhe.webp)] bg-cover bg-center bg-no-repeat brightness-90"
        style={{ aspectRatio: "16/9" }}
      >
        <CirclePlay className="play text-white" width={120} height={120} />
      </div>
    </>
  );
}

export default YoutubeVideo;
