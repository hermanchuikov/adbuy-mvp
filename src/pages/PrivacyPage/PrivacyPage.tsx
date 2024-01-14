import React, { FC, useEffect } from 'react';
import classes from './PrivacyPage.module.css';

const PrivacyPage: FC = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <div className={classes.privacy}>
            <div className={classes.privacyBlock}>
                <h5 className={classes.privacyTitle}>Privacy Policy</h5>


                <p className={classes.privacyText}>
                    Last updated: 2023-09-04
                </p>

                <br></br>

                <p className={classes.privacyText}>
                    Welcome to Adbuy, a neural network for quickly launching effective multi-channel advertising. Adbuy Inc. ("we," "our," or "us") values your privacy and is committed to protecting your personal information. This privacy policy explains how we collect, use, and safeguard your data when you interact with our website at https://adbuy.me ("Adbuy").
                </p>

                <br></br>

                <p className={classes.privacyText}>
                    By accessing or using Adbuy, you agree to the practices described in this privacy policy. If you do not agree with the terms of this policy, please do not use our website.
                </p>

                <br></br>

                <p className={classes.privacyText}>
                    <b>Information We Collect</b>
                </p>

                <br></br>

                <p className={classes.privacyText}>
                    <ul>We collect the following personal information from users through our order form:</ul>
                    <li>Business Phone Number</li>
                    <li>Email Address</li>
                </p>

                <br></br>

                <p className={classes.privacyText}>
                    <b>How We Use Your Information</b>
                </p>

                <br></br>

                <p className={classes.privacyText}>
                    <ul>The information we collect is used solely for the purpose of establishing effective communication with you, our valued client. We may use your provided contact information to:</ul>
                    <li>Respond to inquiries or requests related to our services.</li>
                    <li>Provide information about your account, orders, or transactions.</li>
                    <li>Send important updates or notifications regarding Adbuy and its features.</li>
                </p>

                <br></br>

                <p className={classes.privacyText}>
                    <b>Data Sharing</b>
                </p>

                <br></br>

                <p className={classes.privacyText}>
                    <ul>We do not share your personal information with third parties for marketing purposes or any other reasons, except in the following cases:</ul>
                    <li>In response to legal requests such as court orders or subpoenas.</li>
                    <li>To protect the rights, property, or safety of Adbuy Inc., its users, or the public.</li>
                    <li>In connection with the sale, merger, or acquisition of all or a portion of Adbuy Inc., provided that the acquiring entity upholds the principles stated in this privacy policy.</li>
                </p>

                <br></br>

                <p className={classes.privacyText}>
                    <b>Cookies and Tracking Technologies</b>
                </p>

                <br></br>

                <p className={classes.privacyText}>
                    Adbuy does not utilize cookies or similar tracking technologies to collect or store personal information about its users.
                </p>

                <br></br>

                <p className={classes.privacyText}>
                    <b>Third-Party Services</b>
                </p>

                <br></br>

                <p className={classes.privacyText}>
                    While Adbuy utilizes OpenAI API, it does not collect personal user data. Please refer to OpenAI's privacy policy for further information on their data practices.
                </p>

                <br></br>

                <p className={classes.privacyText}>
                    <b>Data Security</b>
                </p>

                <br></br>

                <p className={classes.privacyText}>
                    We take the security of your personal information seriously. Adbuy implements industry-standard security measures, including Secure Socket Layer (SSL) encryption, to protect against unauthorized access, alteration, disclosure, or destruction of your data.
                </p>

                <br></br>

                <p className={classes.privacyText}>
                    <b>User Rights</b>
                </p>

                <br></br>

                <p className={classes.privacyText}>
                    Adbuy provides users with the right to access and modify their personal data stored in our database. If you wish to update or delete your information, please contact us using the details provided at the end of this policy.
                </p>

                <br></br>

                <p className={classes.privacyText}>
                    <b>Age Limit</b>
                </p>

                <br></br>

                <p className={classes.privacyText}>
                    Adbuy does not target or knowingly collect personal information from individuals under the age of 18. If you are a parent or guardian and believe that your child has provided us with their personal information without your consent, please contact us immediately.
                </p>

                <br></br>

                <p className={classes.privacyText}>
                    <b>Policy Updates</b>
                </p>

                <br></br>

                <p className={classes.privacyText}>
                    We may update this privacy policy from time to time to reflect changes in our data practices. The most current version of the policy will be posted on our website. It is your responsibility to review the policy periodically and remain informed of any updates.
                </p>

                <br></br>

                <p className={classes.privacyText}>
                    <b>Contact Us</b>
                </p>

                <br></br>

                <p className={classes.privacyText}>
                    If you have any questions, concerns, or requests regarding this privacy policy, or if you wish to exercise your rights regarding your personal information, please contact us at:
                </p>

                <br></br>

                <p className={classes.privacyText}>
                    Adbuy Inc.
                </p>
                <p className={classes.privacyText}>
                    Address: 800 N King Street, Suite 304 1337, Wilmington, DE 19801
                </p>
                <p className={classes.privacyText}>
                    Email: support@adbuy.me
                </p>
                <p className={classes.privacyTextEnd}>
                    Phone: +1 937-551-5557
                </p>

            </div>
        </div>
    );
};

export default PrivacyPage;
