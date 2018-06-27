import React, { Component } from 'react';
import {Card, CardImg, CardImgOverlay, CardBody, CardText, CardTitle} from 'reactstrap';
import {ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';

class DishDetails extends Component{

    constructor(props){
        super(props);
        console.log('Dish details constructor method is invoked..!');
    }

    render(){

        const dish = this.props.dish;
        console.log('Dish details component render method is invkoed');

        if (dish != null){
            const DishComments = this.props.dish.comments.map((comment) => {
                return(
                    <ListGroupItem key={comment.id}>
                        <ListGroupItemHeading>{comment.comment}</ListGroupItemHeading>
                        <ListGroupItemText>{comment.author}{comment.date}</ListGroupItemText>
                    </ListGroupItem>
                )
            });

            return(
                <div className={"row"}>
                    <div className={"col-12 col-md-5 m-1"}>
                        <Card>
                            <CardImg src={dish.image} alt={dish.name} />
                            <CardBody>
                                <CardTitle>{dish.title}</CardTitle>
                                <CardBody>{dish.description}</CardBody>
                            </CardBody>
                        </Card>
                    </div>
                    <ListGroup className={"col-12 col-md-5 m-1"}>
                        <h3>Comments</h3>
                        {DishComments}
                    </ListGroup>
                </div>
            )

        }else{
            return(
                <div></div>
            )
        }

    }

}

export default DishDetails;