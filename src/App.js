import { Outlet, Link } from "react-router-dom";

export default function App() {
  return (
    <div>
      <nav className="navigation">
        <Link to="/invoices">Invoices</Link>|
        <Link to="/expenses">Expenses</Link>
      </nav>
      <Outlet />
    </div>
  );
}