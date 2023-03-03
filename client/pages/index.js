import AddBudgetButton from "@/src/components/body/addBudgetButton";
import BudgetEntries from "@/src/components/body/BudgetEntries";
import Balance from "@/src/components/body/balance";
import DoughnutChart from "@/src/components/body/doughnutChart";
import MonthFilter from "@/src/components/body/MonthFilter";

const Home = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center">
      <div className="w-full md:w-1/2">
        <Balance />
        <BudgetEntries />
        <AddBudgetButton />
        <MonthFilter />
      </div>
      <div className="w-full md:w-1/2 md:pl-4">
        <DoughnutChart />
      </div>
    </div>
  );
};

export default Home;
