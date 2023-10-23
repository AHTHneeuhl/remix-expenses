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

export const loader = () => {
  return dummyExpenses;
};
