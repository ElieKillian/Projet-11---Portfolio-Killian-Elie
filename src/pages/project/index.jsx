import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Card from '../../composants/card';

function Project(){

    const { id } = useParams();
    
    const [data, setData] = useState([]);
    const [error, setError] = useState(false);

    document.title = data.name + ' - Killian Elie';

    useEffect(()=>{
        const getprojects = async ()=>{
            try{
                const response = await fetch ('./projects.json');
                const result = await response.json();
                const dataProject = result.find(item => item.id === id);
                setData(dataProject);                    
            } catch {
                setError(true);
            }
        }
        getprojects();
    },[id])


    return(
        <section className="page">
            <Card content={
                <div className='page__card__container'>
                    { error === false || data !== undefined ? (
                        <div className='page__card__container__project'>
                            <img src={data.image} className='page__card__container__project__head' alt='projet' />
                            <h2 className='page__card__container__project__name'>Projet {data.name}</h2>
                            <h3 className='page__card__container__project__name'>
                                {data.title}
                            </h3>
                            <div className='page__card__container__project__objectives'>
                                {data.objectives ? (
                                    <p>{data.objectives.length > 1 ? 'Objectifs du projet :' : 'Objectif du projet :'}</p>
                                ) : (
                                    null
                                )}
                                { data.objectives  ? (
                                    data.objectives.map((item, index) => (
                                        <p key={index}>- {item}</p>
                                    ))
                                ):(
                                    null
                                )}
                            </div>
                            <Link to={data.github} target="_blank" className='page__card__container__project__link'>
                                Lien vers le projet sur Github
                            </Link>
                            <Link to='/projects' className='page__card__container__project__link'>
                                Retour page projets
                            </Link>
                            <div className='page__card__container__project__skills'>
                                <p>Compétences utilisées dans ce projet :</p>
                                <div className='page__card__container__project__skills__images'> 
                                    { data.skills  ? (
                                        data.skills.map((item, index) => (
                                            <img key={index} src={item} alt='projet' />
                                        ))
                                    ):(
                                        null
                                    )}
                                </div>
                            </div>
                        </div>
                    ):(
                        <p>Erreur lors de l'import des données</p>
                    )}
                </div>
            } />
        </section>
    )
}

export default Project;