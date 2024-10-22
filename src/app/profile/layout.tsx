import Sidebar from "../../components/profile/Sidebar";

export default async function ProfileLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="w-screen h-screen flex flex-row gap-2">
      <Sidebar />
      <div className="grow">{children}</div>
    </main>
  );
}
