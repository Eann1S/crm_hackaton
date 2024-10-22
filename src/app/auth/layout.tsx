export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="w-screen h-screen flex flex-col justify-center py-20">
      <div className="flex flex-none justify-center">
        <h1 className="text-6xl font-bold">
          MVP
        </h1>
      </div>
      <div className="flex flex-auto justify-center items-center p-[10px]">
        {children}
      </div>
    </main>
  );
}
