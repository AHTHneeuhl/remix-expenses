import { useNavigate } from "@remix-run/react";
import ExpenseForm from "~/components/expenses/ExpenseForm";
import Modal from "~/components/util/Modal";

const ExpensePage: React.FC = () => {
  const navigate = useNavigate();
  const closeHandler = () => {
    navigate("..");
  };

  return (
    <Modal onClose={closeHandler}>
      <ExpenseForm />
    </Modal>
  );
};

export default ExpensePage;
