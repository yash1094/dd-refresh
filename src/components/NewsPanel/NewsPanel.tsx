import { news } from '../../data/news';

export default function NewsPanel() {
    return (
        <section className="news-panel">
            <h2>News</h2>
            <ul>
                {news.map((article) => (
                    <li key={article.id}>
                        {article.title}
                    </li>
                ))}
            </ul>
        </section>
    );
}

