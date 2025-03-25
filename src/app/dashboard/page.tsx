import { DashboardCards } from "@/components/dashboard/DashboardCards";

export default function Home() {
  return (
    <div className="flex-1 pl-6 pr-12 pt-24 container max-w-none">
      <div className="space-y-6 p-6">
        <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
        <DashboardCards />
      </div>
      
    </div>
  );
}
