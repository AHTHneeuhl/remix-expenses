import { Outlet } from "@remix-run/react";

import ExpensesList from "~/components/expenses/ExpensesList";

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
