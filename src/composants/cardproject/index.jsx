import {Link} from 'react-router-dom';

function Cardproject(projects){
    return(
        <div className="cardproject">
            <div className='cardproject__head'>
                {projects.image ? (
                    <img className='cardproject__head__image' src={projects.image} alt='projet' />
                ):(
                    <img className='cardproject__head__icon' src={projects.icon} alt='skill' />
                )}
            </div>
            <h3>{projects.name}</h3>
            {projects.id ? (
                <Link to={`/projects/${projects.id}`} className="cardproject__button">
                    Voir le projet
                </Link>
            ):(
                null
            )}
            {projects.skills ? (
                <div className='cardproject__footer'>
                    {projects.skills.map((item, index) => (
                        <img key={index} src={item} alt='projet' />
                    ))}
                </div>
            ) : (
                null
            )}
        </div>
    )
}

export default Cardproject