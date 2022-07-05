import React,{Component} from 'react';
import { Table } from 'react-bootstrap';

import {Button, ButtonToolbar} from 'react-bootstrap';
import { AddItemModal } from './AddItemModal';
import { EditItemModal } from './EditItemModal';

export class Item extends Component{

    constructor(props){
        super(props);
        this.state={items:[], addModalShow:false, editModalShow:false}
    }

    refreshList(){
        fetch(process.env.REACT_APP_API+'item')
        .then(response=>response.json())
        .then(data=>{this.setState({items:data})});
    }

    componentDidMount(){
        this.refreshList();
    }

    componentDidUpdate(){
        this.refreshList();
    }

    deleteItem(itemid){
        if(window.confirm("Are you sure?")){
            fetch(process.env.REACT_APP_API+'item/'+itemid,{
                method:'DELETE',
                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json'
                }
            });
        }

    }

    render(){
        const {items, itemid, itemname}= this.state;
        let addModalClose=()=>this.setState({addModalShow:false});
        let editModalClose=()=>this.setState({editModalShow:false});
        return(
            <div >
                <Table className='mt-4' striped bordered hover size='sm'>
                    <thead>
                        <tr>
                            <th>ItemId</th>
                            <th>ItemName</th>
                            <th>Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map(item=>
                            <tr key={item.ItemId}>
                                <td>{item.ItemId}</td>
                                <td>{item.ItemName}</td>
                                <td> <ButtonToolbar>
                                    <Button className="mr-2" variant="info" 
                                    onClick={()=>this.setState({editModalShow:true, itemid:item.ItemId, itemname:item.ItemName})}>
                                        Edit
                                    </Button>
                                    <EditItemModal show={this.state.editModalShow}
                                    onHide={editModalClose}
                                    itemid={itemid}
                                    itemname={itemname}/>
                                    <Button className="mr-2" variant="danger" 
                                    onClick={()=>this.deleteItem(item.ItemId)}>
                                        Delete
                                    </Button>
                                    
                                    
                                    </ButtonToolbar></td>
                            </tr>)}
                    </tbody>
                </Table>

                <ButtonToolbar>
                    <Button variant='primary' onClick={()=>this.setState({addModalShow:true})}>
                        Add Item
                    </Button>
                    <AddItemModal show={this.state.addModalShow} 
                    onHide={addModalClose}>
                    </AddItemModal>
                </ButtonToolbar>

            </div>
        )
    }
    
}