import React from 'react'
import SubMenu from './SubMenu'
import Navbar from 'react-bootstrap/Navbar';
import { catagories, menus } from '../data/menus';
import SubCatagories from './SubCatagories';

const MainMenu = () => {

    const SubMenus = menus.map(subMenu => {
        return (
            <SubMenu title={subMenu.title} position={subMenu.position} children={subMenu.children} />
        )
    })

    const SubCatagory = catagories.map(SubCatagory => {
        return (
            <SubCatagories title={SubCatagory.title} position={SubCatagory.position} children={SubCatagory.children} />
        )
    })

    return (
        <div className='row d-flex justify-content-between align-items-center'>
            <div className="col-3">
                <Navbar className='p-0'>
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