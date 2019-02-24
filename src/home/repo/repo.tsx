import React, { PureComponent } from 'react';

class Repo extends PureComponent {
    constructor(props:any) {
        super(props);
        this.state = {

        };
    }

    componentDidMount() {

    }

    render() {
        return (
            <div>
                <section className="spotlight style1 orient-left content-align-left image-position-center onscroll-image-fade-in invert-blue" id="repo">
                    <div className="content">
                        <h2>Repository (Github)</h2>
                        <p>View some of my technical projects, download the code. Run it have fun with it.</p>
                        <ul className="actions stacked">
                            <li><a href="https://github.com/Kliative" className="icon style2 fa-github"></a> - View GitHub</li>
                        </ul>
                    </div>
                    <div className="repo-image" id="particles-js">
                    </div>
                </section>                
            </div>
        );
    }
}

export default Repo;
