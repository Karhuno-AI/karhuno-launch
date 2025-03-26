export default function DashboardHeader() {
    return (
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground text-sm">
            Manage employee salary information
          </p>
        </div>
        <div className="flex gap-2">
          <button className="border border-muted rounded-md px-4 py-1">
            Upgrade Subscription
          </button>
          <button className="bg-primary text-white px-4 py-1 rounded-full shadow-md">
            + Add New ICP
          </button>
        </div>
      </div>
    );
  };
  