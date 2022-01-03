import {FormControl, Button, Container, Form, Navbar} from 'react-bootstrap'
import Rating from './rating';
function Search(props) {

    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container fluid>
                    
                        <Form className="d-flex">
                            <FormControl
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                                onChange={(e) => props.setSearch(e.target.value)} value={props.search}
                            />
                            <Button variant="outline-success">Search</Button>
                            <Rating rate={props.rate} setRate={props.setRate} ></Rating>
                        </Form>
                </Container>
            </Navbar>
        </div>
    )
}
export default Search