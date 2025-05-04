const Navbar = () => {
  return (
    <>
      {/* Navbar */}
      <div className="flex justify-between items-center px-10 py-6 shadow-md">
        <div className="text-2xl font-bold text-gray-100">Logo</div>
        <div>
          <button className="bg-blue-600 text-white px-5 py-2 rounded-lg text-lg hover:bg-blue-700 transition">
            Get Started
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <div className="text-center mt-20 px-4">
        <h1 className="text-5xl font-bold text-gray-100 mb-6">Blogs</h1>
        <p className="text-gray-200 max-w-2xl mx-auto mb-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid fugit vero quidem! Consectetur, reiciendis soluta!
        </p>

        {/* Subscribe Form */}
        <form className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-5 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 w-74 sm:w-96"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white text-xl px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Subscribe
          </button>
        </form>
      </div>
    </>
  );
};

export default Navbar;
