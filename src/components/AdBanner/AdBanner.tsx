import React, { FC } from 'react';
import classes from './AdBanner.module.css';
import { Player } from 'video-react';

interface IAdBannerProps {
  type: 'facebook' | 'instagram' | 'google' | 'tiktok';
  username?: string;
  photoUrl?: string;
  button?: string;
  text?: string;
  handleClick: () => void;
  headline?: string[];
  url?: string;
  description?: string;
  videoUrl?: string;
  soundName?: string;
}

const AdBanner: FC<IAdBannerProps> = (props) => {
  const {
    type,
    headline,
    username = 'Adbuy',
    photoUrl,
    button = 'Download',
    text = 'Create cool ads with adbuy',
    url,
    description,
    videoUrl,
    soundName,
    handleClick,
  } = props;

  if (type === 'facebook') {
    return (
      <div className={classes.facebookWrapper}>
        <div className={classes.facebookBlock}>
          <div className={classes.facebookHeader}>
            <div className={classes.facebookHeaderBlock}>
              <img
                className={classes.facebookLogo}
                src="https://i.postimg.cc/Y093g3JJ/Adbuy-new-logo.png"
              />
              <div>
                <h6 className={classes.facebookHeaderTitle}>Adbuy.com</h6>
                <p className={classes.facebookHeaderSubtititle}>Sponsored</p>
              </div>
            </div>
            <div className={classes.facebookHeaderButton}>
              <div className={classes.facebookHeaderButtonDot}></div>
              <div className={classes.facebookHeaderButtonDot}></div>
              <div className={classes.facebookHeaderButtonDot}></div>
            </div>
          </div>
          <h3 className={classes.facebookAdTitle}>{headline}</h3>
          {/* image */}
          <div className={classes.facebookImageBLock}>
            <img
              src={`data:image/jpeg;base64,${photoUrl}`}
              className={classes.facebookImage}
            />
          </div>
          <div className={classes.facebookInfoInner}>
            <div className={classes.facebookInfoBlock}>
              <p className={classes.facebookInfoUrl}>Adbuy.com</p>
              <h6 className={classes.facebookInfoTitle}>{headline}</h6>
              <p className={classes.facebookInfoSubtitle}>{description}</p>
            </div>
            <div className={classes.facebookInfoButtonBlock}>
              <button className={classes.facebookInfoButton}>Download</button>
            </div>
          </div>

          <div className={classes.facebookButtonInner}>
            <div className={classes.faceBookButtonBlock}>
              <p className={classes.facebookButtonBlockIcon}>
                <svg
                  data-v-5a306db0=""
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 49.625 49.625"
                  xmlSpace="preserve"
                >
                  <g data-v-5a306db0="">
                    <path
                      data-v-5a306db0=""
                      d="M12.94,26.221c-3.98,0-7.96,0-11.94,0c-0.545,0-1,0.455-1,1c0,6.218,0,12.436,0,18.654 c0,0.746,0,1.491,0,2.237c0,0.545,0.455,1,1,1c3.98,0,7.96,0,11.94,0c0.273,0,0.476-0.102,0.633-0.244 c0.024-0.018,0.049-0.033,0.071-0.053c0.018-0.02,0.032-0.043,0.048-0.064c0.144-0.158,0.247-0.362,0.247-0.638 c0-6.218,0-12.436,0-18.654c0-0.746,0-1.491,0-2.237C13.94,26.676,13.485,26.221,12.94,26.221z M2,28.221c3.313,0,6.627,0,9.94,0 c0,5.885,0,11.769,0,17.654c0,0.413,0,0.825,0,1.237c-3.313,0-6.627,0-9.94,0c0-5.885,0-11.769,0-17.654 C2,29.046,2,28.633,2,28.221z M48.711,34.767c0-0.342,0-0.683,0-1.025c0.928-0.664,0.907-2.425,0.911-3.459 c0.004-0.943,0.045-1.912-0.572-2.679c-0.164-0.203-0.383-0.321-0.619-0.402c0-0.063,0-0.126,0-0.189 c0.03-0.003,0.059-0.005,0.089-0.008c0.402-0.035,0.901-0.275,0.964-0.734c0.161-1.167,0.074-2.353,0.087-3.527 c0.016-1.515-0.476-2.767-1.748-3.647c-1.318-0.912-3.153-0.71-4.684-0.735c-3.415-0.057-6.831-0.121-10.246-0.185 c0.703-0.893,1.405-1.787,2.106-2.682c1.358-1.736,2.742-3.374,3.678-5.384c0.93-1.997,1.654-4.491,0.797-6.643 c-0.603-1.514-1.916-2.644-3.545-2.895c-1.56-0.24-3.17,0.208-4.291,1.348c-0.485,0.494-0.763,1.097-1.089,1.694 c-0.341,0.624-0.71,1.234-1.083,1.839c-2.25,3.654-4.71,7.183-7.159,10.706c-2.318,3.335-4.662,6.653-7.038,9.948 c-0.006,0.008-0.005,0.018-0.01,0.026c-0.028,0.05-0.045,0.108-0.064,0.166c-0.033,0.092-0.057,0.181-0.057,0.279 c0,0.012-0.007,0.021-0.007,0.033c0,6.221,0,12.442,0,18.663c0,0.946,0,1.893,0,2.839c0,0.545,0.455,1,1,1 c6.102,0,12.205,0,18.307,0c2.924,0,5.848,0,8.772,0c1.756,0,3.407-0.741,4.349-2.296c0.521-0.86,0.432-2.152,0.519-3.125 c0.021-0.238,0.043-0.476,0.064-0.714c0.02-0.226,0.04-0.451,0.061-0.677c0.007-0.075,0.014-0.151,0.021-0.226 c0.004-0.008,0.007-0.011,0.013-0.027c0.002-0.006,0.004-0.011,0.006-0.017c1.312-0.586,1.354-2.589,1.368-3.807 c0.01-0.905,0.094-1.986-0.315-2.811C49.156,35.131,48.956,34.924,48.711,34.767z M47.908,36.508c-0.006,0-0.012-0.002-0.018-0.003 c0.065-0.005,0.129-0.001,0.203-0.019C48.036,36.5,47.948,36.505,47.908,36.508z M47.694,29.056c-0.001,0-0.002-0.001-0.003-0.002 c0.028,0,0.056,0.001,0.083,0.003C47.737,29.055,47.712,29.055,47.694,29.056z M47.243,40.268c0.057-0.03,0.086-0.045,0.103-0.054 c-0.003,0.004-0.007,0.009-0.009,0.012C47.325,40.228,47.298,40.239,47.243,40.268z M47.462,40.043 c-0.026,0.054-0.035,0.078-0.038,0.091c-0.008,0.004-0.024,0.017-0.059,0.055c-0.013,0.014-0.011,0.015-0.018,0.023 c-0.03,0.013-0.094,0.041-0.139,0.047c-0.352,0.048-0.589,0.398-0.698,0.698c-0.52,1.428-0.47,3.148-0.605,4.654 c0,0.005,0,0.006-0.001,0.011c-0.005,0.019-0.011,0.039-0.019,0.072c-0.001,0.003-0.111,0.21-0.126,0.235 c-0.145,0.239-0.378,0.428-0.588,0.606c-0.372,0.316-0.928,0.579-1.421,0.579c-0.221,0-0.443,0-0.664,0c-3.003,0-6.007,0-9.01,0 c-5.648,0-11.296,0-16.944,0c0-5.888,0-11.775,0-17.663c0-0.842,0-1.685,0-2.527c3.987-5.532,7.925-11.108,11.696-16.792 c1.009-1.521,2.01-3.052,2.94-4.623c0.307-0.518,0.597-1.044,0.868-1.581c0.075-0.149,0.166-0.288,0.261-0.424 c-0.124,0.177,0.153-0.17,0.21-0.228c0.056-0.057,0.116-0.11,0.175-0.163c0.025-0.022,0.022-0.021,0.031-0.03 c0.008-0.006,0.003-0.002,0.015-0.01c0.148-0.109,0.308-0.202,0.47-0.287c0.042-0.022,0.085-0.041,0.127-0.06 c0.011-0.002,0.114-0.044,0.14-0.054c0.148-0.052,0.301-0.091,0.454-0.125c0.043-0.009,0.086-0.016,0.13-0.023 c0.012,0,0.119-0.015,0.149-0.018c0.183-0.015,0.367-0.013,0.55-0.003c0.044,0.002,0.087,0.008,0.131,0.012 c0.01,0.003,0.119,0.019,0.149,0.025c0.155,0.03,0.306,0.074,0.456,0.123c0.019,0.006,0.09,0.034,0.128,0.048 c0.047,0.022,0.095,0.043,0.141,0.067c0.166,0.084,0.322,0.185,0.473,0.294c-0.181-0.13,0.168,0.159,0.225,0.216 c0.058,0.059,0.113,0.121,0.167,0.184c0.013,0.015,0.009,0.009,0.017,0.019c0.007,0.011,0.006,0.012,0.031,0.047 c0.279,0.394,0.325,0.545,0.431,0.906c0.137,0.463,0.139,0.621,0.146,1.091c0.008,0.531-0.068,1.005-0.186,1.517 c-0.489,2.127-1.655,3.913-2.966,5.604c-0.789,1.017-1.583,2.03-2.378,3.042c-0.352,0.448-0.704,0.895-1.056,1.343 c-0.409,0.519-1.009,1.099-0.787,1.83c0.453,1.495,2.06,1.298,3.27,1.32c1.965,0.037,3.929,0.073,5.894,0.108 c1.823,0.033,3.646,0.072,5.469,0.091c1.076,0.011,2.118,0.361,2.422,1.497c0.164,0.611,0.042,1.38,0.046,2.011 c0.002,0.397,0.001,0.793-0.007,1.189c-0.045,0.004-0.091,0.008-0.136,0.012c-0.543,0.047-1,0.419-1,1c0,0.653,0,1.306,0,1.959 c0,0.545,0.455,1,1,1c0.052,0,0.103-0.002,0.155-0.003c0.007,0.09,0.007,0.182,0.011,0.263c0.016,0.321,0.024,0.643,0.025,0.964 c0.002,0.552,0.042,1.171-0.055,1.714c-0.002,0.012-0.003,0.013-0.005,0.023c-0.661,0.049-0.935,0.595-0.852,1.11 c0,0.798,0,1.595,0,2.393c0,0.491,0.376,0.891,0.848,0.969c0.002,0.009,0.006,0.017,0.007,0.025 c0.067,0.581,0.052,1.198,0.045,1.784C47.601,38.837,47.697,39.555,47.462,40.043z"
                      // style={{"fill: rgb(3, 1, 4);"}}
                    ></path>
                  </g>
                  <g data-v-5a306db0=""></g>
                  <g data-v-5a306db0=""></g>
                  <g data-v-5a306db0=""></g>
                  <g data-v-5a306db0=""></g>
                  <g data-v-5a306db0=""></g>
                  <g data-v-5a306db0=""></g>
                  <g data-v-5a306db0=""></g>
                  <g data-v-5a306db0=""></g>
                  <g data-v-5a306db0=""></g>
                  <g data-v-5a306db0=""></g>
                  <g data-v-5a306db0=""></g>
                  <g data-v-5a306db0=""></g>
                  <g data-v-5a306db0=""></g>
                  <g data-v-5a306db0=""></g>
                  <g data-v-5a306db0=""></g>
                </svg>
              </p>
              <p className={classes.facebookButtonBlockText}>Like</p>
            </div>

            <div className={classes.faceBookButtonBlock}>
              <p className={classes.facebookButtonBlockIcon}></p>
              <p className={classes.facebookButtonBlockText}>Comment</p>
            </div>

            <div className={classes.faceBookButtonBlock}>
              <p className={classes.facebookButtonBlockIcon}></p>
              <p className={classes.facebookButtonBlockText}>Share</p>
            </div>
          </div>
        </div>
        <div className={classes.adchooseButton} onClick={handleClick}>
          <div className={classes.adchooseCircle}></div>
        </div>
      </div>
    );
  }

  if (type === 'instagram') {
    return (
      <div className={classes.instagramWrapper}>
        <div className={classes.instagramBlock}>
          <div className={classes.instagramHeader}>
            <div className={classes.instagramHeaderInner}>
              <div className={classes.instagramHeaderBlock}>
                <img
                  className={classes.instagramHeaderLogo}
                  src="https://i.postimg.cc/Y093g3JJ/Adbuy-new-logo.png"
                />
                <div className={classes.instagramHeaderInfo}>
                  <h4 className={classes.instagramHeaderTitle}>{username}</h4>
                  <p className={classes.instagramHeaderSubtitle}>Sponsored</p>
                </div>
              </div>
              <div className={classes.instagramHeaderButton}>
                <div className={classes.instagramHeaderButtonDot}></div>
                <div className={classes.instagramHeaderButtonDot}></div>
                <div className={classes.instagramHeaderButtonDot}></div>
              </div>
            </div>
          </div>

          <div className={classes.instagramImageBlock} >
            <img
              className={classes.instagramImage}
              src={`data:image/jpeg;base64,${photoUrl}`}
            />
          </div>
          {/* <div className={classes.instagramImage}></div> */}

          <div className={classes.instagramGoalBlock}>
            <h6 className={classes.instagramGoalTitle}>{button}</h6>
            <p className={classes.instagramGoalIcon}>
              <svg
                data-v-66a8b58d=""
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 256 256"
                xmlSpace="preserve"
              >
                <g data-v-66a8b58d="">
                  <g data-v-66a8b58d="">
                    <polygon
                      data-v-66a8b58d=""
                      points="79.093,0 48.907,30.187 146.72,128 48.907,225.813 79.093,256 207.093,128 "
                    ></polygon>
                  </g>
                </g>
                <g data-v-66a8b58d=""></g>
                <g data-v-66a8b58d=""></g>
                <g data-v-66a8b58d=""></g>
                <g data-v-66a8b58d=""></g>
                <g data-v-66a8b58d=""></g>
                <g data-v-66a8b58d=""></g>
                <g data-v-66a8b58d=""></g>
                <g data-v-66a8b58d=""></g>
                <g data-v-66a8b58d=""></g>
                <g data-v-66a8b58d=""></g>
                <g data-v-66a8b58d=""></g>
                <g data-v-66a8b58d=""></g>
                <g data-v-66a8b58d=""></g>
                <g data-v-66a8b58d=""></g>
                <g data-v-66a8b58d=""></g>
              </svg>
            </p>
          </div>

          <div className={classes.instagramInfoInner}>
            <div className={classes.instagramInfoButtons}>
              <div className={classes.instagramLikeButtonBlock}>
                <svg
                  data-v-66a8b58d=""
                  aria-label="Like"
                  color="#262626"
                  fill="#262626"
                  height="24"
                  role="img"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path
                    data-v-66a8b58d=""
                    d="M16.792 3.904A4.989 4.989 0 0121.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 014.708-5.218 4.21 4.21 0 013.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 013.679-1.938m0-2a6.04 6.04 0 00-4.797 2.127 6.052 6.052 0 00-4.787-2.127A6.985 6.985 0 00.5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 003.518 3.018 2 2 0 002.174 0 45.263 45.263 0 003.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 00-6.708-7.218z"
                  ></path>
                </svg>
                <svg
                  data-v-66a8b58d=""
                  aria-label="Comment"
                  color="#262626"
                  fill="#262626"
                  height="24"
                  role="img"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path
                    data-v-66a8b58d=""
                    d="M20.656 17.008a9.993 9.993 0 10-3.59 3.615L22 22z"
                    fill="none"
                    stroke="currentColor"
                    stroke-linejoin="round"
                    stroke-width="2"
                  ></path>
                </svg>
                <svg
                  data-v-66a8b58d=""
                  aria-label="Share Post"
                  color="#262626"
                  fill="#262626"
                  height="24"
                  role="img"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <line
                    data-v-66a8b58d=""
                    fill="none"
                    stroke="currentColor"
                    stroke-linejoin="round"
                    stroke-width="2"
                    x1="22"
                    x2="9.218"
                    y1="3"
                    y2="10.083"
                  ></line>
                  <polygon
                    data-v-66a8b58d=""
                    fill="none"
                    points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334"
                    stroke="currentColor"
                    stroke-linejoin="round"
                    stroke-width="2"
                  ></polygon>
                </svg>
              </div>
              <div className={classes.instagramSaveButton}>
                <svg
                  aria-label="Save"
                  color="#262626"
                  fill="#262626"
                  height="24"
                  role="img"
                  viewBox="0 0 24 24"
                  width="24"
                  data-v-66a8b58d=""
                >
                  <polygon
                    fill="none"
                    points="20 21 12 13.44 4 21 4 3 20 3 20 21"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    data-v-66a8b58d=""
                  ></polygon>
                </svg>
              </div>
            </div>

            <div className={classes.instagramInfoBlock}>
              <h6 className={classes.instagramViews}>87 021 views</h6>

              <p className={classes.instagramInfo}>
                <span className={classes.instagramUsername}>{username}</span>{' '}
                <span className={classes.instagramInfo}>{text}</span>
              </p>

              <p className={classes.instagramComments}>View all 921 comments</p>
            </div>
          </div>
        </div>
        <div className={classes.adchooseButton} onClick={handleClick}>
          <div className={classes.adchooseCircle}></div>
        </div>
      </div>
    );
  }

  if (type === 'google') {
    return (
      <div className={classes.googleWrapper}>
      <div className={classes.googleBlock}>
        <div className={classes.googleSupTitleBlock}>
          <p className={classes.googleSupTitleAd}>Ad</p>
          <p className={classes.googleSupTitle}>{url && url}</p>
        </div>
        <div className={classes.googleTitleBlock}>
          <p className={classes.googleTitle}>{headline && headline[0]} |</p>
          <p className={classes.googleTitle}>{headline && headline[1]} |</p>
          <p className={classes.googleTitle}>{headline && headline[2]}</p>
        </div>
        <p className={classes.googleDescriptionText}>
          {description && description}
        </p>
      </div>
      <div className={classes.adchooseButton} onClick={handleClick}>
          <div className={classes.adchooseCircle}></div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className={classes.videoWrapper}>
        {/* <div className={classes.pauseBlock} onClick={() => console.log('pause')}>
        <div className={classes.pauseBlockItem}></div>
        <div className={classes.pauseBlockItem}></div>
      </div> */}
        <video className={classes.video} controls loop>
          <source type="video/mp4" src={`data:video/mp4;base64,${videoUrl}`} />
        </video>

        <div
          className={classes.tiktokBlock}
          onClick={() => console.log('page')}
        >
          <div className={classes.tiktokHeader}>
            <p className={classes.tiktokHeaderTitle}>Following</p>
            <p className={classes.tiktokHeaderTitle}>For you</p>
          </div>
          <div className={classes.tiktokInfo}>
            <div className={classes.tiktokButtonsBlock}>
              <div className={classes.tiktokButtons}>
                <div className={classes.tiktokLogoBlock}>
                  <img
                    src="https://i.postimg.cc/Y093g3JJ/Adbuy-new-logo.png"
                    className={classes.tiktokLogoImage}
                  />
                  {/* <div className={classes.tiktokLogoButton}>
                  <span className={classes.tiktokLogoButtonText}>+</span>
                </div> */}
                </div>

                <div className={classes.tiktokButtonBlock}>
                  <p className={classes.tiktokButtonIcon}>
                    <svg
                      data-v-1ff3be3e=""
                      width="1em"
                      height="1em"
                      viewBox="0 0 48 48"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className={classes.tiktokLikeButton}
                    >
                      <g
                        data-v-1ff3be3e=""
                        filter="url(#LikeShadowColor_filter0_d)"
                      >
                        <path
                          data-v-1ff3be3e=""
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M15 4.5C21 4.5 24 8.5 24 8.5C24 8.5 27 4.5 33 4.5C40 4.5 45 9.99998 45 17C45 25 38.4622 32.1314 32.5 37.5C28.8191 40.8144 26 43 24 43C22 43 19.101 40.7978 15.5 37.5C9.63898 32.1325 3 25 3 17C3 9.99998 8 4.5 15 4.5Z"
                          fill="white"
                          fill-opacity="0.9"
                        ></path>
                      </g>
                      <path
                        data-v-1ff3be3e=""
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M4.80371 24.3995C7.17815 29.3932 11.5185 33.8538 15.4999 37.4999C19.1009 40.7978 21.9999 42.9999 23.9999 42.9999C25.9999 42.9999 28.819 40.8144 32.4999 37.4999C38.4621 32.1314 44.9999 24.9999 44.9999 16.9999C44.9999 16.8252 44.9968 16.6513 44.9906 16.4785C41.1344 27.3238 27.3575 37 23.5001 37C20.6255 37 11.2219 31.6262 4.80371 24.3995Z"
                        fill="black"
                        fill-opacity="0.03"
                      ></path>
                      <defs data-v-1ff3be3e="">
                        <filter
                          data-v-1ff3be3e=""
                          id="LikeShadowColor_filter0_d"
                          x="0.6"
                          y="3.3"
                          width="46.8"
                          height="43.3"
                          filterUnits="userSpaceOnUse"
                          color-interpolation-filters="sRGB"
                        >
                          <feFlood
                            data-v-1ff3be3e=""
                            flood-opacity="0"
                            result="BackgroundImageFix"
                          ></feFlood>
                          <feColorMatrix
                            data-v-1ff3be3e=""
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          ></feColorMatrix>
                          <feOffset data-v-1ff3be3e="" dy="1.2"></feOffset>
                          <feGaussianBlur
                            data-v-1ff3be3e=""
                            stdDeviation="1.2"
                          ></feGaussianBlur>
                          <feColorMatrix
                            data-v-1ff3be3e=""
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
                          ></feColorMatrix>
                          <feBlend
                            data-v-1ff3be3e=""
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow"
                          ></feBlend>
                          <feBlend
                            data-v-1ff3be3e=""
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow"
                            result="shape"
                          ></feBlend>
                        </filter>
                      </defs>
                    </svg>
                  </p>
                  <p className={classes.tiktokButtonText}>27,5K</p>
                </div>

                <div className={classes.tiktokButtonBlock}>
                  <p className={classes.tiktokButtonIcon}>
                    <svg
                      data-v-1ff3be3e=""
                      width="1em"
                      height="1em"
                      viewBox="0 0 48 48"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className={classes.tiktokCommentIcon}
                    >
                      <g
                        data-v-1ff3be3e=""
                        opacity="0.9"
                        filter="url(#CommentShadowColor_filter0_d)"
                      >
                        <path
                          data-v-1ff3be3e=""
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M38.4943 35.3128C42.6 31.2 45 26.9162 45 21.928C45 11.8056 35.733 3.60001 24.2999 3.60001C12.8671 3.60001 3.6 11.8056 3.6 21.9283C3.6 32.051 13.1669 39 24.6 39V42.3569C24.6 43.4205 25.7028 44.105 26.638 43.5983C29.5598 42.015 34.9741 38.8392 38.4943 35.3128ZM14.2446 19.4564C15.8786 19.4564 17.2031 20.7714 17.2031 22.3912C17.2031 24.0142 15.8786 25.3291 14.2446 25.3291C12.6134 25.3291 11.2888 24.0142 11.2888 22.3912C11.2888 20.7714 12.6134 19.4564 14.2446 19.4564ZM27.2572 22.3912C27.2572 20.7714 25.9332 19.4564 24.3 19.4564C22.667 19.4564 21.3429 20.7714 21.3429 22.3912C21.343 24.0142 22.6671 25.3291 24.3 25.3291C25.9332 25.3291 27.2572 24.0142 27.2572 22.3912ZM34.355 19.4564C35.9887 19.4564 37.3113 20.7714 37.3113 22.3912C37.3113 24.0142 35.9888 25.3291 34.355 25.3291C32.7213 25.3291 31.3969 24.0142 31.397 22.3912C31.397 20.7714 32.7214 19.4564 34.355 19.4564Z"
                          fill="white"
                        ></path>
                      </g>
                      <path
                        data-v-1ff3be3e=""
                        opacity="0.1"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M24.6001 38.9999C24.6001 38.9999 36.0669 38.1138 40.8601 31.9764C36.0669 38.7276 31.2737 42.4101 27.0796 43.6376C22.8855 44.8651 24.6001 38.9999 24.6001 38.9999Z"
                        fill="url(#CommentShadowColor_paint0_linear)"
                      ></path>
                      <defs data-v-1ff3be3e="">
                        <filter
                          data-v-1ff3be3e=""
                          id="CommentShadowColor_filter0_d"
                          x="1.2001"
                          y="2.40001"
                          width="46.2"
                          height="44.9688"
                          filterUnits="userSpaceOnUse"
                          color-interpolation-filters="sRGB"
                        >
                          <feFlood
                            data-v-1ff3be3e=""
                            flood-opacity="0"
                            result="BackgroundImageFix"
                          ></feFlood>
                          <feColorMatrix
                            data-v-1ff3be3e=""
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          ></feColorMatrix>
                          <feOffset data-v-1ff3be3e="" dy="1.2"></feOffset>
                          <feGaussianBlur
                            data-v-1ff3be3e=""
                            stdDeviation="1.2"
                          ></feGaussianBlur>
                          <feColorMatrix
                            data-v-1ff3be3e=""
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
                          ></feColorMatrix>
                          <feBlend
                            data-v-1ff3be3e=""
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow"
                          ></feBlend>
                          <feBlend
                            data-v-1ff3be3e=""
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow"
                            result="shape"
                          ></feBlend>
                        </filter>
                        <linearGradient
                          data-v-1ff3be3e=""
                          id="CommentShadowColor_paint0_linear"
                          x1="20.4103"
                          y1="37.6698"
                          x2="22.3081"
                          y2="43.6335"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop data-v-1ff3be3e=""></stop>
                          <stop
                            data-v-1ff3be3e=""
                            offset="1"
                            stop-opacity="0.01"
                          ></stop>
                        </linearGradient>
                      </defs>
                    </svg>
                  </p>
                  <p className={classes.tiktokButtonText}>3817</p>
                </div>

                <div className={classes.tiktokButtonBlock}>
                  <p className={classes.tiktokButtonIcon}>
                    <svg
                      data-v-1ff3be3e=""
                      width="1em"
                      height="1em"
                      viewBox="0 0 48 48"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className={classes.tiktokShareIcon}
                    >
                      <g
                        data-v-1ff3be3e=""
                        opacity="0.9"
                        filter="url(#ShareShadowColor_filter0_d)"
                      >
                        <path
                          data-v-1ff3be3e=""
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M25.8 10.3085C25.8 9.04248 27.3162 8.39262 28.233 9.26572L42.1847 22.5524C43.4124 23.7216 43.3695 25.6932 42.092 26.8079L28.1867 38.9414C27.2552 39.7542 25.8 39.0926 25.8 37.8564V32.3581C25.8 32.3581 10.8695 29.6685 6.08025 38.4593C5.63374 39.2789 3.89328 39.5657 4.24706 35.4764C5.72648 27.9499 8.75001 16.1999 25.8 16.1999V10.3085Z"
                          fill="white"
                        ></path>
                      </g>
                      <path
                        data-v-1ff3be3e=""
                        opacity="0.03"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M36.0958 16.8L38.8639 22.3362C39.3536 23.3155 39.1184 24.5021 38.2921 25.2206L25.8958 36C25.8958 36 25.2958 39 27.0958 39C28.8958 39 43.2958 25.8 43.2958 25.8C43.2958 25.8 43.8958 24 42.0958 22.2C40.2958 20.4 36.0958 16.8 36.0958 16.8Z"
                        fill="#161823"
                      ></path>
                      <path
                        data-v-1ff3be3e=""
                        opacity="0.09"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M25.7997 16.8389V32.4389C25.7997 32.4389 11.5114 30.4255 7.03635 37.2389C2.73042 43.7949 3.12588 29.8349 9.60816 22.8829C16.0904 15.931 25.7997 16.8389 25.7997 16.8389Z"
                        fill="url(#ShareShadowColor_paint0_radial)"
                      ></path>
                      <defs data-v-1ff3be3e="">
                        <filter
                          data-v-1ff3be3e=""
                          id="ShareShadowColor_filter0_d"
                          x="1.79995"
                          y="7.66563"
                          width="43.6786"
                          height="35.2335"
                          filterUnits="userSpaceOnUse"
                          color-interpolation-filters="sRGB"
                        >
                          <feFlood
                            data-v-1ff3be3e=""
                            flood-opacity="0"
                            result="BackgroundImageFix"
                          ></feFlood>
                          <feColorMatrix
                            data-v-1ff3be3e=""
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          ></feColorMatrix>
                          <feOffset data-v-1ff3be3e="" dy="1.2"></feOffset>
                          <feGaussianBlur
                            data-v-1ff3be3e=""
                            stdDeviation="1.2"
                          ></feGaussianBlur>
                          <feColorMatrix
                            data-v-1ff3be3e=""
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
                          ></feColorMatrix>
                          <feBlend
                            data-v-1ff3be3e=""
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow"
                          ></feBlend>
                          <feBlend
                            data-v-1ff3be3e=""
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow"
                            result="shape"
                          ></feBlend>
                        </filter>
                        <radialGradient
                          data-v-1ff3be3e=""
                          id="ShareShadowColor_paint0_radial"
                          cx="0"
                          cy="0"
                          r="1"
                          gradientUnits="userSpaceOnUse"
                          gradientTransform="translate(26.324 42.5462) rotate(-113.046) scale(19.0955 18.771)"
                        >
                          <stop data-v-1ff3be3e=""></stop>
                          <stop
                            data-v-1ff3be3e=""
                            offset="0.995496"
                            stop-opacity="0.01"
                          ></stop>
                          <stop
                            data-v-1ff3be3e=""
                            offset="1"
                            stop-opacity="0.01"
                          ></stop>
                        </radialGradient>
                      </defs>
                    </svg>
                  </p>
                  <p className={classes.tiktokButtonText}>Share</p>
                </div>
              </div>
            </div>

            <div className={classes.tiktokFooter}>
              <div className={classes.tiktokFooterBlock}>
                <h6 className={classes.tiktokUsername}>Adbuy.com</h6>
                <p className={classes.tiktokTags}>#ad #perfect #hit #startup</p>
                <div>
                  <h6 className={classes.tiktokMusic}>{soundName}</h6>
                </div>
              </div>
              <img
                src="https://i.postimg.cc/Y093g3JJ/Adbuy-new-logo.png"
                className={classes.tiktokDisc}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={classes.adchooseButton} onClick={handleClick}>
          <div className={classes.adchooseCircle}></div>
        </div>
    </div>
  );
};

export default AdBanner;
