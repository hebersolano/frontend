import SectionHeader from "@/components/section-header";
import { Separator } from "@/components/ui/separator";
import { BookHeart, Handshake, Star } from "lucide-react";

function BusinessValues() {
  return (
    <section className="bg-accent">
      <div className="mx-auto max-w-screen-xl px-4 py-24">
        <SectionHeader title="Nuestros Valores" />
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
          {/* value 01 */}
          <div className="space-y-3 rounded-lg bg-background p-10">
            <div className="mb-6 w-fit rounded-full bg-secondary p-2">
              <BookHeart className="text-white" />
            </div>
            <h3 className="scroll-m-20 font-serif text-2xl font-semibold tracking-tight">
              Integridad
            </h3>
            <p className="leading-7">
              Siempre hacemos lo correcto. Somos justos con nuestros clientes y
              genuinos en todos nuestros tratos comerciales.
            </p>
          </div>

          {/* value 02 */}
          <div className="space-y-3 rounded-lg bg-background p-10">
            <div className="mb-6 w-fit rounded-full bg-secondary p-2">
              <Handshake className="text-white" />
            </div>
            <h3 className="scroll-m-20 font-serif text-2xl font-semibold tracking-tight">
              Compromiso
            </h3>
            <p className="leading-7">
              Escuchamos a nuestros clientes y estamos constantemente
              aprendiendo y mejorando continuamente.
            </p>
          </div>

          {/* value 03 */}
          <div className="space-y-3 rounded-lg bg-background p-10">
            <div className="mb-6 w-fit rounded-full bg-secondary p-2">
              <Star className="text-white" />
            </div>
            <h3 className="scroll-m-20 font-serif text-2xl font-semibold tracking-tight">
              Excelencia
            </h3>
            <p className="leading-7">
              Escuchamos a nuestros clientes y estamos constantemente
              aprendiendo y mejorando continuamente.
            </p>
          </div>
        </div>

        {/* mission */}
        <div className="mt-24 space-y-12">
          <div className="flex flex-col gap-12 md:flex-row">
            <h3 className="basis-1/3 scroll-m-20 text-center font-serif text-2xl font-bold tracking-tight">
              Misión
            </h3>
            <p className="basis-2/3 text-balance leading-7">
              Brindamos un producto bajo estándares de calidad y un servicio
              personalizado; eficiente y eficaz. Siendo nuestro principal
              objetivo la satisfacción de nuestros clientes, de modo que estos
              nos prefieran y recomienden; posicionándonos exitosamente en el
              mercado con nuestros valores de innovación y liderazgo.
            </p>
          </div>
          <Separator />
          <div className="flex flex-col gap-12 md:flex-row">
            <h3 className="basis-1/3 scroll-m-20 text-center font-serif text-2xl font-bold tracking-tight">
              Visión
            </h3>
            <p className="basis-2/3 text-balance leading-7">
              Alcanzar gran éxito en toda la gama empresarial; industria y
              comercio. Ganando reconocimiento a nivel nacional e internacional,
              convirtiéndonos en un referente de calidad y prestigio. Buscando
              concluir satisfactoriamente cada una de las metas fijadas; a
              través de la perseverancia y el esmero organizacional; con el fin
              de convertirnos en una marca líder en el mercado.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BusinessValues;
