import { UserButton } from "@clerk/nextjs";

const DashboardPage = () => {
  return (
    <div>
      Dashboard Page
      <UserButton afterSignOutUrl="/" />
    </div>
  );
};

export default DashboardPage;
