import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderLocationItem({ hunt, onClick }) {
    return (
        <Card>
            <Link to={`/location/${hunt.id}`}>
                <CardImg width="100%" src={hunt.image} alt={hunt.name} className="huntCard"/>
                <CardImgOverlay>
                    <CardTitle>{hunt.name}</CardTitle>
                </CardImgOverlay>
            </Link>
        </Card>
    );
}

function Location(props) {

    const location = props.hunts.map(hunt => {
        return (
            <div key={hunt.id} className="col-md-5 m-1">
                <RenderLocationItem hunt={hunt} />
            </div>
        );
    });

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Hunt Locations</BreadcrumbItem>
                    </Breadcrumb>
                    <h2>Hunt Locations</h2>
                    <hr />
                </div>
            </div>
            <div className="row">
                {location}
            </div>
        </div>
    );

}

export default Location;