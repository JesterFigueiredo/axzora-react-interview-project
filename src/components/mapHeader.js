import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function FormExample() {
    const navBarStyle = {
        height:'50px', 
        width:'100%', 
        backgroundColor:"green", 
        padding:'10px', 
        display:'flex', 
        justifyContent:'space-between'
    }
    
  return (
    <Navbar style={navBarStyle}  className="bg-body-tertiary justify-content-between">

        <div>
            <img width="50" height="50" src="https://img.icons8.com/ios/50/stack.png" alt="stack"/><span> Data Portal</span>
        </div>

        <Form inline>
            <InputGroup>
            <Form.Control
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
            />
            </InputGroup>
        </Form>

        <div style={{padding:'10px'}}>
            <img width="50" height="50" src="https://img.icons8.com/material/24/box--v1.png" alt="box--v1"/>
            <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/user-male-circle.png" alt="user-male-circle"/>
        </div>

    </Navbar>
  );
}

export default FormExample;