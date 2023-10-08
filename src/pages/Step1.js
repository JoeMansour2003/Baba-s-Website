import React, { useRef } from "react"; // Import useRef
import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Step1 = () => {
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
                <div className="col" onClick={page1}>
                    <div className="img-with-text">
                        <img
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
                            src={require("../components/images/2-Gray.png")}
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
            {/* /################################################### */}

            <div className="d-flex justify-content-center">
                <div className="row align-items-center">
                    <form
                        className="row g-3 needs-validation"
                        noValidate
                        ref={formRef}
                        onSubmit={page2}
                    >
                        <div className="col-md">
                            <br />
                            <br />
                            <label
                                htmlFor="validation0124"
                                className="form-label"
                            >
                                {t("step1.email")}
                            </label>
                            <input
                                type="email"
                                className="form-control"
                                id="validation0124"
                                required
                            />
                            <label
                                htmlFor="validation01247"
                                className="form-label"
                            >
                                {t("step1.password")}
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="validation01247"
                                required
                            />
                            <br />
                            <div className="valid-feedback">Looks good!</div>
                        </div>

                        <div className="col-12">
                            <button className="btn btn-primary" type="submit">
                                {t("step1.login")}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="container text-center">
                <section className="section">
                    <form
                        className="row g-3 needs-validation"
                        Validate
                        ref={formRef}
                        onSubmit={page2}
                    >
                        <hr className="solid"></hr>
                        <div className="col-md-6">
                            <br />
                            <br />
                            <label
                                htmlFor="validation01"
                                className="form-label"
                            >
                                {t("step1.first_name")}
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="validation01"
                                required
                            />
                            <div className="valid-feedback">Looks good!</div>
                        </div>
                        <div className="col-md-6">
                            <br />
                            <br />
                            <label
                                htmlFor="validation02"
                                className="form-label"
                            >
                                {t("step1.last_name")}
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="validation02"
                                required
                            />
                            <div className="valid-feedback">Looks good!</div>
                        </div>
                        <div className="col-md-6">
                            <br />
                            <label
                                htmlFor="validationUsername"
                                className="form-label"
                            >
                                {t("step1.email")}
                            </label>
                            <input
                                type="email"
                                className="form-control"
                                id="validationUsername"
                                aria-describedby="inputGroupPrepend"
                                required
                            />
                            <div className="invalid-feedback">
                                {t("step1.validation_email")}
                            </div>
                        </div>
                        <div className="col-md-6">
                            <br />
                            <label
                                htmlFor="validation03"
                                className="form-label"
                            >
                                {t("step1.password")}
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="validation03"
                                required
                            />
                        </div>
                        <div className="col-12">
                            <br />
                            <button className="btn btn-primary" type="submit">
                                {t("step1.create_account")}
                            </button>
                        </div>
                    </form>
                </section>
            </div>
        </div>
    );
};

export default Step1;
