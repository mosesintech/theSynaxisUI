import React from 'react';
import { useQuery } from 'urql';

import Edges from '../../../layout/Edges'

export default function SingleSaint(props) {
    const GetSaint = `
        query($id: ID!) {
            getSaintQuery(id: $id) {
                id
                name
                life
                born
                died
                feastMonth
                feastDate
                isBc
            }
        }
    `
    const [result, reexecuteQuery] = useQuery({ query: GetSaint, variables: { id: props.id } });
    const { data, fetching, error } = result;

    if (fetching) return (<Edges size="lg"><p>Loading...</p></Edges>);
    if (error) return (
        <Edges size="lg">
            <p>
                ERROR: <pre>{JSON.stringify(error?.message, null, 2)}</pre>
            </p>
        </Edges>
    );
    
    const { id, name, life, born, died, feastMonth, feastDate } = data.getSaintQuery;

    return (
        <>
        <Edges size="lg">
            <h2>Saint Name: {name}. ID: {id}</h2>
            <p>Feast Day: {feastMonth}/{feastDate}</p>
            <p>Born: {born}</p>
            <p>Died: {died}</p>
            <p>Saint Life: {life}</p>
        </Edges>
        </>
    )
}