import Navbar from 'react-bootstrap/Navbar';

export default function Header(){
    return(
        <Navbar style={
            {height:'50px', 
            width:'100%', 
            backgroundColor:"green", 
            padding:'10px'}}
            >
            <img width="50" height="50" src="https://img.icons8.com/ios/50/stack.png" alt="stack"/><span> Data Portal</span>
        </Navbar>
    )
}