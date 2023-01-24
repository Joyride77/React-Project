import React from 'react'
import SubMenu from './SubMenu'
import Navbar from 'react-bootstrap/Navbar';
import { catagories, menus } from '../data/menus';
import SubCatagories from './SubCatagories';

const MainMenu = () => {

    const SubCatagory = catagories.map((catagory, index) => {
        return (
            <SubCatagories key={index} title={catagory.title} position={catagory.position} children={catagory.children} />
        )
    })

    const SubMenus = menus.map((menu, index) => {
        return (
            <SubMenu key={index} title={menu.title} position={menu.position} children={menu.children} />
        )
    })

    return (
        <div className='row d-flex justify-content-between align-items-center'>
            <div className="col-3">
                <Navbar className='p-0 my-orange-btn'>
                    {SubCatagory}
                </Navbar>
            </div>
            <div className="col">
                <Navbar className='p-0'>
                    {SubMenus}
                </Navbar>
            </div>
            <div className="col-2 fw-bold free-return text-end">
                <p className='m-0'>30 Days Free Return</p>
            </div>
        </div>
    )
}

export default MainMenu