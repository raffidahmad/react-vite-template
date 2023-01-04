import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
function Signup(props) {
    const formElements = ['Name', 'Email', 'Password'];
    const [isEmployer, setIsEmployer] = useState(false);
    const [formData, setFormData] = useState(
        {
            name: "",
            email: "",
            password: ""
        }
    )
    //const navigate = useNavigate();
    function handleNavigate() {
        //navigate('/admin');
    }

    function handleChange(event) {
        const { name, value, type, checked } = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }

    function handleSubmit(event) {
        event.preventDefault();
        
    };

    
    return (
        <Form onSubmit={handleSubmit} style={{ backgroundColor: 'white' }} className='w-75 mx-auto'>
            <div style={{ backgroundColor: '#ff3007' }}>
                <h2 className='py-3 text-center' style={{ color: 'white', fontWeight: '700' }}>SIGN UP</h2>
            </div>
            <div className='p-5'>
                <div className="rounded-0">
                    <Row className="g-3 pb-3 px-3 mt-0">
                        <Col>
                        
                            <Button onClick={() => setIsEmployer(false)} className="rounded-0 fw-bold w-100" style={{ backgroundColor: isEmployer ? 'gray':'#ff3007',border:'none' }}  >Candidate</Button>
                        </Col>
                        <Col>
                            <Button onClick={() => setIsEmployer(true)} className="rounded-0 fw-bold w-100" style={{ backgroundColor: isEmployer ? '#ff3007':'gray',border:'none' }} >Employer</Button>
                        </Col>
                    </Row>
                </div>

                {formElements.map((element, index) => (
                    <Form.Group key={`SignupForm${index}`} className='mb-3' controlId={`LoginForm${element}`}>
                        {/* <Form.Label>{element}</Form.Label> */}
                        <Form.Control
                            className='rounded-0'
                            type={element === 'Password' ? 'password' : 'text'}
                            placeholder={element}
                            value={formData[element.toLowerCase()]}
                            name={element.toLowerCase()}
                            onChange={handleChange}
                            autoComplete="off"
                        />
                    </Form.Group>
                ))}
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="I agree to the term and conditions." required/>
                </Form.Group>
                <Button className=" py-2 px-5 fw-bold rounded-0" variant="dark" type='submit' style={{ backgroundColor: '#ff3007', border: 'none' }}>
                    Register
                </Button>
                <p className='d-flex align-items-center gap-2 my-2'>
                    <img src="https://img.icons8.com/ios-glyphs/90/00000/user--v1.png" width={20} height={20} />
                    Already have an account? <a href="/login" style={{ textDecoration: 'none' }}>Login</a>
                </p>
                <p className='d-flex align-items-center gap-2 my-2'>
                    <img src="https://img.icons8.com/ios-glyphs/30/null/lock--v1.png" width={20} height={20} />
                    <a href="/forgotpassword" style={{ textDecoration: 'none' }}>Forgot Password?</a>
                </p>
                <div>
                <div className='d-flex justify-content-between align-items-center'>
                        <div className='border-bottom' style={{ width: '30%' }}></div>
                        <p className='text-center' style={{ color: 'gray' }}>Or connect with</p>
                        <div className='border-bottom' style={{ width: '30%' }}></div>
                    </div>
                    <div className='bg-light float' style={{width:'fit-content'}}>
                        
                        <Button className=" py-2 px-5 fw-bold rounded-0" >
                            Google
                        </Button>
                    </div>
                </div>
            </div>
        </Form >
    );
};

export default Signup;