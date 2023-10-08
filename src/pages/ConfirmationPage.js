import React from "react";
import { Link } from "react-router-dom";

const ConfirmationPage = () => {
    const formData = {
        firstName: "John",
        lastName: "Doe",
        sinNumber: "123-456-789",
        currentAddress: "123 Main Street",
        currentEmployment: "XYZ Corporation",
        annualIncome: "$60,000",
        referenceFullName: "Jane Smith",
        referenceEmail: "jane@example.com",
        relationshipStatus: "Single",
        numberOfGuests: "2",
        tourDate: "2023-07-15",
    };

    return (
        <div className="container text-center">
            <h1>Confirmation Page</h1>
            <p>
                Thank you for submitting your information. Here are the details:
            </p>
            <ul className="list-unstyled">
                <li>
                    <strong>First Name:</strong> {formData.firstName}
                </li>
                <li>
                    <strong>Last Name:</strong> {formData.lastName}
                </li>
                <li>
                    <strong>SIN Number:</strong> {formData.sinNumber}
                </li>
                <li>
                    <strong>Current Address:</strong> {formData.currentAddress}
                </li>
                <li>
                    <strong>Current Employment:</strong>{" "}
                    {formData.currentEmployment}
                </li>
                <li>
                    <strong>Annual Income:</strong> {formData.annualIncome}
                </li>
                <li>
                    <strong>Reference Full Name:</strong>{" "}
                    {formData.referenceFullName}
                </li>
                <li>
                    <strong>Reference Email:</strong> {formData.referenceEmail}
                </li>
                <li>
                    <strong>Relationship Status:</strong>{" "}
                    {formData.relationshipStatus}
                </li>
                <li>
                    <strong>Number of Guests Attending the Tour:</strong>{" "}
                    {formData.numberOfGuests}
                </li>
                <li>
                    <strong>Tour Date:</strong> {formData.tourDate}
                </li>
            </ul>
            <p>
                Our team will review your information and contact you shortly.
                Thank you!
            </p>
            <Link to="/">Return to Homepage</Link>
        </div>
    );
};

export default ConfirmationPage;
