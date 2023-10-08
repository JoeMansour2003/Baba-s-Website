import { useTranslation } from "react-i18next";
import background from "../components/images//interior4.jpg";

const Home = () => {
    const backgroundStyle = {
        backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0) 60%, #041802), url(${background})`,
    };
    const [t, i18n] = useTranslation("global");
    return (
        <div className="container text-center">
            <div className="main-content">
                <div className="dark"></div>
                <div className="container">
                    <article className="no" style={backgroundStyle}>
                        <h1 className="yes">{t("home.message")}</h1>
                    </article>
                </div>

                <br />
                <br />
                <br />
                <br />
                <br />
                <h1>{t("home.m2")}</h1>
                <div
                    id="carouselExampleIndicators"
                    className="carousel slide container"
                    data-bs-ride="carousel"
                    style={{ marginBottom: 25 + "px" }}
                >
                    <div className="carousel-indicators">
                        <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide-to="0"
                            className="active"
                            aria-current="true"
                            aria-label="Slide 1"
                        ></button>
                        <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide-to="1"
                            aria-label="Slide 2"
                        ></button>
                        <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide-to="2"
                            aria-label="Slide 3"
                        ></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img
                                src={require("../components/images/interior6.jpg")}
                                className="d-block w-100"
                                alt="interior2"
                            />
                        </div>
                        <div className="carousel-item">
                            <img
                                src={require("../components/images/kitchen3.png")}
                                className="d-block w-100"
                                alt="kitchen1"
                            />
                        </div>
                        <div className="carousel-item">
                            <img
                                src={require("../components/images/washroom2.jpeg")}
                                className="d-block w-100"
                                alt="washroom1"
                            />
                        </div>
                    </div>
                    <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide="prev"
                    >
                        <span
                            className="carousel-control-prev-icon"
                            aria-hidden="true"
                        ></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide="next"
                    >
                        <span
                            className="carousel-control-next-icon"
                            aria-hidden="true"
                        ></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
                {/* Frequently Asked Questions */}
                <div className="container">
                    <h2>{t("home.faq")}</h2>
                    <div className="accordion" id="faqAccordion">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingOne">
                                <button
                                    className="accordion-button"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseOne"
                                    aria-expanded="true"
                                    aria-controls="collapseOne"
                                >
                                    {t("home.faqQ1")}
                                </button>
                            </h2>
                            <div
                                id="collapseOne"
                                className="accordion-collapse collapse show"
                                aria-labelledby="headingOne"
                                data-bs-parent="#faqAccordion"
                            >
                                <div className="accordion-body">
                                    {t("home.faqA1")}
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingTwo">
                                <button
                                    className="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseTwo"
                                    aria-expanded="false"
                                    aria-controls="collapseTwo"
                                >
                                    {t("home.faqQ2")}
                                </button>
                            </h2>
                            <div
                                id="collapseTwo"
                                className="accordion-collapse collapse"
                                aria-labelledby="headingTwo"
                                data-bs-parent="#faqAccordion"
                            >
                                <div className="accordion-body">
                                    <p
                                        dangerouslySetInnerHTML={{
                                            __html: t("home.faqA2"),
                                        }}
                                    ></p>
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingThree">
                                <button
                                    className="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseThree"
                                    aria-expanded="false"
                                    aria-controls="collapseThree"
                                >
                                    {t("home.faqQ3")}
                                </button>
                            </h2>
                            <div
                                id="collapseThree"
                                className="accordion-collapse collapse"
                                aria-labelledby="headingThree"
                                data-bs-parent="#faqAccordion"
                            >
                                <div className="accordion-body">
                                    {t("home.faqA3")}
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingFour">
                                <button
                                    className="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseFour"
                                    aria-expanded="false"
                                    aria-controls="collapseFour"
                                >
                                    {t("home.faqQ4")}
                                </button>
                            </h2>
                            <div
                                id="collapseFour"
                                className="accordion-collapse collapse"
                                aria-labelledby="headingFour"
                                data-bs-parent="#faqAccordion"
                            >
                                <div className="accordion-body">
                                    {t("home.faqA4")}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <br />
        </div>
    );
};

export default Home;
