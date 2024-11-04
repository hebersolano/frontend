import SectionHeader from "@/components/section-header";
import { BookHeart, Handshake, Star } from "lucide-react";

function BusinessValues() {
  return (
    <section className="bg-accent">
      <div className="mx-auto max-w-screen-xl px-4 py-16">
        <SectionHeader title="Nuestros Valores" />
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
          {/* value 01 */}
          <div className="space-y-3 rounded-lg bg-background p-10">
            <div className="mb-6 w-fit rounded-full bg-secondary p-2">
              <BookHeart className="text-white" />
            </div>
            <h3 className="font-serif text-xl font-bold">Integridad</h3>
            <p>
              Siempre hacemos lo correcto. Somos justos con nuestros clientes y
              genuinos en todos nuestros tratos comerciales.
            </p>
          </div>

          {/* value 02 */}
          <div className="space-y-3 rounded-lg bg-background p-10">
            <div className="mb-6 w-fit rounded-full bg-secondary p-2">
              <Handshake className="text-white" />
            </div>
            <h3 className="font-serif text-xl font-bold">Compromiso</h3>
            <p>
              Escuchamos a nuestros clientes y estamos constantemente
              aprendiendo y mejorando continuamente.
            </p>
          </div>

          {/* value 03 */}
          <div className="space-y-3 rounded-lg bg-background p-10">
            <div className="mb-6 w-fit rounded-full bg-secondary p-2">
              <Star className="text-white" />
            </div>
            <h3 className="font-serif text-xl font-bold">Excelencia</h3>
            <p>
              Escuchamos a nuestros clientes y estamos constantemente
              aprendiendo y mejorando continuamente.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BusinessValues;
