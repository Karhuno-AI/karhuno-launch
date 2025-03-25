
export default function PrimaryContactCard() {
    return (
      <div className="border rounded-lg p-6 space-y-4 h-max">
        <h2 className="text-xl font-semibold">Primary Contact</h2>
        <div className="text-sm space-y-1">
          <div>John Smith</div>
          <div className="text-muted-foreground">CTO</div>
          <div>Email: <a href="mailto:john.smith@acmecorp.com" className="text-primary">john.smith@acmecorp.com</a></div>
          <div>Phone: +1 (555) 123-4567</div>
        </div>
      </div>
    );
  };
  