"use client";

import FormRow from "@/components/form/FormRow";
import SectionHeader from "@/components/section-header";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ContactFormSchema } from "@/lib/schemas";
import { Button } from "@/components/ui/button";

// import { zodResolver } from "@hookform/resolvers/zod";

export type FormInputs = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

function ContactForm() {
  const {
    register,
    handleSubmit,
    // setError,
    // reset,
    formState: { errors, isSubmitting },
  } = useForm<FormInputs>({ resolver: zodResolver(ContactFormSchema) });

  const onSubmit: SubmitHandler<FormInputs> = (formData) => {
    console.log(formData);
    console.log("kjj");
  };

  return (
    <div className="mx-16">
      <div className="rounded-xl border-2 p-12">
        <SectionHeader
          title="Envianos un mensaje"
          description="Comparte tus dudas y preguntas con nosotros"
        />
        <form
          onSubmit={handleSubmit(onSubmit, (e) => console.log(e))}
          className="space-y-4"
        >
          <FormRow label="Nombre" error={errors["name"]} required>
            <input
              type="text"
              id="name"
              {...register("name")}
              disabled={isSubmitting}
            />
          </FormRow>
          <FormRow label="Correo" error={errors["email"]} required>
            <input
              type="email"
              id="email"
              {...register("email")}
              disabled={isSubmitting}
            />
          </FormRow>
          <FormRow label="Teléfono" error={errors["phone"]}>
            <input
              type="text"
              id="phone"
              {...register("phone")}
              disabled={isSubmitting}
            />
          </FormRow>
          <FormRow label="Asunto" error={errors["subject"]} required>
            <input
              type="text"
              id="subject"
              {...register("subject")}
              disabled={isSubmitting}
            />
          </FormRow>
          <FormRow label="Mensaje" error={errors["message"]} required>
            <textarea
              id="message"
              {...register("message")}
              disabled={isSubmitting}
              className="h-24"
            ></textarea>
          </FormRow>
          <p className="text-right text-sm">
            <span className="text-base text-primary">*</span> required field
          </p>
          <Button type="submit" size="lg">
            Enviar
          </Button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
