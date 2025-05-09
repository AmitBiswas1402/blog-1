"use client";

import EmailTable from "@/components/admin/EmailTable";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

interface EmailType {
  _id: string;
  email: string;
  date: string;
}

const Subs = () => {
  const [emails, setEmails] = useState<EmailType[]>([]);

  const fetchEmails = async () => {
    try {
      const response = await axios.get("/api/email");
      if (response.data && Array.isArray(response.data.emails)) {
        setEmails(response.data.emails);
      } else {
        console.error("Unexpected response format:", response.data);
      }
    } catch (error) {
      console.error("Failed to fetch emails:", error);
    }
  };
  
  const deleteEmail = async (id: string) => {
    try {
      await axios.delete(`/api/email/${id}`);
      setEmails((prev) => prev.filter((email) => email._id !== id));
      toast.success("Email succesfully Deleted")
    } catch (error) {
      console.error("Failed to delete email:", error);
      toast.error("Failed to delete email")
    }
  };

  useEffect(() => {
    fetchEmails();
  }, []);

  return (
    <div className="min-h-screen py-10 px-4">
      <h1 className="text-3xl font-bold text-center mb-8 text-white">
        All Subscriptions
      </h1>
      <div className="max-h-[70vh] overflow-y-auto overflow-x-auto shadow-lg rounded-lg custom-scroll">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="sticky top-0 z-10 bg-blue-600 text-white">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider">
                Email
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider">
                Date
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {emails.map((email) => (
              <EmailTable
                key={email._id}
                id={email._id}
                email={email.email}
                date={email.date}
                deleteEmail={deleteEmail}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Subs;
