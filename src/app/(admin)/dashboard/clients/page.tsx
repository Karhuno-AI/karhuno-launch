import DashboardHeader from "@/components/dashboard/customer/DashboardHeader";
import QuickActions from "@/components/dashboard/customer/QuickActions";
import SearchBar from "@/components/dashboard/customer/SearchBar";
import EmployeeTable from "@/components/dashboard/customer/EmployeeTable";

export default function page() {
  return (
    <section className="flex-1 pl-6 pr-12 pt-24 container max-w-none">
      <div className="grid grid-cols-1 lg:grid-cols-1 gap-6 p-6">
        <DashboardHeader />
        <QuickActions />
        <SearchBar />
        <EmployeeTable />
      </div>
    </section>
  );
}
