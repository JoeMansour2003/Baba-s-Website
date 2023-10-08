import { useTranslation } from "react-i18next";

const ContactUs = () => {
    const [t, i18n] = useTranslation("global");
    return (
        <div className="container text-center">
            <section className="section">
                <h1>{t("contactus.main")}</h1>
                <br />
                <div className="row center-cards">
                    <div className="row justify-content-around">
                        <div className="col-md-4">
                            <div
                                className="card h-100"
                                // style={{ width: 18 + "rem" }}
                            >
                                <img
                                    className="card-img-top"
                                    // style={{ width: "18rem" }}
                                    src={require("../components/images/Sergio.png")}
                                    alt="Photo of Sergio Marquina property owner"
                                />
                                <div className="card-body">
                                    <h4 className="card-title">
                                        {t("contactus.sexy mf")}
                                    </h4>
                                    <div className="card-text">
                                        <p>{t("contactus.sergio info")}</p>
                                        <p> {t("contactus.info part2")}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div
                                className="card h-100"
                                // style={{ width: 18 + "rem" }}
                            >
                                <img
                                    className="card-img-top"
                                    // style={{ width: "18rem" }}
                                    src={require("../components/images/Gus.png")}
                                    alt="Photo of Gus Fring property owner"
                                />
                                <div className="card-body">
                                    <h4 className="card-title">
                                        {t("contactus.chicken boy")}
                                    </h4>
                                    <div className="card-text">
                                        <p>{t("contactus.gus info1")}</p>
                                        <p>{t("contactus.gus info2")}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="col-md-6">
                        <h2>{t("contactus.opening hours")}</h2>
                        <br />
                        <table className="table">
                            <tbody>
                                <tr>
                                    <td>{t("contactus.monday")}</td>
                                    <td>9:00am - 7:30pm</td>
                                </tr>
                                <tr>
                                    <td>{t("contactus.tuesday")}</td>
                                    <td>9:00am - 7:30pm</td>
                                </tr>
                                <tr>
                                    <td>{t("contactus.wednesday")}</td>
                                    <td>9:00am - 7:30pm</td>
                                </tr>
                                <tr>
                                    <td>{t("contactus.thursday")}</td>
                                    <td>9:00am - 7:30pm</td>
                                </tr>
                                <tr>
                                    <td>{t("contactus.friday")}</td>
                                    <td>9:00am - 6:00pm</td>
                                </tr>
                                <tr>
                                    <td>{t("contactus.saturday")}</td>
                                    <td>9:00am - 3:00pm</td>
                                </tr>
                                <tr>
                                    <td>{t("contactus.sunday")}</td>
                                    <td>{t("contactus.closed")}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="col-md-6">
                        <h2>{t("contactus.phone number")}</h2>
                        <span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                class="bi bi-telephone-fill"
                                viewBox="0 0 16 16"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
                                />
                            </svg>{" "}
                            +1 (873) 353-8190
                        </span>
                        <br />
                        <br />
                        <img
                            className="card-img-top"
                            src={require("../components/images/Customer Service.png")}
                            style={{ borderRadius: 25 }}
                            alt="Customer Service on the phone"
                        />
                    </div>
                </div>
                <br />
                <br />
                <br />
                <br />
                <h2>{t("contactus.location")}</h2>
                <div className="address">
                    <a href="https://maps.app.goo.gl/x63L6a4ygKrKZUQ9A">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-geo-alt-fill"
                            viewBox="0 0 16 16"
                        >
                            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                        </svg>
                        196 Rue Champlain, Gatineau, QC
                    </a>
                </div>

                <br />
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d699.9746933520655!2d-75.7123095303159!3d45.43154019819211!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce04f3cca5d28f%3A0xf6e438ab7d7eeef6!2s196%20Rue%20Champlain%2C%20Gatineau%2C%20QC%20J8X%203R5!5e0!3m2!1sen!2sca!4v1696721539236!5m2!1sen!2sca"
                    width="1000"
                    height="450"
                    style={{ borderRadius: 25 }}
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                ></iframe>

                <br />
                <br />
                <br />
            </section>
        </div>
    );
};

export default ContactUs;
