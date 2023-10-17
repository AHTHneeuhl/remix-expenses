import { type LinksFunction } from "@remix-run/node";
import { Outlet } from "@remix-run/react";

import expensesStyles from "~/styles/expenses.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: expensesStyles },
];

const ExpensesAppLayout: React.FC = () => {
  return <Outlet />;
};

export default ExpensesAppLayout;
