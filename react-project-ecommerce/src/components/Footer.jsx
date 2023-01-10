import React from 'react'
import { footerdata } from '../data/menus'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import TelegramIcon from '@mui/icons-material/Telegram';
import Call from '@mui/icons-material/Call';
import logoBlue from '../images/hero/logoBlue.svg'
import googleLogo from '../images/logo/googleLogo.svg'
import facebookLogo from '../images/logo/facebookLogo.svg'
import whatsappLogo from '../images/logo/whatsappLogo.svg'

const Footer = () => {
    const foot = footerdata.map(data => {
        const paragraphs = data.subSection.map(d => {
            return (
                <ul>
                    <li>{d}</li>
                </ul>
            )
        })
        return (
            <div className="row footer-shortcut-section">
                <div className="col">
                    <h6 className='fw-semibold ms-2'>{data.sectionName}</h6>
                    {paragraphs}

                </div>
            </div>
        )
    })
    return (
        <div>
            <div className="row subscribe-section d-flex align-items-center justify-content-center my-4">
                <div className="col-4">
                    <h3 className='fw-bold'>Subscribe newsletter</h3>
                </div>
                <div className="col">
                    <InputGroup>
                        <Form.Control
                            placeholder="Email address"
                            aria-label="Email address"
                            aria-describedby="basic-addon2"
                        />
                        <Button id="button-addon2">
                            <TelegramIcon />
                        </Button>
                    </InputGroup>
                </div>
                <div className="col-3">
                    <div className="row d-flex align-items-center justify-content-center">
                        <div className="col d-flex align-items-center justify-content-center">
                            <a href="#"><Call /></a>
                        </div>
                        <div className="col-8 fw-semibold d-flex align-items-center justify-content-center">
                            <p>Call us 24/7 : (+62) 0123 567 789</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-3">
                    <img className='mb-5' src={logoBlue} alt="logo" />
                    <p className='col-10 mb-4'>64 st james boulevard hoswick , ze2 7zj</p>
                    <hr />

                    <div className="row">
                        <div className="col-3">
                            <img src={googleLogo} alt="google" />
                        </div>
                        <div className="col-3">
                            <img src={facebookLogo} alt="facebook" />
                        </div>
                        <div className="col-3">
                            <img src={whatsappLogo} alt="whatsapp" />
                        </div>

                    </div>
                </div>
                <div className="col">
                    <div className='footer-shortcut-section'>{foot}</div>
                </div>
            </div>

        </div>
    )
}

export default Footer