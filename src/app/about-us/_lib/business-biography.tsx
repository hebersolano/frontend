import Image from "next/image";

function BusinessBiography() {
  return (
    <section className="mx-auto max-w-screen-xl px-4 pb-24">
      <div className="flex flex-col gap-6 px-2 lg:flex-row lg:gap-12">
        <div className="basis-1/2">
          <Image
            src="herrera-family.webp"
            alt="herrera family"
            width={1365}
            height={1024}
            className="rounded-xl duration-300 ease-in-out hover:scale-105"
          />
        </div>
        <div className="basis-1/2 text-pretty leading-relaxed">
          <p className="my-6">
            Somos una empresa familiar que inicia sus operaciones un verano de
            2015 en la remota zona del pueblo de San Luis, Comayagua, Honduras.
            Café San Luis es un sueño realizado con ardua labor y que representa
            lo mejor que tiene nuestra tierra para ofrecer al mundo. Siempre
            tuvimos claro nuestro compromiso con cada etapa del proceso de
            elaboración artesanal de nuestro café, del que estamos actualmente
            orgullosos. Hoy contamos con una variada línea de café para todos
            los gustos y exigencias, para las personas que distinguen y aprecian
            el buen café. Si eres de esas personas, Café San Luis es para ti.{" "}
          </p>
          <p>
            En el 2010, damos comienzo al proyecto como productores de café en
            la zona de San Luis del departamento de Comayagua, Honduras;
            cultivando café convencional de altura a 1,425 msnm; manejando las
            siguientes variedades de café, en híbrido: café 90, lempira, y h27.
            También café de la línea arábiga en menores dimensiones como ser:
            catuahí, bourbon y caturra. Procurando siempre el mejor tratado y
            cuidado a nuestro café en cada proceso.
          </p>
        </div>
      </div>
    </section>
  );
}

export default BusinessBiography;
