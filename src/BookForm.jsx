import { useState } from "react";
import { Formik, Form, Field } from "formik";
import { Button, Modal, ModalBody, ModalHeader, ModalFooter } from "reactstrap";

const BookForm = () => {
    const [formDisplay, setFormDisplay] = useState(false);
    const toggle = () => setFormDisplay(!formDisplay);

    return (
        <div className="">
            <Button color="danger" onClick={toggle}>
                Recommend A Book    
            </Button>

            <Modal isOpen={formDisplay}>
            <div className="overlay">
            <div className="modalContainer">
                <ModalHeader> 
                    <buttonc className="close-btn"><p>X</p></buttonc>           
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
        </div>
        </Modal>
    </div>
    )
}

export default BookForm;
