
import { useEffect, useState } from "react";
import API from "./api";

export default function Dashboard() {
  console.log("DASHBOARD COMPONENT RENDERED");
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    fetchCustomers();
  }, []);

  const fetchCustomers = async () => {
    try {
      const res = await API.get("/customers/");
      setCustomers(res.data);
    } catch {
      alert("Not authorized");
    }
  };

  return (
    <div>
      <h2>Customers</h2>
      {customers.map((c) => (
        <div key={c.id}>
          {c.name} - {c.email}
        </div>
      ))}
    </div>
  );
}