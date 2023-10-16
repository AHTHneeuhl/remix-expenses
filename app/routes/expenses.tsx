import { type LinksFunction } from "@remix-run/node";
import { Outlet } from "@remix-run/react";

import ExpensesList from "~/components/expenses/ExpensesList";
import expensesStyles from "~/styles/expenses.css";

const dummyExpenses = [
  {
    id: "e1",
    title: "First Expenses",
    amount: 12.99,
    date: new Date().toISOString(),
  },
  {
    id: "e2",
    title: "Second Expenses",
    amount: 24.99,
    date: new Date().toISOString(),
  },
];

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: expensesStyles },
];

const ExpensesLayout: React.FC = () => {
  return (
    <>
      <Outlet />
      <main>
        <ExpensesList expenses={dummyExpenses} />
      </main>
    </>
  );
};

export default ExpensesLayout;
