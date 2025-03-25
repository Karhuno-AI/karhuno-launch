import  CompanyInfoCard  from "@/components/dashboard/CompanyInfoCard";
import  PrimaryContactCard  from "@/components/dashboard/PrimaryContactCard";
import  AccountSummaryCard  from "@/components/dashboard/AccountSummaryCard";
import  ReportsHistoryTable  from "@/components/dashboard/ReportsHistoryTable";

export default function Home() {
  return (
    <div className="flex-1 pl-6 pr-12 pt-24 container max-w-none">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6">
        <div className="space-y-3">
            <CompanyInfoCard />
            <AccountSummaryCard />
        </div>
        <div className="space-y-3">
            <PrimaryContactCard />
            <ReportsHistoryTable />
        </div>
      </div>
    </div>
  );
}
