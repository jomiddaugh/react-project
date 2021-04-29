import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, Media } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderSponsor({sponsor}) {
    if (sponsor) {
        return(
            <React.Fragment>
                <Media object src={sponsor.image} alt={sponsor.name} width="150" />
                <Media body className="ml-5 mb-4">
                    <Media heading >
                        {sponsor.name}
                    </Media>
                    {sponsor.description}
                </Media>

            </React.Fragment>
        );
    }
    else {
        return(
            <div />
        );
    }
}


function Info(props) {

    const sponsors = props.sponsors.map(sponsor => {
        return (
            <Media tag="li" key={sponsor.id}>
                <RenderSponsor sponsor = {sponsor} />
            </Media>
        );
    });

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Information</BreadcrumbItem>
                    </Breadcrumb>
                    <h2>Information</h2>
                    <hr />
                </div>
            </div>
            <div className="row row-content">
                <div className="col-sm-6">
                    <Card>
                        <CardHeader className="bg-success text-white"><h3>Imnaha Hunt</h3></CardHeader>
                        <CardBody>
                            <dl className="row">
                                <dt className="col-6">Unit Number(s)</dt>
                                <dd className="col-6">61</dd>
                                <dt className="col-6">No. of Hunters in 2020</dt>
                                <dd className="col-6">100</dd>
                                <dt className="col-6">Birds per hunter</dt>
                                <dd className="col-6">0.57</dd>
                            </dl>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-sm-6">
                    <Card>
                        <CardHeader className="bg-success text-white"><h3>Willamette Hunt</h3></CardHeader>
                        <CardBody>
                            <dl className="row">
                                <dt className="col-6">Unit Number(s)</dt>
                                <dd className="col-6">15</dd>
                                <dt className="col-6">No. of Hunters in 2020</dt>
                                <dd className="col-6">805</dd>
                                <dt className="col-6">Birds per hunter</dt>
                                <dd className="col-6">0.46</dd>
                            </dl>
                        </CardBody>
                    </Card>
                </div>
            </div>
            <div className="row row-content">
                <div className="col-12">
                    <h3>Our Sponsors</h3>
                </div>
                <div className="col mt-4">
                    <Media list>
                        {sponsors}
                    </Media>
                </div>
            </div>
        </div>
    );
}

export default Info;