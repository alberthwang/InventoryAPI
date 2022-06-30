import React,{Component} from 'react';
import { Table } from 'react-bootstrap';

export class Category extends Component{

    constructor(props){
        super(props);
        this.state={cats:[]}
    }

    refreshList(){
        fetch(process.env.REACT_APP_API+'category')
        .then(response=>response.json())
        .then(data=>{this.setState({cats:data})});
    }

    componentDidMount(){
        this.refreshList();
    }

    componentDidUpdate(){
        this.refreshList();
    }

    render(){
        const {cats}= this.state;
        return(
            <div >
                <Table className='mt-4' striped bordered hover size='sm'>
                    <thead>
                        <tr>
                            <th>CategoryId</th>
                            <th>CategoryName</th>
                            <th>Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cats.map(cat=>
                            <tr key={cat.CategoryId}>
                                <td>{cat.CategoryId}</td>
                                <td>{cat.CategoryName}</td>
                                <td>Edit/Delete</td>
                            </tr>)}
                    </tbody>
                </Table>
            </div>
        )
    }
    
}