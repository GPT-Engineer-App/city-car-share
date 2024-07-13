import { Button } from "@/components/ui/button";

const MyListings = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">My Listings</h1>
      <Button className="mb-4">Add New Listing</Button>
      <div className="space-y-4">
        {/* User's car listings will be added here */}
      </div>
    </div>
  );
};

export default MyListings;