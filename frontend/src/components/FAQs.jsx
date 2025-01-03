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
                            We offer a diverse range of courses designed to equip you with the skills and knowledge needed for a successful career in creative fields. Our programs include Hairdressing & Styling, Beauty and Skincare, Content Creation, Fashion Design, Photography, and Graphic Design. Each course is tailored to provide hands-on experience, mentorship from industry professionals, and the latest techniques in the field.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>How long do the programs take to complete?</Accordion.Header>
                        <Accordion.Body>
                            Course duration varies depending on the specialization. Most programs are designed to be completed in a few months, with options for full-time and part-time schedules to accommodate your lifestyle. Crash Courses are 3 months; Full Courses are 1-3 years(divided into 3 sessions per year). Detailed information about the duration of each course can be found on our course descriptions page.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header> Do you offer financial aid or scholarships?</Accordion.Header>
                        <Accordion.Body>
                            Yes, we offer financial aid options to help students cover the cost of tuition. Our admissions team can provide information on scholarships, grants, and payment plans available to eligible students. Contact us to learn more about your financial aid options.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header> Are your instructors certified?</Accordion.Header>
                        <Accordion.Body>
                            All our instructors are certified professionals with a wealth of knowledge in their respective fields. They bring real-world experience to the classroom, offering personalized guidance and mentorship. You’ll benefit from their expertise as they share industry insights, techniques, and best practices to help you excel in your chosen course.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4">
                        <Accordion.Header> What are the admission requirements?</Accordion.Header>
                        <Accordion.Body>
                            Prerequisites may vary by course. For most programs, a passion for the subject and a willingness to learn are the primary requirements. Some advanced courses may require prior knowledge or experience, which will be specified in the course details. If you have specific questions about prerequisites, feel free to contact us.
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
                    <Accordion.Item eventKey="10">
                        <Accordion.Header>What type of certification will I receive upon completion?</Accordion.Header>
                        <Accordion.Body>
                            Upon successful completion of your program, you will receive a National Vocational Qualification(NVQ) from Level 1 to Level 3. Our certificates are recognized by industry professionals and employers, helping you stand out in the job market.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </div>
    )
}

export default FAQs