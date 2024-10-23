"use client";

import { EnvelopeIcon, KeyIcon } from "@heroicons/react/24/outline";
import { FieldError, useForm, UseFormRegister } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignInSchema, signInSchema } from "../../utils/zod";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Form({
  children,
  title,
  buttonText,
}: {
  title: string;
  buttonText: string;
  children: React.ReactNode;
}) {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<SignInSchema>({
    resolver: zodResolver(signInSchema),
  });
  const onSubmit = async (data: SignInSchema) => {
    const res = await signIn("credentials", {
      redirect: false,
      email: data.email,
      password: data.password,
    });
    if (res?.error) {
      setError("root", { message: "Неверный логин или пароль." });
    } else {
      router.push("/profile");
    }
  };

  return (
    <div className="flex flex-col justify-between w-[400px] h-[640px] px-10 pt-16 pb-12 rounded-2xl shadow">
      <div className="flex flex-row justify-center">
        <h1 className="text-[32px] text-center">{title}</h1>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col justify-center gap-6"
      >
        {formFields.map((field) => (
          <Input
            key={field.id}
            id={field.id as "email" | "password"}
            inputType={field.inputType}
            placeholder={field.placeholder}
            error={errors[field.id]}
            register={register}
          >
            {field.icon}
          </Input>
        ))}
        <button type="submit" className="btn btn-primary text-base font-medium">
          {buttonText}
        </button>
        {errors.root && (
          <p className="text-red-500 text-sm">{errors.root.message}</p>
        )}
      </form>
      <div className="flex flex-row justify-center">
        <p className="text-[12px] text-center">{children}</p>
      </div>
    </div>
  );
}

type FormType = {
  id: "email" | "password";
  inputType: string;
  placeholder: string;
  icon: any;
};
const formFields: FormType[] = [
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

function Input({
  children,
  id,
  inputType,
  placeholder,
  error,
  register,
}: {
  children: React.ReactNode;
  error?: FieldError;
  register: UseFormRegister<SignInSchema>;
} & Omit<FormType, "icon">) {
  return (
    <div>
      <label className="input input-bordered flex items-center gap-2">
        {children}
        <input
          id={id}
          type={inputType}
          className="grow"
          placeholder={placeholder}
          {...register(id)}
        />
      </label>
      {error && <p className="text-red-500 text-sm">{error.message}</p>}
    </div>
  );
}
