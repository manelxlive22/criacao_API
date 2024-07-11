import { Link } from 'react-router-dom';
import './home.css';

function Home() {
    return (
        <div className="container">
            <h2>Conheça carros interessantes!</h2>
            <div className="buttons-container">
                <Link to="/cars">
                    <button className="brand-button">Conhecer!</button>
                </Link>
              {/*   <Link to="/bmw">
                    <button className="brand-button">Ferrai</button>
                </Link>
                <Link to="/bmw">
                    <button className="brand-button">McLaren</button>
                </Link>
                <Link to="/bmw">
                    <button className="brand-button">Lexus</button>
                </Link>
                <Link to="/bmw">
                    <button className="brand-button">BMW</button>
                </Link> */}
            </div>
        </div>
    );
}

export default Home;
