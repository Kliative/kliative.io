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

const Resume = (props: any) => {
    // window.scrollTo(0, 0);
    return (

        <div className="divided">
            <ResumeNav 
            resumeToggleViewState={props.toggleViewState} />
            <Cover />
            <Letter />
            <Education />
            <Experience />
            <Leadership />
            {/* <Software /> */}
            <SkillsMatrix />
            <Accolades />
            <Footer />
        </div>

    )
};

export default Resume;
