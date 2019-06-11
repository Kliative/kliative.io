import React from 'react';
import LandingPage from './landing-page/landing-page';
import Design from './design/design';
import Repo from './repo/repo';
import Resume from './resume/resume';
import Footer from '../shared/components/footer/footer';


const Home = (props: any) => {

    return (
        <div className="divided">
            <LandingPage />
            <Design />
            <Repo />
            <Resume resumeToggleViewState={props.toggleViewState} />
            <Footer />
        </div>
    );

}


export default Home;
