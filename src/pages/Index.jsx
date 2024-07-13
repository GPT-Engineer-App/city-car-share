import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="container mx-auto p-4">
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold mb-4">Welcome to CarShare</h1>
        <p className="text-xl mb-6">Share your car with others in your city</p>
        <Button size="lg">List Your Car</Button>
      </section>

      <section className="py-12">
        <h2 className="text-2xl font-semibold mb-6">Featured Listings</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Featured car listings will be added here */}
        </div>
      </section>

      <section className="py-12 bg-gray-100">
        <h2 className="text-2xl font-semibold mb-6 text-center">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-2">List Your Car</h3>
            <p>Create a listing for your car with details and availability.</p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-2">Get Bookings</h3>
            <p>Receive booking requests from interested renters.</p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-2">Earn Money</h3>
            <p>Get paid for sharing your car when you're not using it.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;