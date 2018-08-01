const Validator = require('validator');
const isEmpty = require('./is_empty');


module.exports = function validateProfileInput(data){
    let errors = {};

    
    data.handle = !isEmpty(data.handle) ? data.handle : '';
    data.status = !isEmpty(data.status) ? data.status : '';
    data.genres = !isEmpty(data.genres) ? data.genres : '';


    if(!Validator.isLength(data.handle, { min: 2, max: 40 })) {
        errors.handle = 'Handle needs to be between 2 and 40 characters';
    }

    if(Validator.isEmpty(data.handle)) {
        errors.handle = 'Profile handle is required';
    }

    if(Validator.isEmpty(data.status)) {
        errors.status = 'Status field is required';
    }

    if(Validator.isEmpty(data.genres)) {
        errors.genres = 'Genres field is required';
    }

    if(!isEmpty(data.social)) {
        if(!Validator.isURL(data.social)){
            errors.website = 'Not a valid link'
        }
    }

    if(!isEmpty(data.youtube)) {
        if(!Validator.isURL(data.youtube)){
            errors.youtube = 'Not a valid youtube username'
        }
    }

    if(!isEmpty(data.twitter)) {
        if(!Validator.isURL(data.twitter)){
            errors.twitter = 'Not a valid twitter username'
        }
    }

    if(!isEmpty(data.facebook)) {
        if(!Validator.isURL(data.facebook)){
            errors.facebook = 'Not a valid facebook username'
        }
    }

    if(!isEmpty(data.instagram)) {
        if(!Validator.isURL(data.instagram)){
            errors.instagram = 'Not a valid instagram username'
        }
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
};