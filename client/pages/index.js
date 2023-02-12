import AddBudgetButton from "@/src/components/body/addBudgetButton";
import BudgetEntries from "@/src/components/body/BudgetEntries";

const Home = () => {
  return (
    <div>
      <div className="w-1/2">
        <BudgetEntries />
        <AddBudgetButton />
      </div>
    </div>
  );
};

export default Home;
