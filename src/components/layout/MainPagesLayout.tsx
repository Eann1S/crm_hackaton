export default function MainPagesLayout({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col w-full h-full p-2 gap-2 items-center">
      <div className="flex flex-row w-full justify-start py-8 px-2">
        <h1 className="text-4xl font-medium">{title}</h1>
      </div>
      {children}
    </div>
  );
}
