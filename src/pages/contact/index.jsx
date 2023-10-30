import { useState } from "react";
import emailjs from 'emailjs-com';

function Contact(){

    document.title = 'Me contacter - Killian Elie';

    const [formData, setFormData] = useState({
        nom: '',
        prenom: '',
        entreprise: '',
        email: '',
        message: '',
    });

    const [send, setSend] = useState(false);

    const Submit = (e) => {
        e.preventDefault();

        if (!formData.nom || !formData.prenom || !formData.email || !formData.message) {
            alert('Veuillez remplir tous les champs obligatoires.');
            return;
        }

        const templateParams = {
            nom: formData.nom,
            prenom: formData.prenom, 
            entreprise: formData.entreprise,
            email: formData.email,
            message: formData.message,
        };

        console.log('templateParams :', templateParams);

        emailjs.send('service_ufpg4pv', 'template_h71wxer', templateParams, 'E2U49VR9dmBpuDc5z')
            .then(function (response) {
                console.log('E-mail envoyé avec succès!', response);
                setFormData({
                    nom: '',
                    prenom: '',
                    entreprise: '',
                    email: '',
                    message: '',
                });
                setSend(true);
            }, function (error) {
                console.error('Erreur lors de l\'envoi de l\'e-mail :', error);
            });
    }

    return(
        <div className="page">
            <div className="page__card">
                <div className="page__card__container">
                    <h2>Me contacter</h2>
                    <p>Champs obligatoires*</p>
                    <form className="page__card__container__form">
                        <div className="page__card__container__form__partname">
                            <div className="page__card__container__form__partname__part">
                                <label htmlFor="nom" >Nom*</label>
                                <input name="nom" value={formData.nom} onChange={(e) => setFormData({ ...formData, nom: e.target.value })} required />
                            </div>
                            <div className="page__card__container__form__partname__part">
                                <label htmlFor="prenom" >Prénom*</label>
                                <input name="prenom" value={formData.prenom} onChange={(e) => setFormData({ ...formData, prenom: e.target.value })} required />
                            </div>
                        </div>
                        <div className="page__card__container__form__part">
                            <label htmlFor="entreprise" >Société</label>
                            <input name="entreprise" value={formData.entreprise} onChange={(e) => setFormData({ ...formData, entreprise: e.target.value })} />
                        </div>
                        <div className="page__card__container__form__part">
                            <label htmlFor="email" >Email*</label>
                            <input name="email" type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required />
                        </div>
                        <div className="page__card__container__form__part">
                            <label htmlFor="message" >Message*</label>
                            <textarea name="message" rows="5" cols="10" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} required />
                        </div>
                        <button className="page__card__container__form__button" onClick={Submit} >Envoyer</button>
                        { send === true ? (<p>Votre message a bien été envoyé !</p>) : (null)}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact;