import Card from "../../composants/card";

function Notfound(){
    return(
        <section className="page">
            <Card content={
                <div className='page__card__container'>
                    <h2>404</h2>
                    <p>La page que vous avez demandée n'existe pas</p>
                </div>
            }/>
        </section>
    )
};

export default Notfound;