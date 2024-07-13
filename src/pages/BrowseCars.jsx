import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const BrowseCars = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Browse Cars</h1>
      <div className="flex gap-2 mb-4">
        <Input placeholder="Search cars..." className="flex-grow" />
        <Button>Search</Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Car listings will be added here */}
      </div>
    </div>
  );
};

export default BrowseCars;