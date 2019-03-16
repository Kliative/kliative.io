import React, { PureComponent } from 'react';
import './resume-nav.scss';
import { Link } from 'react-router-dom';

class ResumeNav extends PureComponent {
    constructor(props: any) {
        super(props);
        this.state = {

        };
    }

    componentDidMount() {

    }

    render() {
        return (
            <div>
                <div className="resume-nav">
                <Link to="/" className="icon fa-chevron-circle-left"> Back</Link> 
                </div>
                
            </div>
        );
    }
}

export default ResumeNav;
