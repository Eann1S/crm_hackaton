import MainPagesLayout from "../../../../components/layout/MainPagesLayout";
import Avatar from "../../../../components/profile/Avatar";

export default function Clients() {
  return (
    <MainPagesLayout title="Список клиентов">
      <div className="flex flex-col gap-32">
        <Client fullname="Иванов Иван Иванович" />
        <Client fullname="Иванов Иван Иванович" />
        <Client fullname="Иванов Иван Иванович" />
      </div>
    </MainPagesLayout>
  );
}

function Client({ fullname }: { fullname: string }) {
  return (
    <div className="flex flex-row gap-8 items-center">
      <div className="flex flex-row justify-center items-center gap-4 px-8 py-4 shadow rounded-2xl">
        <div className="w-10">
          <Avatar />
        </div>
        <h1 className="text-2xl font-medium text-center">{fullname}</h1>
      </div>
      <div className="flex flex-col justify-center">
        <div className="divider min-w-32"></div>
      </div>
      <div className="flex flex-col px-8 py-6 max-w-[720px] bg-neutral rounded-2xl">
        <h1 className="inline text-base font-normal">
          Компания Название компании ищет профессионального разработчика для
          создания интегрированной системы CRM и ERP, которая будет отвечать
          нашим бизнес-требованиям и способствовать росту и эффективности нашей
          организации.
        </h1>
      </div>
    </div>
  );
}
