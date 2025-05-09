import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";

const Header = () => {
  const [email, setEmail] = useState("");

  interface FormResponse {
    success: boolean;
    message: string;
  }

  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
  e.preventDefault();

  if (!email) {
    toast.error("Email is required!");
    return;
  }

  try {
    const formData = new FormData();
    formData.append("email", email);

    const response = await axios.post<FormResponse>('/api/email', formData);
    
    if (response.data.success) {
      toast.success(response.data.message);
      setEmail("");
    } else {
      toast.error(response.data.message || "Something went wrong");
    }
  } catch (error: any) {
    toast.error(error?.response?.data?.message || "Server error");
  }
};


  return (
    <>
      {/* Header */}
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid fugit
          vero quidem! Consectetur, reiciendis soluta!
        </p>

        {/* Subscribe Form */}
        <form
          onSubmit={onSubmitHandler}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="px-5 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 w-74 sm:w-96"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white text-xl px-6 py-3 rounded-lg hover:bg-blue-700 transition cursor-pointer"
          >
            Subscribe
          </button>
        </form>
      </div>
    </>
  );
};

export default Header;
