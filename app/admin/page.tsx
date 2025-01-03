import Image from "next/image";
import Link from "next/link";

import { StatCard } from "@/components/StatCard";
import { columns } from "@/components/table/columns";
import { DataTable } from "@/components/table/DataTable";
import { getRecentAppointmentList } from "@/lib/actions/appointment.actions";

const AdminPage = async () => {
  const appointments = await getRecentAppointmentList();

  const stats = {
    scheduledCount: appointments?.scheduledCount ?? 0,
    pendingCount: appointments?.pendingCount ?? 0,
    cancelledCount: appointments?.cancelledCount ?? 0,
    documents: appointments?.documents ?? [],
  };

  return (
    <div className="mx-auto flex max-w-7xl flex-col space-y-14">
      <header className="admin-header">
        <Link href="/" className="cursor-pointer">
          <Image
            src="/assets/icons/logo-full.svg"
            height={32}
            width={162}
            alt="logo"
            className="h-8 w-fit"
          />
        </Link>

        <p className="text-16-semibold">Painel de Adm.</p>
      </header>

      <main className="admin-main">
        <section className="w-full space-y-4">
          <h1 className="header">Bem-vindo 👋</h1>
          <p className="text-dark-700">
            Comece o dia gerenciando novos agendamentos
          </p>
        </section>

        <section className="admin-stat">
          <StatCard
            type="appointments"
            count={stats.scheduledCount}
            label="Consultas agendadas"
            icon={"/assets/icons/appointments.svg"}
          />
          <StatCard
            type="pending"
            count={stats.pendingCount}
            label="Consultas pendentes"
            icon={"/assets/icons/pending.svg"}
          />
          <StatCard
            type="cancelled"
            count={stats.cancelledCount}
            label="Consultas canceladas"
            icon={"/assets/icons/cancelled.svg"}
          />
        </section>

        <DataTable columns={columns} data={stats.documents} />
      </main>
    </div>
  );
};

export default AdminPage;
