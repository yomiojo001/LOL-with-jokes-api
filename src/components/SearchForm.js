import React from 'react';
import { Container, FormGroup, Form, Input, Button } from 'reactstrap';



const SearchForm = props =>{
    return(
        <Container>
            <Form onSubmit={props.onFormSubmit} className="mt-3">
            <FormGroup>
                <Input type="text" placeholder="Enter search term...." onChange={ props.onSearchValueChange } />
            </FormGroup>
            <Button className="mr-2" disabled={props.isSearching}>Search</Button>
            <Button onClick={props.onSingleSearchClick} disabled={props.isSearching}>Tell me a joke!</Button>
            </Form>
            
        </Container>
    )
}

export default SearchForm;