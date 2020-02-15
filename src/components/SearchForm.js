import React from 'react';
import { Container, FormGroup, Form, Input, Button } from 'reactstrap';



const SearchForm = props =>{
    const onSubmit = event =>{
        event.preventDefault();
        props.onFormSubmit();
    }


    return(
        <Container>
            <Form onSubmit={onSubmit} className="mt-3">
            <FormGroup>
                <Input type="text" placeholder="Enter search term...." onChange={event => props.onSearchValueChange(event.target.value) } />
            </FormGroup>
            <div className="text-center mb-3">
                <Button className="mr-2" disabled={props.isSearching}>Search</Button>
                <Button onClick={props.onSingleSearchClick} disabled={props.isSearching}>Tell me a joke!</Button>
            </div>
            </Form>
            
        </Container>
    )
}

export default SearchForm;