import React, {Component} from 'react';
import { Modal, Button, Row, Col, Form, ModalHeader, ModalTitle, ModalBody, FormLabel, FormGroup, FormControl, ModalFooter } from 'react-bootstrap';

export class EditItemModal extends Component{
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        fetch(process.env.REACT_APP_API+'item',{
            method:'PUT',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                ItemId:event.target.ItemId.value,
                ItemName:event.target.ItemName.value,
                Category:event.target.Category.value,
                Quantity:event.target.Quantity.value,
                Details:event.target.Details.value,
                AmazonLink:event.target.AmazonLink.value,
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
                            Edit Item
                        </ModalTitle>
                    </ModalHeader>

                    <ModalBody>
                        <Row>
                            <Col sm={6}>
                                <Form onSubmit={this.handleSubmit}>
                                    <FormGroup controlId="ItemyId">
                                        <FormLabel>ItemId</FormLabel>
                                        <FormControl type="text" name="ItemId" required disabled defaultValue={this.props.itemid} placeholder="ItemId"></FormControl>

                                    </FormGroup>
                                    <FormGroup controlId="ItemName">
                                        <FormLabel>ItemName</FormLabel>
                                        <FormControl type="text" name="ItemName" required defaultValue={this.props.itemname} placeholder="ItemName"></FormControl>
                                    </FormGroup>
                                    <FormGroup controlId="Category">
                                        <FormLabel>Category</FormLabel>
                                        <FormControl type="text" name="Category" required defaultValue={this.props.cat} placeholder="Category"></FormControl>
                                    </FormGroup>
                                    <FormGroup controlId="Quantity">
                                        <FormLabel>Quantity</FormLabel>
                                        <FormControl type="text" name="Quantity" required defaultValue={this.props.quantity} placeholder="Quantity"></FormControl>
                                    </FormGroup>
                                    <FormGroup controlId="Details">
                                        <FormLabel>Details</FormLabel>
                                        <FormControl type="text" name="Details" required defaultValue={this.props.detail} placeholder="Details"></FormControl>
                                    </FormGroup>
                                    <FormGroup controlId="AmazonLink">
                                        <FormLabel>Amazon Link</FormLabel>
                                        <FormControl type="text" name="AmazonLink" required defaultValue={this.props.amzl} placeholder="AmazonLink"></FormControl>
                                    </FormGroup>
                                    <FormGroup>
                                        <Button variant="primary" type="submit">
                                            Update Item
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
