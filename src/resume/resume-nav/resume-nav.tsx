import React from 'react';
import './resume-nav.scss';

const ResumeNav = (props: any) => {

    return (
        <div>
            <div className="resume-nav">
                <a onClick={props.resumeToggleViewState} className="icon fa-chevron-circle-left"> Home</a>
            </div>

        </div>
    );
}

export default ResumeNav;
