
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

export default function PortalCard({portalType}) {

    const paddingStyle = {padding:'10px'}
    const cardImageStyle = {
        width:'300px', 
        height:'300px', 
        padding:'10px'
    }

  return (
    <Card style={{ width: '18rem', display:'flex', alignItems:'center', flexDirection:'column'}}>
      <Card.Img style={cardImageStyle} variant="top" src='https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80' />
      <Card.Body style={paddingStyle}>
        <Card.Title style={paddingStyle}>{portalType} Portal</Card.Title>
        <Button variant="primary" size="lg"><Link to={'/map'}>Go</Link></Button>
      </Card.Body>
    </Card>
  );
}
