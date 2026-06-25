import HeroPanel from '../components/HeroPanel/HeroPanel';
import NewsPanel from '../components/NewsPanel/NewsPanel';

function Dashboard() {
    return (
        <main className="dashboard">
            <HeroPanel />
            <NewsPanel />
        </main>
    );
}

export default Dashboard;
