import React from 'react'
import { Container, Form, InputGroup } from 'react-bootstrap'
import { useState } from 'react';
import axios from 'axios';

const Searchbar = () => {
    const [dictword, setDictword] = useState('');
    const [meaning, setMeaning] = useState('');
    const [counting, setCounting] = useState(0);
    const submitHandler = async () => {
        try{
            const response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${dictword}`);
            const data = await response.data;
            if (data.length > 0) {
                const firstWord = data[0];
                let meaningList = '';
                let counter = 1;
                firstWord.meanings.forEach((meaning) => {
                    meaning.definitions.forEach((definition) => {
                        meaningList += `(${counter})\nPart of Speech: ${meaning.partOfSpeech}\nDefinition: ${definition.definition}\nExample: ${definition.example || 'N/A'}\n\n`;
                        counter++;
                    });
                });
                setMeaning(meaningList);
                setCounting(counter - 1 );
            } else {
                setMeaning('No definition found.');
            }
        }
        catch(err)
        {
            console.log(err);
        }
    };
    return (
        <>
            <Container className='mt-4' style={{ width: '50%' }}>
                <Form.Label><h2>Search your word</h2></Form.Label>
                <InputGroup>
                    <Form.Control
                        onChange={(e)=>setDictword(e.target.value)}
                        className='p-3'
                        placeholder='ex. book, chocolate, chicken'
                    />
                    <InputGroup.Text className='bg-primary text-white' style={{ cursor: 'pointer' }} onClick={submitHandler}>Search</InputGroup.Text>
                </InputGroup>
            </Container>
            {meaning && (
                <Container className='mt-4' style={{ width: '50%' }}>
                    <h2>Meanings</h2>
                    <pre>{meaning}</pre>
                    <p>Total Definitions: {counting}</p>
                </Container>
            ) }
        </>
    )
}

export default Searchbar