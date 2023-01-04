
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
function LoginForm(props) {
    const formElements = ['Email', 'Password'];
    const [formData, setFormData] = useState(
        {
            email: "",
            password: ""
        }
    )
    const router = useRouter();
    //const navigate = useNavigate();
    function handleNavigate() {
       
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

    // function handleSubmit(event) {
    //     event.preventDefault();
    //     logInWithEmailAndPassword(formData.email, formData.password);
    // };

    // function handleGoogleLogin() {
    //     logInWithGoogle();
    // }

    return (
        <Form style={{ backgroundColor: 'white' }} className='w-75 mx-auto'>
            <div style={{ backgroundColor: '#ff3007' }}>
                <h2 className='py-3 text-center' style={{ color: 'white', fontWeight: '700' }}>SIGN IN</h2>
            </div>
            <div className='p-5'>

                {formElements.map((element, index) => (
                    <Form.Group key={`LoginForm${index}`} className='mb-3' controlId={`LoginForm${element}`}>
                        {/* grey bold label */}
                        <Form.Label style={{ color: 'gray', fontWeight: '700' }}>{element}</Form.Label>
                        <Form.Control
                            className='rounded-0 py-2'
                            type={element === 'Password' ? 'password' : 'text'}
                            placeholder={`Your ${element}`}
                            name={element.toLowerCase()}
                            onChange={handleChange}
                            value={formData[element.toLowerCase()]}
                        />
                    </Form.Group>
                ))}
                {/* checkbox */}
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Keep me signed in" />
                </Form.Group>

                <Button className=" py-2 px-5 fw-bold rounded-0" variant="dark" type='submit' style={{ backgroundColor: '#ff3007', border: 'none' }}>
                    Sign In
                </Button>
                <p className='d-flex align-items-center gap-2 my-2'>
                    <img src="https://img.icons8.com/ios-glyphs/90/00000/user--v1.png" width={20} height={20} />
                    Dont have an account? <a href="/signup" style={{ textDecoration: 'none' }}>Sign Up</a>
                </p>
                <p className='d-flex align-items-center gap-2 my-2'>
                    <img src="https://img.icons8.com/ios-glyphs/30/null/lock--v1.png" width={20} height={20} />
                    <a href="/forgotpassword" style={{ textDecoration: 'none' }}>Forgot Password?</a>
                </p>
                <div>
                    {/* lines on sides OR connect with */}
                    <div className='d-flex justify-content-between align-items-center'>
                        <div className='border-bottom' style={{ width: '30%' }}></div>
                        <p className='text-center' style={{ color: 'gray' }}>Or connect with</p>
                        <div className='border-bottom' style={{ width: '30%' }}></div>
                    </div>
                    <div className='bg-light float' style={{width:'fit-content'}}>
                       
                        <Button className=" py-2 px-5 fw-bold rounded-0" i>
                            Google
                        </Button>
                    </div>
                </div>
            </div>
        </Form >
    )

};

export default LoginForm;