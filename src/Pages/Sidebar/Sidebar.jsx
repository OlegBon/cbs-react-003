import './Sidebar.css';
// For Topics
import Topics from '../../components/Topics';
import data from '../../data/data.json';
// For Topics2
import Topics2 from '../../components/Topics2';

const Sidebar = () => {
    return (
        <div className="Sidebar">
            <nav>
                <ul>
                    <p>Topics імпортуємо data</p>
                    <Topics />
                    <p>Topics2 передаємо data</p>
                    <Topics2 data={data} />
                </ul>
            </nav>
        </div>
    );
};

export default Sidebar;