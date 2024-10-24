import {
  ArrowPathIcon,
  ChatBubbleLeftEllipsisIcon,
  CheckCircleIcon,
  XCircleIcon,
} from "@heroicons/react/24/outline";
import MainPagesLayout from "../../../../../components/layout/MainPagesLayout";

export default function ProjectsManagement() {
  return (
    <MainPagesLayout title="Управление проектами">
      <div className="grid grid-cols-3 gap-6">
        {projects.map((project) => (
          <Project key={project.id} {...project} />
        ))}
      </div>
    </MainPagesLayout>
  );
}

const projects = [
  {
    id: "1",
    title: "CRM/ERP система",
    date: "20.10.2024 - 25.10.2024",
    description:
      "Мы, компания Название компании, ищем партнера для разработки интегрированной CRM и ERP системы, которая поможет нам оптимизировать бизнес-процессы, улучшить взаимодействие с клиентами и повысить общую эффективность работы.",
    icon: <CheckCircleIcon className="w-6 inline text-green-400" />,
  },
  {
    id: "2",
    title: "CRM/ERP система",
    date: "20.10.2024 - 22.10.2024",
    description:
      "Мы, компания Название компании, ищем партнера для разработки интегрированной CRM и ERP системы, которая поможет нам оптимизировать бизнес-процессы, улучшить взаимодействие с клиентами и повысить общую эффективность работы.",
    icon: <ArrowPathIcon className="w-5 inline text-yellow-200" />,
  },
  {
    id: "3",
    title: "CRM/ERP система",
    date: "01.09.2024 - 22.09.2024",
    description:
      "Мы, компания Название компании, ищем партнера для разработки интегрированной CRM и ERP системы, которая поможет нам оптимизировать бизнес-процессы, улучшить взаимодействие с клиентами и повысить общую эффективность работы.",
    icon: <CheckCircleIcon className="w-6 inline text-green-400" />,
  },
  {
    id: "4",
    title: "CRM/ERP система",
    date: "30.10.2024 - 01.12.2024",
    description:
      "Мы, компания Название компании, ищем партнера для разработки интегрированной CRM и ERP системы, которая поможет нам оптимизировать бизнес-процессы, улучшить взаимодействие с клиентами и повысить общую эффективность работы.",
    icon: <XCircleIcon className="w-5 inline text-red-600" />,
  },
  {
    id: "5",
    title: "CRM/ERP система",
    date: "21.09.2024 - 12.10.2024",
    description:
      "Мы, компания Название компании, ищем партнера для разработки интегрированной CRM и ERP системы, которая поможет нам оптимизировать бизнес-процессы, улучшить взаимодействие с клиентами и повысить общую эффективность работы.",
    icon: <XCircleIcon className="w-5 inline text-red-600" />,
  },
];

function Project({
  title,
  date,
  description,
  icon,
}: {
  title: string;
  date: string;
  description: string;
  icon: any;
}) {
  return (
    <div className="flex flex-col justify-center rounded-lg shadow w-[420px]">
      <div className="px-3 py-4 bg-neutral rounded-t-lg">
        <div className="flex flex-col items-center justify-center rounded-3xl bg-primary bg-opacity-70">
          <h1 className="text-xl font-medium text-white">
            {title} {icon}
          </h1>
          <h1 className="text-base font-extralight text-white">{date}</h1>
        </div>
      </div>
      <div className="flex flex-col justify-between min-h-[320px] px-8 py-6 bg-primary bg-opacity-40 rounded-b-lg">
        <h1 className="text-lg font-normal">{description}</h1>
        <div className="flex flex-row justify-center gap-5">
          <button className="btn btn-primary text-xs font-light">
            Назначить команду
          </button>
          <ChatBubbleLeftEllipsisIcon className="w-8" />
          <button className="btn btn-neutral grow text-xs font-light">
            Редактировать
          </button>
        </div>
      </div>
    </div>
  );
}
