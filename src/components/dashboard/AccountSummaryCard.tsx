import { Badge } from "@/components/ui/badge";

export default function AccountSummaryCard() {
  return (
    <div className="border rounded-lg p-6 space-y-4 h-max">
      <h2 className="text-xl font-semibold">Account Summary</h2>
      <div className="text-sm text-muted-foreground space-y-1">
        <div>
          Subscription Plan: <Badge variant="secondary">Premium</Badge>
        </div>
        <div>Renews: 2023-12-31</div>
        <div>
          Credits Remaining: <strong>85</strong>
        </div>
        <div>Reports Delivered: 12</div>
        <div>Last Active: 2023-11-29</div>
      </div>
    </div>
  );
}
