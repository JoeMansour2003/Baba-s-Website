import { useHistory } from "react-router-dom";

const ForSale = () => {
    const history = useHistory();

    const handleClick = () => {
        history.push("/Step1");
    };
    return (
        <div className="container text-center">
            <div
                id="carouselExampleIndicators"
                className="carousel slide"
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
                            src={require("../components/images/interior2.jpg")}
                            className="d-block w-100"
                            alt="interior2"
                        />
                    </div>
                    <div className="carousel-item">
                        <img
                            src={require("../components/images/kitchen1.png")}
                            className="d-block w-100"
                            alt="kitchen1"
                        />
                    </div>
                    <div className="carousel-item">
                        <img
                            src={require("../components/images/washroom1.jpg")}
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

            {/* TEXT */}
            <div className="row justify-content-around">
                <div className="col-4">
                    <div className="text-left">
                        <h4>444 spadian road</h4>
                        <p>Forest Hill, Toronto</p>
                        <br />
                        <h4>Property Details</h4>
                        <p>2 Bedroom 1 Washroom</p>
                        <br />
                        <h4>Lease and Fees</h4>
                        <p>Rent :$ 3,77</p>
                        <p>semi-annual payments or annual payments</p>
                        <p>Secutity Deposit $5,000</p>
                        <br />
                        <h4>Included Amenities</h4>
                        <p>Dishwasher</p>
                        <p>Fridge</p>
                        <p>Oven</p>
                        <p>Stove</p>
                        <p>Heater and Cooling</p>
                    </div>
                </div>
                <div className="col-4">
                    <br />
                    <img
                        src={require("../components/images/Sergio.png")}
                        alt="SEXY Apartment owner"
                        style={{ borderRadius: "25px" }}
                    />
                    <br />
                    <h2>Owners Contact info:</h2>
                    <p>Sergio Marquina</p>
                    <p>Phone Number: +1 (613) 256-7842</p>
                    <p>Office Location: 559 King Edward Ave, Ottawa, ON</p>
                    <p>KIN 7N5 Email: metroliving@metroliving.com</p>
                </div>
            </div>
            <br />
            <br />
            <button
                onClick={handleClick}
                style={{ marginBottom: 25 + "px" }}
                type="button"
                class="btn btn-primary btn-lg"
            >
                Get Pre-Approved and Book Viewing
            </button>
        </div>
    );
};

export default ForSale;
