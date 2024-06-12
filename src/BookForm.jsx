import { Formik, Form, FormGroup, useField } from "formik";
import { Button, Label, Input } from "reactstrap";

const BookForm = () => {
    return (
        <Formik>
            <Form>
                <MyTextInput
                    label="Title"
                    name="title"
                    type="text"
                    placeholder="Title"
                >
                </MyTextInput>
                <Button type="submit">Submit</Button>
            </Form>
        </Formik>

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