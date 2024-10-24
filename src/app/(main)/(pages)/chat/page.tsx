import {
  ChevronLeftIcon,
  PaperAirplaneIcon,
  PaperClipIcon,
} from "@heroicons/react/24/outline";
import MainPagesLayout from "../../../../components/layout/MainPagesLayout";
import Avatar from "../../../../components/profile/Avatar";
import { auth } from "../../../../../auth";
import { Roles } from "../../../../utils/constants";

export default async function Chat() {
  const session = await auth();
  if (!session) return null;

  const user = session?.user;
  const isManager = user.role === Roles.MANAGER;

  const title = isManager ? "Чат с клиентом" : "Чат с менеджером";
  const { name, phoneNumber } = !isManager ? manager : client;

  return (
    <MainPagesLayout title={title}>
      <div className="flex flex-col px-4 w-[1120px] h-full justify-between shadow rounded-xl">
        <div className="flex flex-row justify-between items-center py-4">
          <button className="btn btn-ghost text-base">
            <ChevronLeftIcon className="w-5" />
            {"Выйти"}
          </button>
          <div className="flex flex-col justify-center">
            <h1 className="text-xl font-semibold text-center">
              {name}
            </h1>
            <h1 className="text-lg font-semibold text-center">{phoneNumber}</h1>
          </div>
          <div className="w-[52px]">
            <Avatar />
          </div>
        </div>
        <div className="flex flex-col py-5 gap-10">
          <div className="flex flex-col">
            <Message
              username={isManager ? 'Я' : name}
              message="Здравствуйте, я менеджер, чем могу вам помочь?"
              time="12:40"
            />
          </div>
          <div className="flex flex-col">
            <Message
              username={!isManager ? 'Я' : name}
              message="Здравствуйте, хотел бы сделать заказ..."
              time="12:46"
            />
          </div>
          <div className="flex flex-row gap-5">
            <PaperClipIcon className="w-10" />
            <input
              type="text"
              placeholder="Введите сообщение..."
              className="input input-bordered w-full"
            />
            <PaperAirplaneIcon className="w-10" />
          </div>
        </div>
      </div>
    </MainPagesLayout>
  );
}

function Message({
  username,
  message,
  time,
}: {
  username: string;
  message: string;
  time: string;
}) {
  return (
    <div className="chat chat-start">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <Avatar />
        </div>
      </div>
      <div className="chat-header">
        {username}
        <time className="px-1 text-xs opacity-50">{time}</time>
      </div>
      <div className="chat-bubble">{message}</div>
    </div>
  );
}

const client = {
  name: 'Клиент',
  phoneNumber: "+79371532644",
};
const manager = {
  name: 'Менеджер',
  phoneNumber: "+79371182721",
};
