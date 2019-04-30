import React, { PureComponent } from 'react';
import './letter.scss';

class Letter extends PureComponent {
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
                <section className="wrapper style1">
                    <div className="inner">
                        <header>
                            <h3>Cover Letter</h3>
                        </header>
                        <p>
                            I am an experienced Lead Developer with a proven track record of complete customer satisfaction across multiple domains.
                        </p>
                        <p>
                            As a graduate I produced Trade Loan smart form prototype that inspired the head of Trade to include a customer facing channel into their workflow solution (Pangea). This later lead to me being assigned the Lead role for the development of the Trade Loan channel and workflow. The platform was rolled out in September and was the first product to run live. Trade Loans channel was taken to the World Economic Forum 2019 by ABSA Group CEO Maria Ramos.
				        </p>

                        <p>
                            Subsequently I was tasked with upgrading the other Trade software projects onto a the same tech stack as Pangea. This brought me to take an interim Lead role in the General Exposure Management team to implement security features and make deployments to production. I then took up the Lead in the Open Accounts team.
                        </p>
                    </div>
                </section>
            </div>
        );
    }
}


export default Letter;
