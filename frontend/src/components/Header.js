import React, { useState } from 'react';
import {
  Navbar,
  NavbarBrand,
  Collapse,
  Nav,
  NavItem,
  NavLink,
  NavbarToggler
} from 'reactstrap';
import { Link } from 'react-router-dom';

export default function Header() {
    const [open, setOpen] = useState(false);
    const toggle = () => {
        setOpen(!open);
    };
    return (
        <div>
            <Navbar color="light" light expand="md">
                <div className='container'>
                    <NavbarBrand tag={Link} to="/">Minhas Séries</NavbarBrand>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={open} navbar>
                        <Nav className="ml-auto">
                            <NavItem>
                                <NavLink tag={Link} to="/series/new">Nova Série</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={Link} to="/genres">Gêneros</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </div>
            </Navbar>
        </div>
    );
}