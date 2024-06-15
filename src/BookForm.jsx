import { useState } from "react";
import { Formik, Form, Field } from "formik";
import { Button, Modal, ModalBody, ModalHeader, ModalFooter } from "reactstrap";


const BookForm = () => {
    const [formDisplay, setFormDisplay] = useState(false);
    const toggle = () => setFormDisplay(!formDisplay);

    return (
        <div>
        <Button color="danger" onClick={toggle}>
            Recommend A Book    
        </Button>

        <Modal>
            <ModalHeader>            
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
                                type="text"
                                placeholder="Select Genres"
                            >
                            </Field>
                            <Button type="submit">Submit</Button>
                        </Form>
                    </Formik>
            </ModalBody>
            <ModalFooter>
                <Button onClick={toggle}>Close</Button>
            </ModalFooter>
        </Modal>
        </div>
    )
}

export default BookForm;
