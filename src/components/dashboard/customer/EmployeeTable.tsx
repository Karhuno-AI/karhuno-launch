const employees = [
  {
    id: "01",
    name: "Amy Phrodite",
    initial: "A",
    amount: "$1,000",
    release: "$0",
    month: "09",
    status: "Active",
  },
  {
    id: "02",
    name: "Jaquelyn White",
    initial: "J",
    amount: "$100",
    release: "$0",
    month: "2024-09",
    status: "Active",
  },
  {
    id: "03",
    name: "Misha Lucy",
    initial: "M",
    amount: "$5,000",
    release: "$0",
    month: "2024-10",
    status: "Active",
  },
];

export default function EmployeeTable() {
  return (
    <div className="border rounded-xl overflow-x-auto">
      <table className="min-w-full table-auto text-sm">
        <thead className="bg-muted text-left">
          <tr>
            <th className="p-3">
              <input type="checkbox" />
            </th>
            <th className="p-3">SI</th>
            <th className="p-3">Employee Name</th>
            <th className="p-3">Amount</th>
            <th className="p-3">Release Amount</th>
            <th className="p-3">Salary Month</th>
            <th className="p-3">Status</th>
            <th className="p-3">Action</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp) => (
            <tr key={emp.id} className="border-t">
              <td className="p-3">
                <input type="checkbox" />
              </td>
              <td className="p-3">{emp.id}</td>
              <td className="p-3 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-muted flex items-center justify-center text-xs font-bold">
                  {emp.initial}
                </span>
                {emp.name}
              </td>
              <td className="p-3">{emp.amount}</td>
              <td className="p-3">{emp.release}</td>
              <td className="p-3">{emp.month}</td>
              <td className="p-3">
                <span className="bg-green-100 text-green-600 text-xs font-medium px-2 py-1 rounded">
                  {emp.status}
                </span>
              </td>
              <td className="p-3 text-right">⋮</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
