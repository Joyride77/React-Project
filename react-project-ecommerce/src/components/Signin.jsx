import logo from '../images/hero/logo.svg'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const SignIn = () => {
    return (
        <div className='row d-flex align-items-center justify-content-between p-3'>
            <div className="col">
                <div className="row d-flex align-items-center justify-content-start">
                    <div className="col-3">
                        <img src={logo} alt="log" />
                    </div>
                    <div id='search-hero' className="col-6">
                        <InputGroup>
                            <Form.Control
                                placeholder="Search any things"
                                aria-label="Search any things"
                                aria-describedby="basic-addon2"
                            />
                            <Button variant="outline-secondary" id="button-addon2">
                                Search
                            </Button>
                        </InputGroup>
                    </div>
                </div>
            </div>
            <div className="col-3">
                <div className="row">
                    <div className="col-6 text-end">
                        <p className='mb-0 fw-semibold'><PersonOutlineOutlinedIcon /> Sign In</p>
                    </div>
                    <div className="col-3 text-end">
                        <p className='mb-0'><FavoriteBorderIcon /></p>
                    </div>
                    <div className="col-3 text-end">
                        <p className='mb-0'><ShoppingCartOutlinedIcon /></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignIn