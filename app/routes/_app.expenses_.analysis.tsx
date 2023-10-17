import Chart from "~/components/expenses/Chart";
import ExpenseStatistics from "~/components/expenses/ExpenseStatistics";

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

const AnalysisPage: React.FC = () => {
  return (
    <main>
      <Chart expenses={dummyExpenses} />
      <ExpenseStatistics expenses={dummyExpenses} />
    </main>
  );
};

export default AnalysisPage;
