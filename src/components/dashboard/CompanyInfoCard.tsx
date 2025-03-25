import { Badge } from "@/components/ui/badge";

export default function CompanyInfoCard() {
    return (
        <div className="border rounded-lg p-6 space-y-4">
          <h2 className="text-xl font-semibold">Company Information</h2>
          <div>
            <div className="font-medium">
              Acme Corp{" "}
              <span className="text-sm text-muted-foreground ml-2">Active</span>
            </div>
            <div className="text-sm text-muted-foreground">SaaS</div>
            <a href="https://www.acmecorp.com" className="text-primary text-sm">
              www.acmecorp.com
            </a>
          </div>
          <p className="text-sm text-muted-foreground">
            Acme Corp is a leading SaaS provider specializing in project management
            solutions for enterprise clients...
          </p>
          <div className="text-sm space-y-1">
            <div>
              Email:{" "}
              <a href="mailto:contact@acmecorp.com" className="text-primary">
                contact@acmecorp.com
              </a>
            </div>
            <div>Team Size: 100-500</div>
            <div>Client Since: 2023-09-10</div>
            <div>Annual Revenue: $10M - $50M</div>
          </div>
          <div className="space-y-1">
            <div className="text-sm font-medium">Target Markets:</div>
            <div className="flex gap-2 flex-wrap">
              <Badge>Healthcare</Badge>
              <Badge>Financial Services</Badge>
              <Badge>Technology</Badge>
            </div>
            <div className="text-sm font-medium pt-2">Tags:</div>
            <div className="flex gap-2 flex-wrap">
              <Badge>Enterprise</Badge>
              <Badge>High Priority</Badge>
              <Badge>Custom Package</Badge>
            </div>
          </div>
        </div>
      );

}


