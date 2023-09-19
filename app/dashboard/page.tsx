import CalorieIntakeHistory from "./_components/CalorieIntakeHistory";
import CaloriePlans from "./_components/CaloriePlans";
import CurrentlyUsedPlan from "./_components/CurrentlyUsedPlan";
import WeightHistory from "./_components/WeightHistory";

function Dashboard() {
  return (
    <main className="p-4">
      <div className="space-y-4">
        <CurrentlyUsedPlan />
        <CaloriePlans />
        <CalorieIntakeHistory />
        <WeightHistory />
      </div>
    </main>
  );
}

export default Dashboard;
