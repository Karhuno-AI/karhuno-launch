import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const cardData = [
  {
    title: "Active Clients",
    value: "24",
    subtitle: "+2 this week",
  },
  {
    title: "New Requests",
    value: "8",
    subtitle: "3 due this week",
  },
  {
    title: "Regular Clients",
    value: "16",
    subtitle: "6 due today",
  },
  {
    title: "Revenue",
    value: "$12,580",
    subtitle: "this month",
  },
]

export default function  DashboardCards() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {cardData.map((item, index) => (
        <Card key={index} className="shadow-sm">
          <CardHeader>
            <CardTitle className="text-muted-foreground text-sm font-medium">
              {item.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-semibold">{item.value}</div>
            <p className="text-xs text-muted-foreground">{item.subtitle}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
