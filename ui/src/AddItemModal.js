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
                            Add Item
                        </ModalTitle>
                    </ModalHeader>

                    <ModalBody>
                        <Row>
                            <Col sm={6}>
                                <Form onSubmit={this.handleSubmit}>
                                    <FormGroup controlId="ItemName">
                                        <FormLabel>ItemName</FormLabel>
                                        <FormControl type="text" name="ItemName" required placeholder="ItemName"></FormControl>

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
