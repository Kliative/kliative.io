import React, { PureComponent } from 'react';
import LandingPage from './landing-page/landing-page';
import Design from './design/design';
import Repo from './repo/repo';
import Resume from './resume/resume';
import Footer from '../shared/components/footer/footer';

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
                <Resume />
                <Footer />
            </div>
        );
    }
}


export default Home;
