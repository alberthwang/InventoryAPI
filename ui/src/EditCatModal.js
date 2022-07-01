import React, {Component} from 'react';
import { Modal, Button, Row, Col, Form, ModalHeader, ModalTitle, ModalBody, FormLabel, FormGroup, FormControl, ModalFooter } from 'react-bootstrap';

export class EditCatModal extends Component{
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        fetch(process.env.REACT_APP_API+'category',{
            method:'PUT',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                CategoryId:event.target.CategoryId.value,
                CategoryName:event.target.CategoryName.value
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
                            Edit Category
                        </ModalTitle>
                    </ModalHeader>

                    <ModalBody>
                        <Row>
                            <Col sm={6}>
                                <Form onSubmit={this.handleSubmit}>
                                    <FormGroup controlId="CategoryId">
                                        <FormLabel>CategoryId</FormLabel>
                                        <FormControl type="text" name="CategoryId" required disabled defaultValue={this.props.catid} placeholder="CategoryName"></FormControl>

                                    </FormGroup>
                                    <FormGroup controlId="CategoryName">
                                        <FormLabel>CategoryName</FormLabel>
                                        <FormControl type="text" name="CategoryName" required defaultValue={this.props.catname} placeholder="CategoryName"></FormControl>

                                    </FormGroup>
                                    <FormGroup>
                                        <Button variant="primary" type="submit">
                                            Update Category
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
