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
          width="732"
          height="412"
          src="https://www.youtube.com/embed/o6ztBsSAXSU"
          title="Torrefactora de Café Herrera | Café San Luis"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </ControlledModal>
      <div
        onClick={() => setShow(true)}
        className="flex items-center justify-center overflow-hidden rounded-xl bg-slate-300 bg-[url(/cover-torrecafhe.webp)] bg-cover bg-no-repeat brightness-90"
        style={{ width: 732, height: 412 }}
      >
        <CirclePlay className="play text-white" width={120} height={120} />
      </div>
    </>
  );
}

export default YoutubeVideo;
