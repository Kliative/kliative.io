import React, { PureComponent } from 'react';
import ironManMe from '../../shared/images/me_cv_1.jpg'
import './resume.scss';
import { Link } from 'react-router-dom';
// import { Modal, Button } from 'react-bootstrap';
class Resume extends PureComponent {

    state: any;
    constructor(props: any, context: any) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.state = {
            show: false,
        };
    }


    handleClose() {
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: true });
    }


    componentDidMount() {

    }

    render() {
        return (
            <div>
                <section className="spotlight style1 orient-right content-align-left image-position-center onscroll-image-fade-in" id="resume">
                    <div className="content">
                        <h2>Curriculum Vitae</h2>
                        <p>An account of my eductaion, qualifications and work experience.</p>
                        <ul className="actions stacked">
                            <li><Link to="/cv" className="icon style2 fa-desktop"></Link> - View Online</li>
                            <li><a href="https://firebasestorage.googleapis.com/v0/b/kliative.appspot.com/o/backflip_clip.mp4?alt=media&token=fa7039a0-b6a6-4e75-bd7d-9eafe0402581" className="icon style2 fa-download"></a> - Download Printable</li>
                        </ul>
                    </div>
                    <div className="image">
                        <img src={ironManMe} alt="ironman-me" />
                    </div>
                </section>

                {/* <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Body>
                        <div className="modal-content mc-download">
                            <div className="row download-cv-modal">
                                <div className="col-lg-12">
                                    <i className="icon style1 fa-file-pdf-o"></i>
                                    <p><a href="https://firebasestorage.googleapis.com/v0/b/kliative.appspot.com/o/backflip_clip.mp4?alt=media&token=fa7039a0-b6a6-4e75-bd7d-9eafe0402581" className="icon style2 fa-download"> - Download PDF</a></p>
                                </div>
                            </div>
                        </div>
                    </Modal.Body>
                </Modal> */}
            </div>
        );
    }
}

export default Resume;
