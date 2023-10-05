import { Outlet } from "@remix-run/react";

const ExpensesLayout: React.FC = () => {
  return (
    <main>
      <p>Shared Page</p>
      <Outlet />
    </main>
  );
};

export default ExpensesLayout;
