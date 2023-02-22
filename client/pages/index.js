import AddBudgetButton from "@/src/components/body/addBudgetButton";
import BudgetEntries from "@/src/components/body/BudgetEntries";
import Balance from "@/src/components/body/balance";

const Home = () => {
  return (
    <div className="flex">
      <div className="w-1/2">
        <BudgetEntries />
        <AddBudgetButton />
      </div>
      <div className="w-1/2">
        <Balance />
      </div>
    </div>
  );
};

export default Home;
