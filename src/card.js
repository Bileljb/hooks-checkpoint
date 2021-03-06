import {Card, Button} from "react-bootstrap"
import {Link} from 'react-router-dom'
function MCard(props) {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={props.el.posterUrl} />
                <Card.Body>
                    <Card.Title>{props.el.title}</Card.Title>
                    <Card.Text>
                        {props.el.description}
                    </Card.Text>
                    <Card.Text>
                        {props.el.rate}
                    </Card.Text>
                    <Card.Text>
                        {props.el.trailer}
                    </Card.Text>
                    <Card.Text>
                        {props.el.id}
                    </Card.Text>
                    <Link  to={`/details/${props.el.id}`} ><Button variant="primary">Details</Button></Link>
                </Card.Body>
            </Card>
        </div>
    )
}
export default MCard