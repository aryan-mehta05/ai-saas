import { UserButton } from "@clerk/nextjs";

import { MobileSidebar } from "@/components/mobile-sidebar";

// TODO: Add the remaining parts

const Navbar = async () => {
  return ( 
    <div className="flex items-center p-4">
      <MobileSidebar />
      <div className="flex w-full justify-end">
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
};

export default Navbar;