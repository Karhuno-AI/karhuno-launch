import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <div className="relative w-full max-w-md mb-4">
      <Search
        className="absolute left-3 top-2.5 text-muted-foreground"
        size={18}
      />
      <Input className="pl-10" placeholder="Search employees..." />
    </div>
  );
}
