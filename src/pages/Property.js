import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Property = () => {
    // Define your card data here
    const cards = [
        {
            imageSrc: "...", // Replace with your image source
            title: "Card Title 1",
            text: "This is a longer card with supporting text below as a natural lead-in to additional content.",
        },
        {
            imageSrc: "...", // Replace with your image source
            title: "Card Title 2",
            text: "This is a short card.",
        },
        {
            imageSrc: "...", // Replace with your image source
            title: "Card Title 3",
            text: "This is a longer card with supporting text below as a natural lead-in to additional content.",
        },
        {
            imageSrc: "...", // Replace with your image source
            title: "Card Title 4",
            text: "This is a longer card with supporting text below as a natural lead-in to additional content.",
        },
    ];

    // Custom CSS for top margin
    const containerStyle = {
        marginTop: "40px", // You can adjust this value as needed
    };
    const cardStyle = {
        marginTop: "20px", // You can adjust this value as needed
        marginBottom: "20px", // You can adjust this value as needed
    };

    return (
        <div className="container" style={containerStyle}>
            <div className="row row-cols-1 row-cols-md-4 g-4">
                {cards.map((card, index) => (
                    <div key={index} className="col">
                        {/* Wrap each card in a Link */}
                        <Link
                            to={`/property/${index}`}
                            style={{ textDecoration: "none" }}
                        >
                            <div className="card h-100" style={cardStyle}>
                                <img
                                    src={card.imageSrc}
                                    className="card-img-top"
                                    alt="Card Image"
                                />
                                <div className="card-body">
                                    <h5 className="card-title">{card.title}</h5>
                                    <p className="card-text">{card.text}</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Property;
