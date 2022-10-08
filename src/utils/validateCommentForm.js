import { validateYupSchema } from "formik";

const validateCommentForm = (value) => {
    const errors = {};

    if (!value.rating){
        errors.rating = 'Required'
    }

    if (value.author.length < 2 ){
        errors.author = 'Must be at least 2 characters'
    } else if (value.author.length > 15 ){
        errors.author = 'Must be 15 characters or less'
    }
    
    return errors;
};

export default validateCommentForm;