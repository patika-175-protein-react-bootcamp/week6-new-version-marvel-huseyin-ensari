import { Link } from "react-router-dom";
import "../styles/components/HeroList.css";

const HeroList = ({ heros }) => {
    return (
        <div id='hero-list' className="row wrap justify__around">
            {heros?.map((hero) => (
                <div className='card' key={hero.id}>
                    <Link to={`/detail/${hero.id}`}>
                        <div className='divider'></div>
                        <div className='img-frame'>
                            <img
                                className='hero-image'
                                src={hero.thumbnail.path + "." + hero.thumbnail.extension}
                                alt={hero.name}
                            />
                            <span id='hero-name'>{hero.name}</span>
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default HeroList;