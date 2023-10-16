import { type LinksFunction } from "@remix-run/node";
import { Outlet } from "@remix-run/react";
import expensesStyles from "~/styles/expenses.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: expensesStyles },
];

const ExpensesLayout: React.FC = () => {
  return (
    <main>
      <p>Shared Page</p>
      <Outlet />
    </main>
  );
};

export default ExpensesLayout;
