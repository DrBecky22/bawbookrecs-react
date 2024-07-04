import { useState } from "react";
import { Formik, Form, Field } from "formik";
import { Button, Modal, ModalBody, ModalHeader, ModalFooter } from "reactstrap";

const BookForm = () => {
    const [formDisplay, setFormDisplay] = useState(false);
    const toggle = () => setFormDisplay(!formDisplay);

    return (
        <div>
            <Button onClick={toggle}>
                Recommend A Book    
            </Button>

            <div className="overlay" onClick={toggle}>
                <div className="modal-container">
                    <p className="close-btn" onClick={toggle}>X</p>
                    <h2 className="modal-header">Recommend a book</h2>
                    <input type="text" placeholder="title" required />
                    <button className="submit">Submit</button>
                </div>    
            </div>

        </div>
    )
}

export default BookForm;

{/* <Modal isOpen={formDisplay} className="overlay" onClick={toggle}>
<div className="modalContainer">
        <ModalHeader> 
            <p className="close-btn" onClick={toggle}>X</p>           
            <h2>Recommend A Book</h2>
        </ModalHeader>
        <ModalBody>
            <Formik>
                    <Form>
                        <Field
                            name="title"
                            type="text"
                            placeholder="Title"
                        >
                        </Field>
                        <Field
                            name="author"
                            type="text"
                            placeholder="Author"
                        >
                        </Field>
                        <Field
                            label="Genres"
                            name="title"
                            type="select"
                            placeholder="Select Genres"
                        >
                            <option value="romance"></option>
                            <option value="hero-quest"></option>
                            <option value="sci-fi"></option>
                            <option value="fantasy"></option>
                            <option value="mystery"></option>
                            <option value="biography"></option>
                            <option value="historical-fiction"></option>
                        </Field>

                    </Form>
                </Formik>
        </ModalBody>
        <ModalFooter>
            <div className="btn-container">
            <Button type="submit">Submit</Button>
            <Button onClick={toggle}>Close</Button>
            </div>
        </ModalFooter>
    </div>
</Modal> */}