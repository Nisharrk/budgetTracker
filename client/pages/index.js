import AddBudgetEntry from "@/src/components/body/addBudgetEntry";
import BudgetEntries from "@/src/components/body/BudgetEntries";

const Home = () => {
  return (
    <div>
      <div className="w-1/2">
        <BudgetEntries />
        <AddBudgetEntry />
      </div>
    </div>
  );
};

export default Home;
