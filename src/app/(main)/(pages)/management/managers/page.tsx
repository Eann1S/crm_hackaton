import MainPagesLayout from "../../../../../components/layout/MainPagesLayout";
import Client from "../../../../../components/management/Client";

export default function ManagersManagement() {
  return (
    <MainPagesLayout title={"Управление аккаунтами менеджеров"}>
      <div className="grid grid-cols-4 gap-x-6 gap-y-16">
        {managers.map((manager) => (
          <Client key={manager.id} isManager {...manager} />
        ))}
      </div>
    </MainPagesLayout>
  );
}

const managers = [
    { id: "1", name: "Анатолий", projectName: "CRM/ERP система" },
    { id: "2", name: "Анатолий", projectName: "CRM/ERP система" },
    { id: "3", name: "Анатолий", projectName: "CRM/ERP система" },
    { id: "4", name: "Анатолий", projectName: "CRM/ERP система" },
    { id: "5", name: "Анатолий", projectName: "CRM/ERP система" },
    { id: "6", name: "Анатолий", projectName: "CRM/ERP система" },
    { id: "7", name: "Анатолий", projectName: "CRM/ERP система" },
    { id: "8", name: "Анатолий", projectName: "CRM/ERP система" },
    { id: "9", name: "Анатолий", projectName: "CRM/ERP система" },
    { id: "10", name: "Анатолий", projectName: "CRM/ERP система" },
    { id: "11", name: "Анатолий", projectName: "CRM/ERP система" },
    { id: "12", name: "Анатолий", projectName: "CRM/ERP система" },
    { id: "13", name: "Анатолий", projectName: "CRM/ERP система" },
    { id: "14", name: "Анатолий", projectName: "CRM/ERP система" },
    { id: "15", name: "Анатолий", projectName: "CRM/ERP система" },
    { id: "16", name: "Анатолий", projectName: "CRM/ERP система" },
  ];
