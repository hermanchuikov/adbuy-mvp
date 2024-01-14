import React, { FC, useEffect } from 'react';
import classes from './ModePickerPage.module.css';
import { classNames } from 'primereact/utils';
import { Link } from 'react-router-dom';

// import simplified from "../../assets/images/simplified.svg"
// import custom from "../../assets/images/custom.svg"

import simplified from "../../assets/images/mode0_new.png"
import custom from "../../assets/images/mode1_new.png"


const ModePickerPage : FC = () => {

    

    return (
        <div className={classes.mode}>
           <div className={classes.modeBlock}>

               <Link className={classes.modeLink} to={{ pathname: '/form', search: '?mode=simplified' }}>
                    <div className={classes.modeCard}>

                        <div className={classes.modeImgContainerSimplified}>
                                <img className={classes.modeImgSimplified} src={simplified} alt="mode_Simplified" />
                        </div>

                        <div className={classes.modeLabel}>
                            Simplified Mode
                        </div>

                        <div className={classes.modeText}>
                            I will send only Website Address.
                        </div>


                        <div className={classes.modeText}>
                            Adbuy will generate ads <b>based on website data</b>.
                        </div>

                        <div className={classes.modeText}>
                            ㅤ
                        </div>

                        <div className={classes.modeTextExtra}>
                            <i>*Website can be your public Instagram account</i>
                        </div>

                    </div>
               </Link>

               <Link className={classes.modeLink} to={{ pathname: '/form', search: '?mode=custom' }}>
                    <div className={classes.modeCardCustom}>

                        <div className={classes.modeImgContainer}>
                            <img className={classes.modeImg} src={custom} alt="mode_Custom" />
                        </div>


                        <div className={classes.modeLabel}>
                            Custom Mode
                        </div>

                        <div className={classes.modeText}>
                            I have what to <b>emphasize</b>.
                        </div>

                        <div className={classes.modeTextSpace}>
                            I will send Title, Description, Images and Website Address.
                        </div>

                        <div className={classes.modeText}>
                            Adbuy will generate ads <b>based on the information I provided</b>.
                        </div>

                    </div>
                </Link>

           </div>
        </div>
    );
};

export default ModePickerPage;
