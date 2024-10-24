"use client";

import { EnvelopeIcon, KeyIcon } from "@heroicons/react/24/outline";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignInSchema, signInSchema } from "../../utils/zod";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FieldType, FormInput } from "./FormInput";

export default function SignInForm({
  children,
  title,
  buttonText,
}: {
  title: string;
  buttonText: string;
  children: React.ReactNode;
}) {
  const router = useRouter();
  const form = useForm<SignInSchema>({
    resolver: zodResolver(signInSchema),
  });

  const {
    handleSubmit,
    formState: { errors },
  } = form;

  const onSubmit = async (data: SignInSchema) => {
    const res = await signIn("credentials", {
      redirect: false,
      email: data.email,
      password: data.password,
    });
    if (res?.error) {
      form.setError("root", { message: "Неверный логин или пароль." });
    } else {
      router.push("/profile");
    }
  };

  return (
    <div className="flex flex-col justify-between w-[400px] h-[640px] px-10 pt-16 pb-12 rounded-2xl shadow">
      <div className="flex flex-row justify-center">
        <h1 className="text-[32px] text-center">{title}</h1>
      </div>
      <FormProvider {...form}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col justify-center gap-6"
        >
          {formFields.map((field) => (
            <FormInput
              key={field.id}
              id={field.id}
              inputType={field.inputType}
              placeholder={field.placeholder}
              icon={field.icon}
            />
          ))}
          <button
            type="submit"
            className="btn btn-primary text-base font-medium"
          >
            {buttonText}
          </button>
          {errors.root && (
            <p className="text-red-500 text-sm">{errors.root.message}</p>
          )}
        </form>
      </FormProvider>
      <div className="flex flex-row justify-center">
        <p className="text-[12px] text-center">{children}</p>
      </div>
    </div>
  );
}

const formFields: FieldType[] = [
  {
    id: "email",
    inputType: "text",
    placeholder: "Email",
    icon: <EnvelopeIcon className="size-5" />,
  },
  {
    id: "password",
    inputType: "password",
    placeholder: "Password",
    icon: <KeyIcon className="size-5" />,
  },
];
