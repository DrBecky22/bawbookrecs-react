import { Formik, Form,  } from "formik";
import React from "react";
import { Button, Label, Input } from "reactstrap";

const BookForm = () => {
    return (
        <Formik>
            <Form>
                <FormGroup>
                    <Label for="title">Title</Label>
                    <Input type="text" name="title" id="title" />
                </FormGroup>
                <Button type="submit">Submit</Button>
            </Form>
        </Formik>

    )
}

export default BookForm;