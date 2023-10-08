import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import logo from "./images/logo.png";

const Navbar = () => {
    const [t, i18n] = useTranslation("global");

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
        localStorage.setItem("lang", i18n.language);
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <Link className="navbar-brand" to="/">
                    <img
                        src={logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt="MetroLiving Logo"
                    />
                    MetroLiving
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className="collapse navbar-collapse justify-content-end"
                    id="navbarNav"
                >
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/ContactUs">
                                {t("nav.contactus")}
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/About">
                                {t("nav.about")}
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Property">
                                {t("nav.property")}
                            </Link>
                        </li>
                        <button
                            className="btn btn-link nav-link language-button"
                            onClick={() => changeLanguage("en")}
                        >
                            EN
                        </button>
                        <button
                            className="btn btn-link nav-link language-button"
                            onClick={() => changeLanguage("fr")}
                        >
                            FR
                        </button>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
