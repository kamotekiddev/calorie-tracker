import CalorieConsumed from "./_components/CalorieConsumed";
import CalorieIntakeHistory from "./_components/CalorieIntakeHistory";
import CaloriePlans from "./_components/CaloriePlans";
import TargetCalorie from "./_components/TargetCalorie";
import WeightHistory from "./_components/WeightHistory";

function Dashboard() {
  return (
    <main className="p-8">
      <div className="space-y-10">
        <div className="flex flex-col md:flex-row gap-2">
          <TargetCalorie />
          <CalorieConsumed />
        </div>
        <CaloriePlans />
        <CalorieIntakeHistory />
        <WeightHistory />
      </div>
    </main>
  );
}

export default Dashboard;
