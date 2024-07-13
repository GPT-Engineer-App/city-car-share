import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Profile = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Profile</h1>
      <div className="max-w-md mx-auto">
        <div className="mb-4">
          <img
            src="/placeholder.svg"
            alt="Profile"
            className="w-32 h-32 rounded-full mx-auto"
          />
        </div>
        <form className="space-y-4">
          <Input placeholder="Name" />
          <Input placeholder="Email" type="email" />
          <Button className="w-full">Update Profile</Button>
        </form>
      </div>
    </div>
  );
};

export default Profile;