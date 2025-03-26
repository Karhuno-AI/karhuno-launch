import CompanyInfoCard from "@/components/dashboard/admin/CompanyInfoCard";
import PrimaryContactCard from "@/components/dashboard/admin/PrimaryContactCard";
import AccountSummaryCard from "@/components/dashboard/admin/AccountSummaryCard";
import ReportsHistoryTable from "@/components/dashboard/admin/ReportsHistoryTable";

export default function Home() {
  return (
    <div className="flex-1 pl-6 pr-12 pt-24 container max-w-none">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6">
        <div className="space-y-3">
          <CompanyInfoCard />
          <PrimaryContactCard />
        </div>
        <div className="space-y-3">
          <AccountSummaryCard />
          <ReportsHistoryTable />
        </div>
      </div>
    </div>
  );
}
