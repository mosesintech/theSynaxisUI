import React from 'react';

import {
    CheckboxField,
    EmailField,
    PasswordField,
    RadioField,
    SelectField,
    TextAreaField,
    UploadField,
} from './formFields';

export default function Form() {
    return (
        <>
            <CheckboxField />
            <EmailField />
            <PasswordField />
            <RadioField />
            <SelectField />
            <TextAreaField />
            <UploadField />
        </>
    )
}