import React, { Component } from "react";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Button,
  Form,
  FormGroup,
  FormText,
  Input,
} from "reactstrap";

import "../App.css";

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    };
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  render() {
    return (
      <>
        <Navbar light expand="md" style={{ backgroundColor: "#1B262D" }}>
          <NavbarBrand
            style={{ color: "#FFFFFF" }}
            className="mr-auto"
            href="/"
          >
            Bitfinex
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink
                  style={{ color: "#FFFFFF", fontSize: "15px" }}
                  href="https://trading.bitfinex.com/trading"
                  target="_blank"
                >
                  Trading
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  style={{ color: "#FFFFFF", fontSize: "15px" }}
                  href="https://trading.bitfinex.com/t/BTCF0:USTF0"
                  target="_blank"
                >
                  Derivatives
                </NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle
                  nav
                  caret
                  style={{ color: "#FFFFFF", fontSize: "15px" }}
                >
                  Funding
                </DropdownToggle>
                <DropdownMenu right style={{ background: "#1B262D" }}>
                  <DropdownItem style={{ color: "#FFFFFF" }}>
                    Funding
                  </DropdownItem>
                  <DropdownItem style={{ color: "#FFFFFF" }}>
                    Lending Pro
                  </DropdownItem>

                  <DropdownItem style={{ color: "#FFFFFF" }}>
                    Borrow
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <NavLink
                  style={{ color: "#FFFFFF", fontSize: "15px" }}
                  href="https://trading.bitfinex.com/otc"
                  target="_blank"
                >
                  OTC
                </NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle
                  nav
                  caret
                  style={{ color: "#FFFFFF", fontSize: "15px" }}
                >
                  More
                </DropdownToggle>
                <DropdownMenu right style={{ background: "#1B262D" }}>
                  <DropdownItem style={{ color: "#FFFFFF" }}>
                    Funding
                  </DropdownItem>
                  <DropdownItem style={{ color: "#FFFFFF" }}>
                    Lending Pro
                  </DropdownItem>

                  <DropdownItem style={{ color: "#FFFFFF" }}>
                    Borrow
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
          <Nav>
            <Form>
              <FormGroup>
                <Input
                  style={{
                    height: "29px",
                    width: "148px",
                    marginTop: "9px",
                    background: "#273640",
                  }}
                  type="email"
                  name="email"
                  id="exampleEmail"
                />
              </FormGroup>
            </Form>
            <NavItem className="navbar-right">
              <NavLink
                style={{ color: "#FFFFFF", fontSize: "15px" }}
                href="https://github.com/reactstrap/reactstrap"
              >
                LOG IN
              </NavLink>
            </NavItem>
            <NavItem className="navbar-right" style={{ marginRight: "10px" }}>
              <Button
                outline
                style={{ border: "1px solid #ffffff", color: "#ffffff" }}
              >
                {" "}
                Tour
              </Button>
            </NavItem>

            <NavItem className="navbar-right">
              <Button
                outline
                style={{ border: "1px solid #52A781", color: "#52A781" }}
              >
                Signup
              </Button>
            </NavItem>

            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle
                nav
                caret
                style={{ color: "#FFFFFF", fontSize: "15px" }}
              >
                More
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Funding</DropdownItem>
                <DropdownItem>Lending Pro</DropdownItem>

                <DropdownItem>Borrow</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Navbar>
      </>
    );
  }
}
export default Header;
