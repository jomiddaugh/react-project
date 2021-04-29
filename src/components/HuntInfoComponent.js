import React from 'react'
import { Card, CardImg, CardText, CardBody, Breadcrumb, BreadcrumbItem, Button, Modal, ModalHeader, ModalBody, Label } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';


const maxLength = len => val => !val || (val.length <= len);
const minLength = len => val => val && (val.length >= len);

class HarvestForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false,
        };
        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    handleSubmit(values) {
        console.log("Current state is: " + JSON.stringify(values));
        alert("Current state is: " + JSON.stringify(values));
    }

    render() {
        return (
            <div>
                <Button className="btn btn-warning" onClick={this.toggleModal}><i className="fa fa-bullseye fa-lg mr-2"></i>Log Harvest</Button>{' '}
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Log Harvest</ModalHeader>
                    <ModalBody>
                    <LocalForm onSubmit={values => this.handleSubmit(values)}>
                        <div className="form-group">
                        <Label htmlFor="rating">Quantity</Label>
                        <Control.select model=".quantity" id="quantity" name="quantity" className="form-control" defaultValue="1">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>                            
                        </Control.select>
                        </div>
                        <Label htmlFor="author">Your Name</Label>
                        <Control.text model=".author" id="author" name="author" placeholder="Your Name" className="form-control"
                            validators={{
                                minLength: minLength(2),
                                maxLength: maxLength(15),
                                        }}/>
                        <Errors
                                        className="text-danger"
                                        model=".author"
                                        show="touched"
                                        component="div"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be at least 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                    />
                        <Label htmlFor="text">Harvests</Label>
                        <Control.textarea model=".text" id="text" name="text" rows="12" className="form-control">

                        </Control.textarea>
                        <Button type="submit" color="success">Submit</Button>
                    </LocalForm>
                    </ModalBody>
                </Modal>
            </div>
        )
    }

}


    function RenderHunt({hunt}) {
        return (
            <div className="col-md-5 m-1">
                <Card>
                    <CardImg top src={hunt.image} alt={hunt.name} />
                    <CardBody>
                        <CardText>{hunt.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        )
    };

    function RenderHarvests({harvests}) {
        if(harvests){
            return (
                <div classname="col-md-5 m-1">
                    <h4>Harvests</h4>
                    {harvests.map(harvest => {
                        return (
                            <div>
                                <p>{harvest.text}</p>
                                <p>{harvest.author} - {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(harvest.date)))}</p>
                            </div>
                        )
                    })}
                <HarvestForm />
                </div>
            )
        }
                        return <div />
    }
    function HuntInfo(props) {
        if (props.hunt) {
            return (
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Breadcrumb>
                                <BreadcrumbItem><Link to="/location">Hunt Locations</Link></BreadcrumbItem>
                                <BreadcrumbItem active>{props.hunt.name}</BreadcrumbItem>
                            </Breadcrumb>
                            <h2>{props.hunt.name}</h2>
                            <hr />
                        </div>
                    </div>
                    <div className="row">
                        <RenderHunt hunt={props.hunt} />
                        <RenderHarvests harvests={props.harvests} />
                    </div>
                </div>
            );
        }
        return <div />;
    }
    
export default HuntInfo;