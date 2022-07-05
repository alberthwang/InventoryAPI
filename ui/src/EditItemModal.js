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
                ItemName:event.target.ItemName.value
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
                                    <FormGroup controlId="CategoryId">
                                        <FormLabel>ItemId</FormLabel>
                                        <FormControl type="text" name="ItemId" required disabled defaultValue={this.props.itemid} placeholder="ItemId"></FormControl>

                                    </FormGroup>
                                    <FormGroup controlId="ItemName">
                                        <FormLabel>ItemName</FormLabel>
                                        <FormControl type="text" name="ItemName" required defaultValue={this.props.itemname} placeholder="ItemName"></FormControl>

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
