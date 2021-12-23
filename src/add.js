import { Button, Modal } from "react-bootstrap"
import { useState } from "react";
function Add(props, ) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const [ title, setTitle]= useState('')
    const [ description, setDescription]= useState('')
    const [ rate, setRate]= useState('')
    const [ trailer, setTrailer]= useState('')
    const [ posterurl, setPosterurl]= useState('')

    const addnew = (e)=> {props.setMoviedata([...props.moviedata, {title, description, rate, trailer,posterUrl: posterurl, id: Math.random() }])}
    // 


    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Add a new movie
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <label>Title</label>
                    <input onChange={(e)=> setTitle( e.target.value)  } value={title}   ></input>
                    <label>Description</label>
                    <input onChange={(e)=> setDescription( e.target.value)} value={description}  ></input>
                    <label>Rate</label>
                    <input onChange={(e)=> setRate( e.target.value)}  value={rate} ></input>
                    <label>Trailer</label>
                    <input onChange={(e)=> setTrailer( e.target.value)}  value={trailer} ></input>
                    <label>Poster Url</label>
                    <input onChange={(e)=> setPosterurl(e.target.value)} value={posterurl}  ></input>


                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={ ()=>{ addnew();  handleClose()}   }>
                        Save Changes
                    </Button>
                    <Button  onClick={addnew}>
                        Add
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Add