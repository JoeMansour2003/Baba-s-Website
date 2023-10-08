const About = () => {
    return (
        <div
            className="container"
            style={{ textAlign: "center", padding: "50px 0" }}
        >
            <h1>About Us</h1>
            <br />
            <br />

            <h4>
                Welcome to our website! We are a team of professionals dedicated
                to providing high-quality services to our clients!
            </h4>

            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <div>
                <h2>Response Rate for Maintenance</h2>
                <img
                    src={require("../components/images/customer_service.jpg")}
                    className="top"
                    alt="Maintenance team"
                />
                <p>
                    Based on reviews and client feedback, we have achieved an
                    amazing score of 1-2 days response rate for fixing major
                    appliances like stoves, washing machines, and air
                    conditioning units. For smaller things like fixing a light,
                    you can expect results within 2 hours. Our response rates
                    are one of the best as we work hard for our clients,
                    ensuring they can focus on what's really important for them.
                </p>

                <img
                    src={require("../components/images/Number of Maintenance Reports Over The Years.png")}
                    className="bottom"
                    alt="Number of Maintenance Reports Over The Years"
                />
            </div>
            <hr />
            <div>
                <h2>Maintenance Record and Quality</h2>
                <img
                    src={require("../components/images/inpector.jpg")}
                    className="top"
                    alt="Inpector"
                />
                <img
                    src={require("../components/images/Home Inpector.jpg")}
                    className="top"
                    alt="Home Inpector"
                />
                <p>
                    Our maintenance record speaks for itself. We take pride in
                    maintaining our properties to the highest standards. Our
                    team is committed to ensuring that every apartment is in
                    excellent condition, providing a comfortable and safe living
                    environment for our residents.
                    <br />
                    <br />
                    Every year, we partner with a trusted third-party company
                    called CANUIT to conduct a comprehensive and thorough
                    Apartment Quality Inspection known as "Apartment Quality
                    Assurance."(AQA for short). This assessment allows us to
                    assess the condition and overall quality of our apartments
                    objectively. The maximum score an apartment can achieve is a
                    perfect 10. Below, you can find the results from their
                    latest ratings:
                </p>

                <img
                    src={require("../components/images/AQA Rating.png")}
                    className="bottom"
                    alt="Apartment quality assurance rating"
                />
            </div>
            <hr />
            <div>
                <h2>Resolving Complaints and Client Satisfaction</h2>
                <img
                    src={require("../components/images/customer support representative assisting.webp")}
                    className="top"
                    alt="customer support representative assisting"
                />
                <p>
                    At our company, customer satisfaction is our top priority.
                    We take all complaints seriously and strive to resolve them
                    promptly and effectively. Our dedicated customer support
                    team is always ready to assist our clients, ensuring their
                    concerns are addressed with care and professionalism.
                </p>
                <div className="row">
                    <img
                        src={require("../components/images/Responce-Rate.png")}
                        className="col"
                        alt="Responce-Rate Graph"
                    />
                    <img
                        src={require("../components/images/Average Repair Time.png")}
                        className="col"
                        alt="Average Repair Time Graph"
                    />
                </div>
            </div>
            <hr />
            <div>
                <h2>Our Team</h2>
                <img
                    src={require("../components/images/team.jpg")}
                    className="top"
                    alt="Our Team"
                />
                <p>
                    Behind our success is a team of dedicated professionals who
                    are passionate about what they do. From property maintenance
                    to customer support, our team works collaboratively to
                    deliver exceptional services and create a positive living
                    experience for our residents.
                </p>
            </div>
        </div>
    );
};

export default About;
