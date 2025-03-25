'use client'

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const trialRequests = [
  {
    company: "Global Partners",
    industry: "Retail",
    submitted: "6 days ago",
    due: "-483 days",
    status: "In Progress",
  },
  {
    company: "TechSolutions Ltd",
    industry: "FinTech",
    submitted: "4 days ago",
    due: "-482 days",
    status: "In Progress",
  },
  {
    company: "InnovateCo",
    industry: "Healthcare",
    submitted: "5 days ago",
    due: "-481 days",
    status: "Pending",
  },
]

export default function TrialRequestsCard() {
  return (
    <Card className="w-full">
      <CardContent className="space-y-4 p-4">
        <div>
          <h2 className="text-lg font-semibold">New Trial Requests</h2>
          <p className="text-sm text-muted-foreground">
            First-time clients awaiting their trial reports
          </p>
        </div>
        {trialRequests.map((item, idx) => (
          <div key={idx} className="border rounded-md bg-muted p-4 flex items-start justify-between">
            <div>
              <h3 className="font-medium">{item.company}</h3>
              <p className="text-sm text-muted-foreground">{item.industry} • Submitted {item.submitted}</p>
              <p className="text-sm text-muted-foreground mt-1">🕒 Due in {item.due}</p>
            </div>
            <Button variant="outline" size="sm">{item.status}</Button>
          </div>
        ))}
        <Button variant="ghost" className="w-full">View All Trial Requests</Button>
      </CardContent>
    </Card>
  )
}
