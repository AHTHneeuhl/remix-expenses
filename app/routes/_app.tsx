import { type LinksFunction } from "@remix-run/node";
import { Outlet } from "@remix-run/react";

import ExpensesHeader from "~/components/navigation/ExpensesHeader";
import expensesStyles from "~/styles/expenses.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: expensesStyles },
];

const ExpensesAppLayout: React.FC = () => {
  return (
    <>
      <ExpensesHeader />
      <Outlet />
    </>
  );
};

export default ExpensesAppLayout;
