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
                            <a href="mailto:klish3@gmail.com">klish3@gmail.com</a>
                            <br />
                            <a href="tel:+27 72 252 7391">+27 72 252 7391</a>
                        </p>

                        <header>
                            <p>Download printable verison</p>
                        </header>
                        <p> <a href="https://firebasestorage.googleapis.com/v0/b/kliative.appspot.com/o/Tawanda_Kanyangarara_CV_2019.pdf?alt=media&token=777d1acb-a9b5-4b12-915c-ef4fb7ad2d1f" className="icon style2 fa-download"></a> - Download Printable</p>
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
