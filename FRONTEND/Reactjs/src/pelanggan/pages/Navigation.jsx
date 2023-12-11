import { Navbar, Container,Dropdown, ButtonGroup, Button } from "react-bootstrap";
import logo1 from "./../asset/Vector.png";
import person1 from "./../asset/person.jpeg";
const Navigation = () =>{
    return(
      <Navbar className=" px-5 shadow p-3 mb-5 ">
        <Container>
        <Navbar.Brand href="#home">
            <img
              src={logo1}
              width="50%"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Navbar.Collapse className="justify-content-end rounded-5 " >
          <Dropdown as={ButtonGroup} >
            <Button variant="light" className="rounded-start-pill border-end-0 bg-white border border-dark-subtle">Halo Dazzlink <img src={person1} alt="" width="25rem"  height="25rem"  className="bg-white  align-top  rounded-circle "  /></Button>

            <Dropdown.Toggle split variant="light" className="rounded-end-pill bg-white border border-dark-subtle border-start-0" id="dropdown-split-basic" />

            <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
            </Dropdown>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}
export default Navigation;