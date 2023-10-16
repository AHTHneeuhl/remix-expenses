import ExpenseForm from "~/components/expenses/ExpenseForm";
import Modal from "~/components/util/Modal";

const ExpensePage: React.FC = () => {
  return (
    <Modal>
      <ExpenseForm />
    </Modal>
  );
};

export default ExpensePage;
