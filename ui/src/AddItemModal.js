import React, {Component} from 'react';
import { Modal, Button, Row, Col, Form, ModalHeader, ModalTitle, ModalBody, FormLabel, FormGroup, FormControl, ModalFooter } from 'react-bootstrap';

export class AddItemModal extends Component{
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        fetch(process.env.REACT_APP_API+'item',{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                ItemId:null,
                ItemName:event.target.ItemName.value,
                Category:event.target.Category.value,
                Quantity:event.target.Quantity.value,
                Details:event.target.Details.value,
                AmazonLink:event.target.AmazonLink.value,
                InsertBy:event.target.InsertBy.value,
                InsertDate:null,
                LastUpdated:null
            })
        })
        .then(res=>res.json())
        .then((result)=>{
            alert(result);
        },
        (error)=>{
            alert('Failed');
        })
                

    }

    render(){
        return(
            <div className ="container">
                <Modal
                {...this.props}
                size="lg"
                aria-labelledby="contained-modal-vcenter"
                centered>
                    <ModalHeader closeButton>
                        <ModalTitle id="contained-modal-title-vcenter">
                            Add Item
                        </ModalTitle>
                    </ModalHeader>

                    <ModalBody>
                        <Row>
                            <Col sm={6}>
                                <Form onSubmit={this.handleSubmit}>
                                    <FormGroup controlId="ItemName">
                                        <FormLabel>Item Name</FormLabel>
                                        <FormControl type="text" name="ItemName" required placeholder="ItemName"></FormControl>
                                        <FormLabel>Category</FormLabel>
                                        <FormControl type="text" name="Category" required placeholder="Category"></FormControl>
                                        <FormLabel>Quantity</FormLabel>
                                        <FormControl type="text" name="Quantity" required placeholder="Quantity"></FormControl>
                                        <FormLabel>Details</FormLabel>
                                        <FormControl type="text" name="Details" required placeholder="Details"></FormControl>
                                        <FormLabel>Amazon Link</FormLabel>
                                        <FormControl type="text" name="AmazonLink" required placeholder="AmazonLink"></FormControl>
                                        <FormLabel>Insert By</FormLabel>
                                        <FormControl type="text" name="InsertBy" required placeholder="InsertBy"></FormControl>
                                    </FormGroup>
                                    <FormGroup>
                                        <Button variant="primary" type="submit">
                                            Add Item
                                        </Button>
                                    </FormGroup>
                                </Form>
                            </Col>
                        </Row>
                    </ModalBody>

                    <ModalFooter>
                        <Button variant="danger" onClick={this.props.onHide}>Close</Button>
                    </ModalFooter>

                </Modal>
            </div>
        )
    }
}
