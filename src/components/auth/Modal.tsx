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
    <div className="flex flex-col justify-between w-[375px] h-[650px] px-[40px] py-[50px] rounded-[20px] bg-white shadow-xl">
      <div className="flex flex-row justify-center text-center">
        <h1 className="text-[32px]">{title}</h1>
      </div>
      <div className="flex flex-col justify-center gap-[35px]">
        <Input inputType="text" placeholder="Email">
          <EnvelopeIcon className="size-5 text-slate-900" />
        </Input>
        {username && (
          <Input inputType="text" placeholder="Username">
            <UserCircleIcon className="size-5 text-slate-900" />
          </Input>
        )}
        <Input inputType="password" placeholder="Password">
          <KeyIcon className="size-5 text-slate-900" />
        </Input>
        {repeat && (
          <Input inputType="password" placeholder="Repeat">
            <KeyIcon className="size-5 text-slate-900" />
          </Input>
        )}
        <button className="btn btn-primary text-base">{buttonText}</button>
      </div>
      <div className="flex flex-row justify-center">
        <p className="text-[12px]">{children}</p>
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
    <label className="input input-bordered flex items-center gap-2 bg-[#E9DCDC]">
      {children}
      <input type={inputType} className="grow" placeholder={placeholder} />
    </label>
  );
}
