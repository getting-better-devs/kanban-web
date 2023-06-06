import { Header } from "@/components/Layout/Header";
import { Sidebar } from "@/components/Layout/Sidebar";

export const metadata = {
  title: "Boards",
  description: "Developed by Getting Better ORG",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section className="h-screen">
      <div className="flex h-full">
        <Sidebar />

        <div className="w-full">
          <Header />
          <main className="min-h-[calc(100%-96px)]">{children}</main>
        </div>
      </div>
    </section>
  );
}
