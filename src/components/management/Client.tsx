import clsx from "clsx";
import Avatar from "../profile/Avatar";

export default function Client({
  name,
  projectName,
  isManager,
}: {
  name: string;
  projectName: string;
  isManager?: boolean;
}) {
  return (
    <div className="flex flex-col gap-3 justify-center items-center px-2 py-4 min-w-[280px] bg-primary bg-opacity-30 rounded-lg shadow">
      <div className="flex flex-row gap-4 items-center justify-between">
        <div className="w-10 flex flex-row justify-center">
          <Avatar />
        </div>
        <h1>{name}</h1>
        <div
          className={clsx([
            "rounded-full px-1 py-3 text-white",
            {
              "bg-primary bg-opacity-50": !isManager,
              "bg-gray-500": isManager,
            },
          ])}
        >
          {projectName}
        </div>
      </div>
      <button className="btn btn-sm btn-neutral font-normal rounded-full">
        Редактировать
      </button>
    </div>
  );
}
