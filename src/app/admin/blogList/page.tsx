import BlogTable from "@/components/admin/BlogTable";

const blogList = () => {
  return (
    <div className="min-h-screen py-10 px-4">
      <h1 className="text-3xl font-bold text-center mb-8 text-white">
        All Blogs
      </h1>
      <div className="overflow-x-auto shadow-lg rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider">
                Author Name
              </th>
              <th scope="col" className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider">
                Blog Title
              </th>
              <th scope="col" className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider">
                Date
              </th>
              <th scope="col" className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {/* <BlogTable /> */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default blogList;
