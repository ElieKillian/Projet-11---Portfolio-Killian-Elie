import photo from './photo.jpg';
import github from './github.png';
import lkn from './lkn.png';
import { Link } from 'react-router-dom';
import Card from '../../composants/card'

function Home(){
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
                    <p>Passionné d'informatique depuis de nombreuses années, je me suis récement lancé dans le développement web et je souhaite désormais en faire mon métier. <br />
                        Vous trouverez donc sur ce site les diverses compétences que j'ai obtenues pendant la formation d'OpenClassRooms, ainsi que les diverses réalisations que j'ai crée.
                    </p>
                </div>
                </>
            } />
            <Card content={
                <div className='page__card__social'>
                    <div className='page__card__social__github'>
                        <p>Mon Github :</p>
                        <Link to="https://github.com/ElieKillian" target="_blank" className='page__card__social__github__icon'>
                            <img src={github} alt="GitHub Killian Elie" />
                        </Link>
                    </div>
                    <div className='page__card__social__linkedin'>
                        <p>Mon compte Linkedin :</p>
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