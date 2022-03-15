import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Toast() {
    const notify = () => toast("Wow so easy!");

    return (
        <>
            <button onClick={notify}>Notify!</button>
        </>
    )
}