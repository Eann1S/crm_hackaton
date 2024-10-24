import MainPagesLayout from "../../../../components/layout/MainPagesLayout";

export default function Request() {
  return (
    <MainPagesLayout title="Создание запроса">
      <div className="flex flex-col w-[760px] h-[760px] shadow rounded-xl px-2 py-9 gap-3 items-center">
        <div className="flex flex-row justify-center">
          <h1 className="text-2xl font-medium text-center">
            Пожалуйста напишите подробно ваш запрос
          </h1>
        </div>
        <div className="flex flex-col h-full w-[520px] items-center p-3 gap-8">
          <input
            className="input input-lg w-full min-h-12 bg-neutral"
            type="text"
            placeholder="Ваше имя"
          />
          <textarea
            className="textarea textarea-lg w-full h-full bg-neutral"
            placeholder="Ваш запрос"
          />
          <div className="w-full">
            <button className="btn btn-primary w-full text-2xl font-normal">Отправить</button>
          </div>
        </div>
      </div>
    </MainPagesLayout>
  );
}
