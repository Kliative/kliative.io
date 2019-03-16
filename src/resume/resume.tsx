import React, { PureComponent } from 'react';
import './resume.scss';
import Cover from './cover/cover';
import Letter from './letter/letter';
import Education from './education/education';
import Experience from './experience/experience';
import Leadership from './leadership/leadership';
import Software from './software/software';
import SkillsMatrix from './skills-matrix/skils-matrix';
import Accolades from './accolades/accolades';
import Footer from '../shared/components/footer/footer';
import ResumeNav from './resume-nav/resume-nav';

class Resume extends PureComponent {
    constructor(props: any) {
        super(props);
        this.state = {

        };
    }

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
        return (
            <div className="divided">
                <ResumeNav />
                <Cover />
                <Letter />
                <Education />
                <Experience />
                <Leadership />
                <Software />
                <SkillsMatrix />
                <Accolades />
                <Footer />
            </div>
        );
    }
}

export default Resume;
