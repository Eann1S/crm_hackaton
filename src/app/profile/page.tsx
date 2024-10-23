import {
  ArrowPathIcon,
  CheckCircleIcon,
  XCircleIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import { auth } from "../../../auth";
import { orders, Role } from "../../utils/constants";

export default async function Profile() {
  const session = await auth();
  if (!session) return null;
  const user = session.user;
  const showOrders = user.role === Role.USER;
  const fullName = (user.firstname && user.lastname) && user.firstname + ' ' + user.lastname || 'Аноним';
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
                  {orders.map((order) => {
                    switch (order.status) {
                      case "success":
                        return (
                          <SuccessOrder key={order.number} order={order} />
                        );
                      case "pending":
                        return (
                          <PendingOrder key={order.number} order={order} />
                        );
                      case "cancel":
                        return <CancelOrder key={order.number} order={order} />;
                    }
                  })}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

const SuccessOrder = ({
  order,
}: {
  order: {
    number: number;
    status: string;
  };
}) => {
  return (
    <Order order={order}>
      <p className="text-green-500">{order.status} </p>
      <CheckCircleIcon className="w-5 inline text-green-600" />
    </Order>
  );
};
const PendingOrder = ({
  order,
}: {
  order: {
    number: number;
    status: string;
  };
}) => {
  return (
    <Order order={order}>
      <p className="text-yellow-200">{order.status} </p>
      <ArrowPathIcon className="w-5 inline text-yellow-200" />
    </Order>
  );
};
const CancelOrder = ({
  order,
}: {
  order: {
    number: number;
    status: string;
  };
}) => {
  return (
    <Order order={order}>
      <p className="text-red-500">{order.status} </p>
      <XCircleIcon className="w-5 inline text-red-600" />
    </Order>
  );
};

const Order = ({
  children,
  order,
}: {
  children: React.ReactNode;
  order: {
    number: number;
    status: string;
  };
}) => {
  return (
    <div className="flex flex-row gap-3" key={order.number}>
      <p className="font-medium text-lg">Заказ №{order.number}</p>
      {children}
    </div>
  );
};
