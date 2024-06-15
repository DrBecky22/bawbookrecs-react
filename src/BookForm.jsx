import { useState } from "react";
import { Formik, Form, Input } from "formik";
import { Button, Modal, ModalBody, ModalHeader } from "reactstrap";


const BookForm = () => {
    const [formDisplay, setFormDisplay] = useState(false);
    const toggle = () => setFormDisplay(!formDisplay);

    return (
        <div>
        <Button color="success" onClick={()=> setFormDisplay(toggle) }>
            Recommend A Book    
        </Button>

        <Modal>
            <ModalHeader>            
                <h2>Recommend A Book</h2>
            </ModalHeader>
            <ModalBody>
                <Formik>
                        <Form>
                            <Input
                                label="Title"
                                name="title"
                                type="text"
                                placeholder="Title"
                            >
                            </Input>
                            <Input
                                label="Author"
                                name="author"
                                type="text"
                                placeholder="Author"
                            >
                            </Input>
                            <Input
                                label="Genres"
                                name="title"
                                type="text"
                                placeholder="Select Genres"
                            >
                            </Input>
                            <Button type="submit">Submit</Button>
                        </Form>
                    </Formik>
            </ModalBody>
        </Modal>
        </div>
    )
}

export default BookForm;

{/* <Formik>
<Form>
    <FormGroup>
        <Label for="title">Title</Label>
        <Input type="text" name="title" id="title" />
        <Label for="author">Author</Label>
        <Input type="text" name="author" id="author" />
        <Label for="rating">Title</Label>
        <Input type="rating" name="rating" id="rating" />
    </FormGroup>
    <Button type="submit">Submit</Button>
</Form>
</Formik> */}

// above is alternate way to write the code