import React, { FC, useEffect } from 'react';
import classes from './RefundPage.module.css';

const RefundPage: FC = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <div className={classes.refund}>
            <div className={classes.refundBlock}>
                <h5 className={classes.refundTitle}>Refund Policy</h5>

                <p className={classes.refundText}>
                    Last updated: 2023-09-04
                </p>

                <br></br>

                <p className={classes.refundText}>
                    <b>Refunds</b>
                </p>

                <br></br>

                <p className={classes.refundText}>
                    We want you to be completely satisfied with your payment for our service, and we will do our best to make you satisfied. However, as a general rule, all payments for our services are final and no refunds will be issued.
                </p>

                <br></br>

                <p className={classes.refundText}>
                    <b>Compensation for unforeseen circumstances</b>
                </p>

                <br></br>

                <p className={classes.refundText}>
                    In the event of unforeseen circumstances, such as a defective service, server outage, or other issues that are beyond your control, we will strive to provide appropriate compensation on a case-by-case basis. To request compensation, please contact us at support@adbuy.me or +1 937-551-5557, and be prepared to provide any relevant documentation or evidence. We will make every effort to respond to your request in a timely manner and work with you to find a satisfactory solution.</p>

                <br></br>

                <p className={classes.refundText}>
                    <b>Contacts</b>
                </p>

                <br></br>

                <p className={classes.refundTextEnd}>
                    If you have any questions about our refund policy, please don't hesitate to reach out to us at support@adbuy.me or +1 937-551-5557.
                </p>




            </div>
        </div>
    );
};

export default RefundPage;
