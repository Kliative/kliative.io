import React, { PureComponent } from 'react';
import './cover.scss';
import headerImage from '../../shared/images/me_cv_3.jpg'

class Cover extends PureComponent {
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
                <section className="spotlight style1 orient-right content-align-right image-position-center onscroll-image-fade-in">
                    <div className="content">
                        <h2>Curriculum Vitae</h2>
                        <p>
                            Name:
					<br /> Tawanda Shingirai Kanyangarara
				</p>
                        <p>
                            Contact:
					<br />
                            <a href="mailto:tawi@kliative.io">tawi@kliative.io</a>
                            <br />
                            <a href="tel:+44 7517 199332">+44 7517 199332</a>
                        </p>

                        <header>
                            <p>Download printable verison</p>
                        </header>
                        <p> <a href="https://firebasestorage.googleapis.com/v0/b/kliative.appspot.com/o/Tawanda_Kanyangarara_2019.pdf?alt=media&token=409199e0-296d-400d-ae1b-0b8e5833ee5a" className="icon style2 fa-download"></a> - Download Printable</p>
                    </div>
                    <div className="image">
                        <img src={headerImage} alt="" />
                    </div>
                </section>
            </div>
        );
    }
}

export default Cover;
