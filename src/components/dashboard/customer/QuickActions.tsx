export default function QuickActions() {
  const actions = ["ICP1", "ICP2", "ICP3"];
  return (
    <div className="grid grid-cols-3 gap-4 mb-6">
      {actions.map((label) => (
        <button
          key={label}
          className="bg-muted text-primary font-semibold py-2 px-4 rounded-md"
        >
          {label}
        </button>
      ))}
    </div>
  );
}
