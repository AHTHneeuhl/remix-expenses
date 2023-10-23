import { Link, Outlet } from "@remix-run/react";
import { FaPlus, FaDownload } from "react-icons/fa/index.js";

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
        <section id="expenses-actions">
          <Link to="add">
            <FaPlus />
            <span>Add Expense</span>
          </Link>
          <a href="/expenses/raw">
            <FaDownload />
            <span>Load Raw Data</span>
          </a>
        </section>
        <ExpensesList expenses={dummyExpenses} />
      </main>
    </>
  );
};

export default ExpensesLayout;
