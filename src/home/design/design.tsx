import React, { PureComponent } from 'react';
import MeGIF from '../../shared/images/gif/me_2.gif'
class Design extends PureComponent {
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
                <section className="spotlight style1 orient-right content-align-left image-position-center onscroll-image-fade-in" id="design">
                    <div className="content">
                        <h2>Design</h2>
                        <p> Having come from the visual world diving deeper into the technical side as I go further, the lessson learned
                            from design are invalubale. Lessons shic</p>
                        <p>My bread and butter, my first love.</p>
                        <ul className="actions stacked">
                            <li><a href="https://www.behance.net/klish3" className="icon style2 fa-behance"></a> - View Behance</li>
                        </ul>
                    </div>
                    <div className="image">
                        <img src={MeGIF} alt="" />
                    </div>
                </section>
            </div>
        );
    }
}

export default Design;
