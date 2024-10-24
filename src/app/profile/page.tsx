import {
  ArrowPathIcon,
  CheckCircleIcon,
  XCircleIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import { auth } from "../../../auth";
import { orders, Roles } from "../../utils/constants";
import { OrderType } from "@/utils/types";

export default async function Profile() {
  const session = await auth();
  if (!session) return null;
  
  const { user } = session;
  const { firstname, lastname, role } = user;
  
  const showOrders = role === Roles.USER;
  const fullName = firstname && lastname ? `${firstname} ${lastname}` : 'Аноним';
  return (
    <div className="flex flex-col w-full h-full px-8">
      <div className="flex flex-col justify-start gap-2 py-10">
        <h1 className="text-3xl font-bold">Мой профиль</h1>
        <div>
          <button className="btn btn-primary px-5 font-normal">
            Редактировать профиль
          </button>
        </div>
      </div>
      <div className="flex flex-row justify-center">
        <h1 className="text-2xl font-medium">{fullName}</h1>
      </div>
      <div className="flex flex-col gap-2">
        <div className="avatar flex flex-row justify-center">
          <div className="w-80 rounded-full">
            <Image
              width={500}
              height={500}
              src={"/avatar.png"}
              alt="profile image"
            />
          </div>
        </div>
        <div className="flex flex-row px-3 py-5 gap-2 shadow mx-auto">
          <div className="flex flex-col gap-5 px-4">
            <div className="flex flex-row justify-start">
              <h1 className="text-2xl font-semibold">Контактная информация</h1>
            </div>
            <div className="flex flex-col gap-5">
              <h1 className="text-lg font-normal">Компания - TLT PRO</h1>
              <h1 className="text-lg font-normal">
                Номер телефона - +79277239912
              </h1>
              <h1 className="text-lg font-normal">
                Страна проживания - Россия
              </h1>
              <h1 className="text-lg font-normal">Город - Тольятти</h1>
              <h1 className="text-lg font-normal">
                Электронная почта - {user.email || ""}
              </h1>
            </div>
          </div>
          {showOrders && (
            <>
              <div className="bg-black flex-none w-[1px]"></div>
              <div className="flex flex-col gap-5 px-4">
                <div className="flex flex-row justify-center">
                  <h1 className="text-2xl font-semibold">История заказов</h1>
                </div>
                <div className="flex flex-col gap-5">
                  {orders.map((order) => (
                    <OrderStatus key={order.id} order={order} />
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

const orderStatusConfig = {
  success: {
    color: "text-green-500",
    icon: <CheckCircleIcon className="w-5 inline text-green-600" />,
  },
  pending: {
    color: "text-yellow-200",
    icon: <ArrowPathIcon className="w-5 inline text-yellow-200" />,
  },
  cancel: {
    color: "text-red-500",
    icon: <XCircleIcon className="w-5 inline text-red-600" />,
  },
};

const OrderStatus = ({ order }: { order: OrderType }) => {
  const statusConfig = orderStatusConfig[order.status];

  return (
    <Order order={order}>
      <p className={`${statusConfig.color}`}>{order.status}</p>
      {statusConfig.icon}
    </Order>
  );
};

const Order = ({
  children,
  order,
}: {
  children: React.ReactNode;
  order: OrderType
}) => {
  return (
    <div className="flex flex-row gap-3" key={order.id}>
      <p className="font-medium text-lg">Заказ №{order.id}</p>
      {children}
    </div>
  );
};
