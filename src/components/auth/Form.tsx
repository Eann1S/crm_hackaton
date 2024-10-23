"use client";

import { EnvelopeIcon, KeyIcon } from "@heroicons/react/24/outline";
import {
  FieldError,
  useForm,
  UseFormRegister,
} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignInSchema, signInSchema } from "../../utils/zod";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Form({
  children,
  title,
  buttonText,
  repeat,
}: {
  title: string;
  buttonText: string;
  repeat?: boolean;
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
    <div className="flex flex-col justify-between w-[400px] h-[640px] px-10 py-12 rounded-2xl shadow">
      <div className="flex flex-row justify-center">
        <h1 className="text-[32px] text-center">{title}</h1>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col justify-center gap-6"
      >
        <Input
          id="email"
          inputType="text"
          placeholder="Email"
          error={errors.email}
          register={register}
        >
          <EnvelopeIcon className="size-5" />
        </Input>
        <Input
          id="password"
          inputType="password"
          placeholder="Password"
          error={errors.password}
          register={register}
        >
          <KeyIcon className="size-5" />
        </Input>
        {repeat && (
          <Input
            id="password"
            inputType="password"
            placeholder="Repeat password"
            register={register}
          >
            <KeyIcon className="size-5" />
          </Input>
        )}
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

function Input({
  children,
  id,
  inputType,
  placeholder,
  error,
  register,
}: {
  children: React.ReactNode;
  id: 'email' | 'password';
  inputType: string;
  placeholder: string;
  error?: FieldError;
  register: UseFormRegister<SignInSchema>;
}) {
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
