import { useEffect, useState } from 'react';
import Card from '../../composants/card';
import Cardproject from '../../composants/cardproject';

function Projects(){

    document.title = 'Mes projets réalisés';

    const [data, setData] = useState([]);
    const [error, setError] = useState(false);

    useEffect(()=>{ 
        const getprojects = async ()=>{
            try{
                const response = await fetch ('./projects.json');
                const result = await response.json();
                console.log('result :', result);
                setData(result);
            } catch {
                setError(true);
            }
        }
        getprojects();
    },[]);

    return(
        <section className="page">
            <Card content={
                <div className='page__card__container'>
                    <h2>Mes réalisations</h2>
                    <p>Voici les différents projets sur lesquels j'ai été amené à travailler :</p>
                    <div className='page__card__container__import'>
                        { error === false ? (                    
                            data.map((projects) => (
                                <Cardproject
                                    key={projects.id} 
                                    id = {projects.id}
                                    name={projects.name} 
                                    image={projects.image}
                                    skills={projects.skills}
                                />
                            ))
                        ) : (
                            <p>Erreur lors de l'import des données</p>
                        )}
                    </div>
                </div>
            } />
        </section>
    )
};

export default Projects;