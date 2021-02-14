import React from 'react'
import { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap'
import { Navbaritems } from '../../assets/interfaces/inavigation'
import Expands from '../../components/navigation/Expand'


const useStyles = makeStyles((theme) => ({
  root: {
    color: '#808080',
  }
}))

const Navigation = (props: any) => {
  const { navigation } = props
  const [isOpen, setIsOpen] = useState(false)
  const [checked, setExpanded] = useState(false)
  const [txtColor, setColor] = useState('none')
  const toggle = () => setIsOpen(!isOpen)
  const classes = useStyles()
  
  const handleChick = () => {
    setExpanded((prev) => !prev)
  }

  useEffect(() => {
    document.addEventListener("scroll", () => {
      const bgColor = window.scrollY < 100 ? "none":"#ffd9ccc7";
      setColor(bgColor)
    })
  })
  
  return (
    <>
      <Navbar expand="md" light className="custom-nav" style={{ background: txtColor }} sticky="top">
        <NavbarBrand href="/">
          <img
            src={navigation.logo[0].url}
            height="30"
            className="d-inline-block align-top"
            alt="Test"
          />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} className={classes.root}/>
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            {
              navigation.navbar.map((e:Navbaritems,index:number) => {
                if(e.label.toLowerCase() !== 'home'){
                  return(
                    <NavItem key={index} onClick={handleChick} className="pointer-cursor">
                      <NavLink >{e.label}</NavLink>
                    </NavItem>
                  )
                }
              })
            }
          </Nav>
          <Nav color="dark" navbar>
            <NavLink>Register</NavLink>
            <NavLink>Sign In</NavLink>
          </Nav>
        </Collapse>
      </Navbar>
      <Expands checked={checked}/>
    </>
  );
}
export default Navigation;