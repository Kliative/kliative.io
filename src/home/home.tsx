import React, { PureComponent } from 'react';
import LandingPage from './landing-page/landing-page';
import Design from './design/design';
import Repo from './repo/repo';

class Home extends PureComponent {
    constructor(props: any) {
        super(props);
        this.state = {

        };
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className="divided">
                <LandingPage />
                <Design />
                <Repo />
            </div>
        );
    }
}


export default Home;
