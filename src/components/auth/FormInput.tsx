import { useFormContext } from "react-hook-form";

export type FieldType = {
  id: any;
  inputType: string;
  placeholder: string;
  icon: any;
};

export function FormInput({ id, inputType, placeholder, icon }: FieldType) {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const error = errors[id];
  return (
    <div className="flex flex-col gap-1">
      <label className="input input-bordered flex items-center gap-2">
        {icon}
        <input
          id={id}
          type={inputType}
          className="grow"
          placeholder={placeholder}
          {...register(id)}
        />
      </label>
      {error && (
        <p className="text-red-500 text-sm">{error.message as string}</p>
      )}
    </div>
  );
}
