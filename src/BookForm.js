import { Formik } from "formik";
import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

const BookForm = () => {
    return (
        <form>
            <label>
                Title:
                <input type="text" name="title" />
            </label>
        </form>  
    )
}

export default BookForm;