import CalorieConsumed from "./_components/CalorieConsumed";
import CalorieIntakeHistory from "./_components/CalorieIntakeHistory";
import TargetCalorie from "./_components/TargetCalorie";

function Dashboard() {
  return (
    <main className="p-4 mx-auto max-w-5xl">
      <div className="space-y-10">
        <div className="flex flex-col md:flex-row gap-2">
          <TargetCalorie />
          <CalorieConsumed />
        </div>
        <CalorieIntakeHistory />
      </div>
    </main>
  );
}

export default Dashboard;
