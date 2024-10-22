import {
  EnvelopeIcon,
  KeyIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";

export default function Modal({
  children,
  title,
  buttonText,
  username,
  repeat,
}: {
  title: string;
  buttonText: string;
  username?: boolean;
  repeat?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col justify-between w-[400px] h-[640px] px-10 py-12 rounded-2xl shadow">
      <div className="flex flex-row justify-center">
        <h1 className="text-[32px] text-center">{title}</h1>
      </div>
      <div className="flex flex-col justify-center gap-6">
        <Input inputType="text" placeholder="Email">
          <EnvelopeIcon className="size-5" />
        </Input>
        {username && (
          <Input inputType="text" placeholder="Username">
            <UserCircleIcon className="size-5" />
          </Input>
        )}
        <Input inputType="password" placeholder="Password">
          <KeyIcon className="size-5" />
        </Input>
        {repeat && (
          <Input inputType="password" placeholder="Repeat">
            <KeyIcon className="size-5" />
          </Input>
        )}
        <button className="btn btn-primary text-base font-medium">{buttonText}</button>
      </div>
      <div className="flex flex-row justify-center">
        <p className="text-[12px] text-center">{children}</p>
      </div>
    </div>
  );
}

function Input({
  children,
  inputType,
  placeholder,
}: {
  children: React.ReactNode;
  inputType: string;
  placeholder: string;
}) {
  return (
    <label className="input input-bordered flex items-center gap-2">
      {children}
      <input type={inputType} className="grow" placeholder={placeholder} />
    </label>
  );
}
