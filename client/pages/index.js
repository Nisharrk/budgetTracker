import AddBudgetButton from "@/src/components/body/addBudgetButton";
import BudgetEntries from "@/src/components/body/BudgetEntries";
import Balance from "@/src/components/body/balance";
import DoughnutChart from "@/src/components/body/doughnutChart";

const Home = () => {
  return (
    <div className="flex">
      <div className="w-1/2">
        <Balance />
        <BudgetEntries />
        <AddBudgetButton />
      </div>
      <div className="w-1/2">{/* <DoughnutChart /> */}</div>
    </div>
  );
};

export default Home;
