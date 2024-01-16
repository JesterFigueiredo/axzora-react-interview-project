import Navbar from 'react-bootstrap/Navbar';

export default function Footer(){
    return(
    <Navbar style={
        {height:'50px', 
        width:'100%', 
        backgroundColor:"green", 
        padding:'10px', 
        display:'flex', 
        alignItems:'center', 
        justifyContent:'center'}}
        >
        <div>
            <p>CopyRight</p>
        </div>
    </Navbar>
    )
}