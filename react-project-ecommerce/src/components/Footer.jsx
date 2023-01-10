import React from 'react'
import { footerdata } from '../data/menus'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import TelegramIcon from '@mui/icons-material/Telegram';
import Call from '@mui/icons-material/Call';
import logoBlue from '../images/hero/logoBlue.svg'

const Footer = () => {
    const foot = footerdata.map(data => {
        const paragraphs = data.subSection.map(d => {
            return (
                <p>{d}</p>
            )
        })
        return (
            <div className="row">
                <div className="col">
                    <h6>{data.sectionName}</h6>
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
                <div className="col">
                    <img src={logoBlue} alt="logo" />
                    <p>64 st james boulevard hoswick , ze2 7zj</p>
                    <hr />

                    <div className="row">
                        <div className="col">
                            <img src="" alt="" />
                        </div>
                        <div className="col">
                            <img src="" alt="" />
                        </div>
                        <div className="col">
                            <img src="" alt="" />
                        </div>

                    </div>
                </div>
                <div className="col">
                    <div>{foot}</div>
                </div>
            </div>

        </div>
    )
}

export default Footer