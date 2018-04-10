import React, {Component} from 'react';
import { Button, Nav, Navbar, NavDropdown, MenuItem, NavItem } from 'react-bootstrap';
import '../style/headerNavbar.css';
import {StyleSheet, css} from 'aphrodite';

const styles = StyleSheet.create({
  navbar : {
    width: '100%',
    marginRight: '0px',
    marginLeft: '0px',
    '> .container' :{
      width: '100%'
    }
  }
})

export default class HeaderNavbar extends Component{

  constructor(props){
    super(props);
    this.state = {
      brand: this.props.brand,
      rightItems: this.props.rightItems,
    }
    this.rightItemsHandler = this.rightItemsHandler.bind(this);
  }


  rightItemsHandler(rightItems){
    return rightItems.map((rightItem) => {
      return (
        <NavItem eventkey={rightItem.key} href={rightItem.link}>
          {rightItem.name}
        </NavItem>
      )
    });
  }

  render(){
    return(
      <Navbar collapseOnSelect className={css(styles.navbar)}>
        <Navbar.Header>
          <Navbar.Brand>
            <a href={this.state.brand.link}>
            <img alt="Brand" width="30px" height="30px"
              src="https://www.everlastingwardrobe.com//assets/main-set-red-logo-d00442a3d827f2b28135730678f6d03bb452c172932451fae6be50003aa0884d.svg"/>
            {this.state.brand.name}</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight className>
            {this.rightItemsHandler(this.state.rightItems)}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }

}
