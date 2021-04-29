import React, { Component } from 'react';
import Location from './LocationComponent';
import HuntInfo from './HuntInfoComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import SignUp from './SignUpComponent';
import Info from './InfoComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';


const mapStateToProps = state => {
    return {
        hunts: state.hunts,
        harvests: state.harvests,
        sponsors: state.sponsors,
    };
};

class Main extends Component {


    render() {

        const HomePage = () => {
            return (
                <Home
                    hunt={this.props.hunts.filter(hunt => hunt.featured)[0]}
                    sponsor={this.props.sponsors.filter(sponsor => sponsor.featured)[0]}
                />
            );
        };

        const HuntWithId = ({match}) => {
            return (
                <HuntInfo hunt={this.props.hunts.filter(hunt => hunt.id === +match.params.huntId)[0]} 
                  harvests={this.props.harvests.filter(harvest => harvest.huntId === +match.params.huntId)} />
            );
        };

        return (
            <div>
                <Header />
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route exact path='/location' render={() => <Location hunts={this.props.hunts} />} />
                    <Route path='/location/:huntId' component={HuntWithId} />
                    <Route exact path='/SignUp' component={SignUp} />
                    <Route exact path='/Info' render={() => <Info sponsors={this.props.sponsors} /> } />
                    <Redirect to='/home' />
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps)(Main));