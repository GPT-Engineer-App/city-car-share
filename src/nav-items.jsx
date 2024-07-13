import { Home, Car, List, MessageSquare, User } from "lucide-react";
import Index from "./pages/Index.jsx";
import BrowseCars from "./pages/BrowseCars.jsx";
import MyListings from "./pages/MyListings.jsx";
import Messages from "./pages/Messages.jsx";
import Profile from "./pages/Profile.jsx";

export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Browse Cars",
    to: "/browse",
    icon: <Car className="h-4 w-4" />,
    page: <BrowseCars />,
  },
  {
    title: "My Listings",
    to: "/listings",
    icon: <List className="h-4 w-4" />,
    page: <MyListings />,
  },
  {
    title: "Messages",
    to: "/messages",
    icon: <MessageSquare className="h-4 w-4" />,
    page: <Messages />,
  },
  {
    title: "Profile",
    to: "/profile",
    icon: <User className="h-4 w-4" />,
    page: <Profile />,
  },
];