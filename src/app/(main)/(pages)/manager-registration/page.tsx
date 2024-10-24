import MainPagesLayout from "../../../../components/layout/MainPagesLayout";

export default function ManagerRegistration() {
  return (
    <MainPagesLayout title="Регистрация новых менеджеров">
      <div className="w-full h-full flex flex-row justify-center items-center">
        <div className="flex flex-col justify-start items-center py-9 px-2 gap-5 shadow w-[760px] h-[760px]">
          <div className="flex flex-row justify-center">
            <h1 className="text-2xl font-medium">Зарегистрировать менеджера</h1>
          </div>
          <div className="flex flex-col justify-center items-center w-full gap-8">
            <Input placeholder="Имя" />
            <Input placeholder="Фамилия" />
            <Input placeholder="Пол" />
            <Input placeholder="Город, страна" />
            <Input placeholder="Email" />
            <Input placeholder="Номер телефона" />
            <Input placeholder="Пароль от аккаунта" />
          </div>
          <button className="btn btn-primary btn-md w-full max-w-md text-white font-medium text-xl">
            Зарегистрировать
          </button>
        </div>
      </div>
    </MainPagesLayout>
  );
}

function Input({ placeholder }: { placeholder: string }) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className="input w-full max-w-md bg-neutral"
    />
  );
}
