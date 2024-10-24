import { CheckCircleIcon } from "@heroicons/react/24/outline";
import MainPagesLayout from "../../../../../components/layout/MainPagesLayout";

export default function ReportsManagement() {
  return (
    <MainPagesLayout title="Управление отчетами">
      <div className="grid grid-cols-5 gap-x-6 gap-y-16">
        {projects.map((project) => (
          <Project key={project.number} {...project} />
        ))}
      </div>
    </MainPagesLayout>
  );
}

function Project({
  number,
  date,
  icon,
}: {
  number: string;
  date: string;
  icon: any;
}) {
  return (
    <div className="flex flex-col gap-2 justify-center items-center px-4 py-4 rounded-xl bg-neutral bg-opacity-60">
      <div className="flex flex-row px-12 py-2 justify-center gap-3 items-center bg-primary bg-opacity-50 rounded-full">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-white">Отчёт №{number}</h1>
          <h1 className="text-neutral text-opacity-70">{date}</h1>
        </div>
        {icon}
      </div>
      <button className="btn btn-sm bg-white font-normal rounded-3xl shadow">
        Редактировать
      </button>
    </div>
  );
}

const projects = [
  {
    number: "1",
    date: "20.10.2024",
    icon: <CheckCircleIcon className="w-8 text-green-400" />,
  },
  {
    number: "2",
    date: "20.10.2024",
    icon: <CheckCircleIcon className="w-8 text-green-400" />,
  },
  {
    number: "3",
    date: "20.10.2024",
    icon: <CheckCircleIcon className="w-8 text-green-400" />,
  },
  {
    number: "4",
    date: "20.10.2024",
    icon: <CheckCircleIcon className="w-8 text-green-400" />,
  },
  {
    number: "5",
    date: "20.10.2024",
    icon: <CheckCircleIcon className="w-8 text-green-400" />,
  },
  {
    number: "6",
    date: "20.10.2024",
    icon: <CheckCircleIcon className="w-8 text-green-400" />,
  },
  {
    number: "7",
    date: "20.10.2024",
    icon: <CheckCircleIcon className="w-8 text-green-400" />,
  },
  {
    number: "8",
    date: "20.10.2024",
    icon: <CheckCircleIcon className="w-8 text-green-400" />,
  },
  {
    number: "9",
    date: "20.10.2024",
    icon: <CheckCircleIcon className="w-8 text-green-400" />,
  },
  {
    number: "10",
    date: "20.10.2024",
    icon: <CheckCircleIcon className="w-8 text-green-400" />,
  },
  {
    number: "11",
    date: "20.10.2024",
    icon: <CheckCircleIcon className="w-8 text-green-400" />,
  },
  {
    number: "12",
    date: "20.10.2024",
    icon: <CheckCircleIcon className="w-8 text-green-400" />,
  },
  {
    number: "13",
    date: "20.10.2024",
    icon: <CheckCircleIcon className="w-8 text-green-400" />,
  },
  {
    number: "14",
    date: "20.10.2024",
    icon: <CheckCircleIcon className="w-8 text-green-400" />,
  },
  {
    number: "15",
    date: "20.10.2024",
    icon: <CheckCircleIcon className="w-8 text-green-400" />,
  },
];
