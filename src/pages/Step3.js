import { useHistory } from "react-router-dom";
import React, { useRef } from "react"; // Import useRef
import { useTranslation } from "react-i18next";

const Step3 = () => {
    const history = useHistory();
    const [t, i18n] = useTranslation("global");

    const page1 = () => {
        history.push("/Step1");
    };
    const page2 = () => {
        history.push("/Step2");
    };
    const page3 = () => {
        history.push("/Step3");
    };
    const confirmationPage = () => {
        history.push("./ConfirmationPage");
    };

    return (
        <div className="container text-center">
            <div className="row text-muted">
                <div className="col">
                    <div className="img-with-text">
                        <img
                            onClick={page1}
                            src={require("../components/images/1-active.png")}
                            alt="step 1"
                        />
                        <small onClick={page1}>
                            {t("step1.create_account_signin")}
                        </small>
                    </div>
                </div>
                <div className="col">
                    <div className="img-with-text">
                        <img
                            onClick={page2}
                            src={require("../components/images/2-active.png")}
                            alt="Step 2"
                        />
                        <small onClick={page2}>{t("step1.pre_approved")}</small>
                    </div>
                </div>
                <div className="col">
                    <div className="img-with-text">
                        <img
                            src={require("../components/images/3-active.png")}
                            alt="Step 3"
                        />
                        <small>{t("step1.book_appointment")}</small>
                    </div>
                </div>
            </div>
            <div className="row ">
                <h2>{t("step1.create_account_signin")}</h2>
            </div>
            {/* ######################################## */}
            <div className="container text-center">
                <section>
                    <form onSubmit={confirmationPage}>
                        <div className="col-md-6">
                            <br />
                            <br />
                            <label
                                htmlFor="validation04"
                                className="form-label"
                            >
                                {t("step3.num_guest_attending")}
                            </label>
                            <select
                                className="form-select"
                                id="validation04"
                                required
                            >
                                <option selected disabled value="">
                                    {t("step3.choose_guest_count")}
                                </option>
                                <option>{t("step3.option_1")}</option>
                                <option>{t("step3.option_2")}</option>
                                <option>{t("step3.option_3")}</option>
                                <option>{t("step3.option_4")}</option>
                            </select>
                            <div className="invalid-feedback">
                                {t("step3.select_amount_guest_attending")}
                            </div>
                        </div>
                        <div className="col-md-6">
                            <br />
                            <label
                                htmlFor="validation07"
                                className="form-label"
                            >
                                {t("step3.date")}
                            </label>
                            <input
                                type="date"
                                className="form-control"
                                id="validation07"
                                required
                            />
                            <div className="invalid-feedback">
                                {t("step3.select_date")}
                            </div>
                        </div>
                        <div className="col-12">
                            <br />
                            <button className="btn btn-primary" type="submit">
                                {t("step3.book_appointment_btn")}
                            </button>
                        </div>
                    </form>
                </section>
            </div>
        </div>
    );
};

export default Step3;
