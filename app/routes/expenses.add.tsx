import ExpenseForm from "~/components/expenses/ExpenseForm";
import Modal from "~/components/util/Modal";

const AddExpensePage: React.FC = () => {
  return (
    <Modal>
      <ExpenseForm />
    </Modal>
  );
};

export default AddExpensePage;
