import { Badge } from "@/components/ui/badge";

export default function ReportsHistoryTable() {
  const reports = [
    {
      name: "Q4 Lead Generation Report",
      date: "28.11.2023",
      type: "Leads",
      data: "35 contacts, 12 companies, 95 signals",
    },
    {
      name: "Healthcare Sector Analysis",
      date: "15.10.2023",
      type: "Analysis",
      data: "48 contacts, 15 companies, 120 signals",
    },
    {
      name: "Financial Services Leads",
      date: "22.09.2023",
      type: "Leads",
      data: "52 contacts, 18 companies, 145 signals",
    },
    {
      name: "Technology Sector Update",
      date: "30.08.2023",
      type: "Analysis",
      data: "28 contacts, 10 companies, 85 signals",
    },
  ];

  return (
    <div className="border rounded-lg p-6 space-y-4">
      <h2 className="text-xl font-semibold">Reports History</h2>
      <table className="w-full text-sm">
        <thead className="text-muted-foreground border-b">
          <tr>
            <th className="text-left py-2">Report Name</th>
            <th className="text-left py-2">Date</th>
            <th className="text-left py-2">Type</th>
            <th className="text-left py-2">Data</th>
          </tr>
        </thead>
        <tbody>
          {reports.map((report, idx) => (
            <tr key={idx} className="border-b last:border-none">
              <td className="py-2">{report.name}</td>
              <td className="py-2">{report.date}</td>
              <td className="py-2">
                <Badge variant="outline">{report.type}</Badge>
              </td>
              <td className="py-2">{report.data}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
