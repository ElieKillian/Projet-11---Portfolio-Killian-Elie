function Footer(){

    const currentYear = new Date().getFullYear()

    return(
        <footer>
            <p>© Killian Elie - {currentYear}</p>
        </footer>
    )
};

export default Footer;