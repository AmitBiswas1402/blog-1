import Sidebar from "@/components/admin/Sidebar";

const Page = () => {
  return (
    <div className="flex">
      {/* Sidebar on the left */}
      <Sidebar />

      {/* Main content on the right */}
      <div className="flex-1 p-8 bg-gray-100 min-h-screen">
        <h1 className="text-2xl font-bold mb-4">Dashboard Content</h1>
        <p>This is where your main page content goes...</p>
      </div>
    </div>
  );
};

export default Page;
