"use client";

import FormRow from "@/components/form/FormRow";
import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";

export type FormInputs = {
  name: string;
  email: string;
  phone: string;
  title: string;
  message: string;
};

function ContactForm() {
  const {
    register,
    // handleSubmit,
    // setError,
    // reset,
    formState: { errors, isSubmitting },
  } = useForm<FormInputs>();
  return (
    <div>
      <div>
        <form action="">
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
              type="text"
              id="email"
              {...register("email")}
              disabled={isSubmitting}
            />
          </FormRow>
          <FormRow label="Teléfono" error={errors["phone"]} required>
            <input
              type="text"
              id="phone"
              {...register("phone")}
              disabled={isSubmitting}
            />
          </FormRow>
          <FormRow label="Mensaje" error={errors["message"]} required>
            <input
              type="text"
              id="message"
              {...register("message")}
              disabled={isSubmitting}
            />
          </FormRow>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
