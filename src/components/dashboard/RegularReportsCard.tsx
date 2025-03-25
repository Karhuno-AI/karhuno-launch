'use client'

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const regularReports = [
  {
    company: "MedicalAI Corp",
    industry: "Healthcare",
    frequency: "Weekly report",
    due: "Overdue by 487 days",
    status: "Preparing",
  },
  {
    company: "Enterprise Solutions",
    industry: "Enterprise",
    frequency: "Weekly report",
    due: "Due in -485 days",
    status: "Preparing",
  },
  {
    company: "FinancialForce",
    industry: "Finance",
    frequency: "Weekly report",
    due: "Due in -484 days",
    status: "Preparing",
  },
]

export default function RegularReportsCard() {
  return (
    <Card className="w-full">
      <CardContent className="space-y-4 p-4">
        <div>
          <h2 className="text-lg font-semibold">Regular Client Reports</h2>
          <p className="text-sm text-muted-foreground">
            Weekly reports due for paying clients
          </p>
        </div>
        {regularReports.map((item, idx) => (
          <div key={idx} className="border rounded-md bg-muted p-4 flex items-start justify-between">
            <div>
              <h3 className="font-medium">{item.company}</h3>
              <p className="text-sm text-muted-foreground">{item.industry} • {item.frequency}</p>
              <p className="text-sm text-muted-foreground mt-1">🕒 {item.due}</p>
            </div>
            <Button variant="outline" size="sm">{item.status}</Button>
          </div>
        ))}
        <Button variant="ghost" className="w-full">View All Regular Reports</Button>
      </CardContent>
    </Card>
  )
}
