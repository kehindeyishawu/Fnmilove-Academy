import Accordion from 'react-bootstrap/Accordion';


const FAQs = () => {
    return (
        <div>
            <h1 className="text-center fw-bold mb-4">Frequently Asked Questions</h1>
            <div className="container">
                <Accordion flush alwaysOpen>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>What programs do you offer?</Accordion.Header>
                        <Accordion.Body>
                            We offer a variety of vocational programs including Welding, Culinary Arts, Fashion Design, Electrical Engineering, and more. Each program is designed to provide hands-on training and practical skills.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>How long do the programs take to complete?</Accordion.Header>
                        <Accordion.Body>
                            The duration of our programs varies. Most can be completed within 6 months to 2 years, depending on the specific course and level of certification.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header> Do you offer financial aid or scholarships?</Accordion.Header>
                        <Accordion.Body>
                            Yes, we offer several financial aid options and scholarships to help students cover the cost of their education. Please contact our admissions office for more details.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header> Are your instructors certified?</Accordion.Header>
                        <Accordion.Body>
                            All our instructors are certified professionals with extensive experience in their respective fields. They are dedicated to providing high-quality education and training
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4">
                        <Accordion.Header> What are the admission requirements?</Accordion.Header>
                        <Accordion.Body>
                            Admission requirements vary by program. Generally, applicants must have a high school diploma or equivalent. Some programs may have additional prerequisites.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="5">
                        <Accordion.Header>Do you provide job placement assistance?</Accordion.Header>
                        <Accordion.Body>
                            Yes, we offer job placement assistance to all our graduates. Our career services team works closely with local businesses and industries to help students find employment after completing their programs.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="6">
                        <Accordion.Header> Can I visit the campus before applying?</Accordion.Header>
                        <Accordion.Body>
                            Absolutely! We encourage prospective students to visit our campus, meet with instructors, and tour our facilities. Please contact us to schedule a visit.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="7">
                        <Accordion.Header> What is the cost of tuition?</Accordion.Header>
                        <Accordion.Body>
                            Tuition costs vary by program. For detailed information on tuition and fees, please visit our website or contact our admissions office.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="8">
                        <Accordion.Header>Are there any online courses available?</Accordion.Header>
                        <Accordion.Body>
                            Yes, we offer several online courses for students who prefer remote learning. These courses provide the same quality education and training as our on-campus programs.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="9">
                        <Accordion.Header>How do I apply?</Accordion.Header>
                        <Accordion.Body>
                            You can apply online through our website or by visiting our admissions office. Our team is here to help you through the application process.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </div>
    )
}

export default FAQs