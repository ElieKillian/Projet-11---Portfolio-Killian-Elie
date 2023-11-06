import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Card from '../../composants/card';
import Notfound from '../notfound';

function Project(){

    document.title = ' Projet réalisé - Killian Elie';
    
    const { id } = useParams();    
    const [data, setData] = useState([]);
    const [load, setLoad] =useState(true);
    const [error, setError] = useState(false);

    // document.title = dataProject.name + ' - Killian Elie'

    useEffect(()=>{
        const getprojects = async ()=>{
            try{
                const response = await fetch ('../projects.json');
                const result = await response.json();
                setData(result); 
                setLoad(false);
            } catch {
                setError(true);
            }
        }
        getprojects();
    },[id])

    const dataProject = data.find(item => item.id === id);
    
    if (!dataProject){
        if(load){
          return null
        } else {
          return <Notfound />
        }
      }

    return(
        <section className="page">
            <Card content={
                <div className='page__card__container'>
                    { error === false || dataProject !== undefined ? (
                        <div className='page__card__container__project'>
                            <img src={'.' + dataProject.image} className='page__card__container__project__head' alt='projet' />
                            <div className='page__card__container__project__content'>
                                <h2 className='page__card__container__project__content__name'>Projet {dataProject.name}</h2>
                                <h3 className='page__card__container__project__content__name'>
                                    {dataProject.title}
                                </h3>
                                <div className='page__card__container__project__content__objectives'>
                                    {dataProject.objectives ? (
                                        <p className='page__card__container__project__content__objectives__title'>{dataProject.objectives.length > 1 ? 'Objectifs du projet :' : 'Objectif du projet :'}</p>
                                    ) : (
                                        null
                                    )}
                                    { dataProject.objectives  ? (
                                        dataProject.objectives.map((item, index) => (
                                            <p key={index}>- {item}</p>
                                        ))
                                    ):(
                                        null
                                    )}
                                </div>
                                <div className='page__card__container__project__content__objectives'>
                                    <p className='page__card__container__project__content__objectives__title'>Ma contribution à ce projet :</p>
                                        {dataProject.contribution ? (
                                            dataProject.contribution.map((item, index) => (
                                                <p key={index}>- {item}</p>
                                            ))
                                        ) : (
                                            null
                                        )}
                                </div>
                                <div className='page__card__container__project__content__links' >
                                    { dataProject.website ? (
                                        <>
                                        {/* <iframe title={data.name} className='page__card__container__project__content__website' src={dataProject.website}>
                                        </iframe> */}
                                        <Link to={dataProject.website} target="_blank" className='page__card__container__project__content__links__link'>
                                            Lien vers le site
                                        </Link>
                                        </>
                                    ):(
                                        null
                                    )}
                                    <Link to={dataProject.github} target="_blank" className='page__card__container__project__content__links__link'>
                                        Lien vers le code (Github)
                                    </Link>
                                    <Link to='/projects' className='page__card__container__project__content__links__link'>
                                        Retour page projets
                                    </Link>
                                </div>
                                <div className='page__card__container__project__content__skills'>
                                    <p>Compétences utilisées dans ce projet :</p>
                                    <div className='page__card__container__project__content__skills__images'> 
                                        { dataProject.skills  ? (
                                            dataProject.skills.map((item, index) => (
                                                <img key={index} src={'.' + item} alt='projet' />
                                            ))
                                        ):(
                                            null
                                        )}
                                    </div>
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