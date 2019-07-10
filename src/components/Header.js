import React,{Component} from 'react'

//npm install --save reactstrap
import {
    Button,
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
    Alert } from 'reactstrap'


class Header extends Component{
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false,
          visible: true
        };
        this.onDismiss = this.onDismiss.bind(this);
      }
      toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }
      onDismiss() {
        this.setState({ visible: false });
      }

      render(){
        return(
            <div>
            <Navbar color="light" light expand="md">
              <NavbarBrand href="/">Smartgear</NavbarBrand>
              <NavbarToggler onClick={this.toggle} />
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                <NavItem className="my-2">
                    Lorem Ipsum
                  </NavItem>
                  <NavItem className="my-2">
                  Lorem Ipsum                    
                  </NavItem>
                    <UncontrolledDropdown nav inNavbar>
                              <DropdownToggle nav caret>
                                Lorem Ipsum
                              </DropdownToggle>
                              <DropdownMenu right>
                                <DropdownItem>
                                    Lorem Ipsum                                                                 
                                </DropdownItem>
                                <DropdownItem>
                                    Lorem Ipsum
                                </DropdownItem>
                                <DropdownItem divider />
                                <Button className="dropdown-item btn btn-warning">Logout</Button>
                              </DropdownMenu>
                            </UncontrolledDropdown>
                            </Nav>
              </Collapse>
            </Navbar>
          </div>
        )
    }
}

export default Header