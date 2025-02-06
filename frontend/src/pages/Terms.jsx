import { Link } from "react-router-dom"


const Terms = () => {
    return (
        <main className="mt-5 container">
            <h1 className="fw-bold">Terms and Conditions</h1>
            <p>
                Effective Date: 6/1/2025
            </p>
            <p>
                These Terms and Conditions govern your access to and use of FnmiLove Academy’s services. By engaging with our offerings, you agree to the following terms:
            </p>
            <h2 className="fw-bold">Use of Services</h2>
            <ul>
                <li>
                    Our programs are designed for educational and vocational purposes.
                </li>
                <li>
                    You agree to use our services in compliance with applicable laws and not for any fraudulent activity.
                </li>
            </ul>
            <h2 className="fw-bold">Enrollment and Payment</h2>
            <ul>
                <li>
                    Course fees must be paid before starting any program.
                </li>
                <li>
                    Fees are non-refundable unless otherwise stated.
                </li>
                <li>
                    Discounts and offers cannot be combined unless specified.
                </li>
            </ul>
            <h2 className="fw-bold">Intellectual Property</h2>
            <ul>
                <li>All materials, including course content, videos, and images, are the intellectual property of FnmiLove Academy.</li>
                <li>You may not reproduce, distribute, or share these materials without explicit permission.</li>
            </ul>
            <h2 className="fw-bold">Code of Conduct</h2>
            <ul>
                <li>Students and participants must maintain professionalism and respect for others.</li>
                <li>Any misconduct may result in suspension or termination of enrollment without  a refund.</li>
            </ul>
            <h2 className="fw-bold">Limitation of Liability</h2>
            <p>FnmiLove Academy is not liable for:</p>
            <ul>
                <li>Loss or damage resulting from the misuse of our materials.</li>
                <li>Unforeseen disruptions in service due to technical issues or natural disasters.</li>
            </ul>
            <h2 className="fw-bold">Privacy</h2>
            <p>Your use of our services is governed by our <Link to={"/privacy"}>Privacy Policy</Link>, which outlines how we collect and use your data.</p>
            <h2 className="fw-bold">Amendments</h2>
            <p>
                We reserve the right to modify these terms at any time. Changes will be effective upon posting on our website.
            </p>
            <h2 className="fw-bold">Governing Law</h2>
            <p>
                These Terms and Conditions are governed by the laws of the Federal Republic of Nigeria. Any disputes will be resolved in the courts of Lagos State, Nigeria.
            </p>
            <h2 className="fw-bold">Contact Us</h2>
            <p>
                For questions or concerns, contact us at: <br />
                FnmiLove Academy
                <address>
                    Email: privacy@fnmiloveacademy.com
                </address>
                <address>
                    Phone: 09013727947
                </address>
                <address>
                    Address: Lekki Peninsula Scheme II, Ajah, Lagos.
                </address>
            </p>
        </main>
    )
}

export default Terms