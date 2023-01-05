import React from 'react'
import { Nav, NavDropdown, NavLink } from 'react-bootstrap'

const SubCatagories = (props) => {
    const SubCatagories = props.children.length > 0 ? (
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
            <Nav id='catagories' className="p-3">{SubCatagories}</Nav>
        </div>
    )
}

export default SubCatagories