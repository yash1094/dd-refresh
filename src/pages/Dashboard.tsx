import HeroPanel from "../components/HeroPanel/HeroPanel";
import NewsPanel from "../components/NewsPanel/NewsPanel";
import QuickActionGrid from "../components/QuickActionGrid/QuickActionGrid";

function Dashboard() {
  return (
    <section className="dashboard-page">
      <div className="dashbord-main">
        <HeroPanel />
        <NewsPanel />
      </div>

      <QuickActionGrid />
    </section>
  );
}

export default Dashboard;
