import React from 'react'
import { Nav, NavDropdown, NavLink } from 'react-bootstrap'

const SubMenu = (props) => {
    const subMenu = props.children.length > 0 ? (
        <NavDropdown title={props.title}>
            {props.children.map(child => {
                return (
                    <NavDropdown.Item>
                        {child.title}
                    </NavDropdown.Item>
                )
            })}
        </NavDropdown>
    ) : (
        <NavLink>{props.title}</NavLink>
    );

    return (
        <div>
            <Nav id='sub-menu'>{subMenu}</Nav>
        </div>
    )
}

export default SubMenu