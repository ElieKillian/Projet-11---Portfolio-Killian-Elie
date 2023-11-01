import photo from './photo.jpg';
import github from './github.png';
import lkn from './lkn.png';
import oc from './oc.png';
import { Link } from 'react-router-dom';
import Card from '../../composants/card'

function Home(){

    document.title = 'Accueil - Killian Elie';

    return(
        <section className="page">
            <Card content={
                <>
                <img src={photo} alt='Killian Elie' className='page__card__photo' />
                <div className='page__card__right'>
                    <div className='page__card__right__title'>
                        <h2>Killian Elie</h2>
                        <h3>Intégrateur Web</h3>
                    </div>
                    <div className='page__card__right__text'>
                        <p>Agé de 31 ans, vivant en Haute-Normandie, j'ai toujours été passionné par informatique, je me suis récement lancé dans le développement web et je souhaite désormais en faire mon métier. <br />
                            J'ai donc effectué durant 9 mois une formation en développement auprès d'OpenClassrooms que vous pouvez découvrir en cliquant sur l'icône dans les liens ci-dessous  <br />
                            Vous trouverez ici les diverses compétences que j'ai obtenues pendant la formation, ainsi que les diverses réalisations que j'ai crée.
                        </p>
                    </div>
                </div>
                </>
            } />
            <Card content={
                <div className='page__card__social'>
                    <div className='page__card__social__github'>
                        <h3>Mon Github :</h3>
                        <Link to="https://github.com/ElieKillian" target="_blank" className='page__card__social__github__icon'>
                            <img src={github} alt="GitHub Killian Elie" />
                        </Link>
                    </div>
                    <div className='page__card__social__github'>
                        <h3>Formation suivie :</h3>
                        <Link to="https://openclassrooms.com/fr/paths/594-integrateur-web" target="_blank" className='page__card__social__github__icon'>
                            <img src={oc} alt="formation" />
                        </Link>
                    </div>
                    <div className='page__card__social__linkedin'>
                        <h3>Mon Linkedin :</h3>
                        <Link to="https://www.linkedin.com/in/killian-elie-627b57184/" target="_blank" className='page__card__social__linkedin__icon'>
                            <img src={lkn} alt="Linkedin Killian Elie" />
                        </Link>
                    </div>
                </div>
            } />
        </section>
    )

}

export default Home;