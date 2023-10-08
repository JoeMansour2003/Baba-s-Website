import { useHistory } from "react-router-dom";
import React, { useRef } from "react"; // Import useRef
import { useTranslation } from "react-i18next";

const Step2 = () => {
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
    const formRef = useRef(); // Create a ref for the form
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
                            src={require("../components/images/2-active.png")}
                            alt="Step 2"
                        />
                        <small>{t("step1.pre_approved")}</small>
                    </div>
                </div>
                <div className="col">
                    <div className="img-with-text">
                        <img
                            src={require("../components/images/3-Gray.png")}
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
                <section className="section">
                    <h2>{t("step2.pre_approved")}</h2>
                    <form
                        className="row g-3 needs-validation"
                        ref={formRef}
                        onSubmit={page3}
                    >
                        <div className="col-md-6">
                            <br />
                            <br />
                            <label
                                htmlFor="validation01"
                                className="form-label"
                            >
                                {t("step2.sin_number")}
                            </label>
                            <input
                                type="number"
                                className="form-control"
                                id="validation01"
                                required
                            />
                            <div className="valid-feedback">
                                {t("step2.looks_good")}
                            </div>
                        </div>
                        <div className="col-md-6">
                            <br />
                            <br />
                            <label
                                htmlFor="validation02"
                                className="form-label"
                            >
                                {t("step2.current_address")}
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="validation02"
                                required
                            />
                            <div className="valid-feedback">
                                {t("step2.looks_good")}
                            </div>
                        </div>
                        <div className="col-md-6">
                            <br />
                            <label
                                htmlFor="validation12"
                                className="form-label"
                            >
                                {t("step2.current_employment")}
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="validation12"
                                required
                            />
                            <div className="invalid-feedback"></div>
                        </div>
                        <div className="col-md-6">
                            <br />
                            <label
                                htmlFor="validation03"
                                className="form-label"
                            >
                                {t("step2.annual_income")}
                            </label>
                            <input
                                type="number"
                                className="form-control"
                                id="validation03"
                                required
                            />
                            <div className="invalid-feedback"></div>
                        </div>
                        <div className="col-md-6">
                            <br />
                            <label
                                htmlFor="validation0134"
                                className="form-label"
                            >
                                {t("step2.reference_full_name")}
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="validation0134"
                                required
                            />
                            <div className="valid-feedback">
                                {t("step2.looks_good")}
                            </div>
                        </div>
                        <div className="col-md-6">
                            <br />
                            <label
                                htmlFor="validation02"
                                className="form-label"
                            >
                                {t("step2.reference_email")}
                            </label>
                            <input
                                type="email"
                                className="form-control"
                                id="validation02"
                                required
                            />
                            <div className="invalid-feedback">
                                {t("step2.enter_valid_email")}
                            </div>
                        </div>
                        <div className="row align-items-center justify-content-center text-center">
                            <div className="col-md-4">
                                <br />
                                <label
                                    htmlFor="validation04"
                                    className="form-label"
                                >
                                    {t("step2.relationship_status")}
                                </label>
                                <select
                                    className="form-select"
                                    id="validation04"
                                    required
                                >
                                    <option selected disabled value="">
                                        {t("step2.choose")}
                                    </option>
                                    <option>{t("step2.single")}</option>
                                    <option>{t("step2.married")}</option>
                                </select>
                                <div className="invalid-feedback">
                                    {t("step2.select_relationship_status")}
                                </div>
                                <br />
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-md-3">
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        value=""
                                        id="invalidCheck"
                                        required
                                    />
                                    <label
                                        className="form-check-label"
                                        htmlFor="invalidCheck"
                                    >
                                        {t("step2.authorization_credit_check")}
                                    </label>
                                    <div className="invalid-feedback">
                                        {t("step2.agree_before_submitting")}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <button className="btn btn-primary" type="submit">
                                {t("step2.submit_application")}
                            </button>
                        </div>
                    </form>
                </section>
            </div>
        </div>
    );
};

export default Step2;
