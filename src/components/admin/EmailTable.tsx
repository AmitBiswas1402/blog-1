type EmailTableProps = {
  id: string;
  email: string;
  date: string;
  deleteEmail: (id: string) => void;
};

const EmailTable = ({ id, email, date, deleteEmail }: EmailTableProps) => {
  const EmailDate = new Date(date);
  return (
    <tr>
      <th>{email ? email : "No Mail"}</th>
      <td>{EmailDate.toDateString()}</td>
      <td
        className="px-6 py-4 text-red-500 cursor-pointer"
        onClick={() => deleteEmail(id)}
      >
        ✖
      </td>
    </tr>
  );
};
export default EmailTable;
