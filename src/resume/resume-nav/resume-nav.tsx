import React from 'react';
import './resume-nav.scss';

const ResumeNav = (props: any) => {

    return (
        <div>
            <div onClick={props.resumeToggleViewState} className="resume-nav">
                <a className="icon fa-chevron-circle-left"> Home</a>
            </div>

        </div>
    );
}

export default ResumeNav;
