import { useEffect, useState } from 'react';
import Card from '../../composants/card';
import Cardproject from '../../composants/cardproject';

function Skills(){

    document.title = 'Mes compétences - Killian Elie';

    const [withIcons, setWithIcons] = useState([]);
    const [withOutIcons, setWithOutIcons] = useState([]);
    const [error, setError] = useState(false);

    useEffect(()=>{ 
        const getprojects = async ()=>{
            try{
                const response = await fetch ('./skills.json');
                const result = await response.json();
                console.log('result :', result);
                setWithIcons(result.icons);
                setWithOutIcons(result.noIcons);
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
                    <h2>Mes compétences</h2>
                    <p>Durant ma formation OpenClassRooms, j'ai pû obtenir diverses compétences, listées ci-dessous :</p>
                    <div className='page__card__container__import'>
                        { error === false ? (                    
                            withIcons.map((skills) => (
                                <Cardproject
                                    key={skills.name} 
                                    name={skills.name} 
                                    icon={skills.icon}
                                />
                            ))
                        ) : (
                            <p>Erreur lors de l'import des données</p>
                        )}
                    </div>
                    <p>Je possède également comme compétences :</p>
                    <div className='page__card__container__importText'>
                        { error === false ? (                    
                            withOutIcons.map((skills) => (
                                <Cardproject
                                    key={skills.name} 
                                    name={skills.name} 
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

export default Skills;