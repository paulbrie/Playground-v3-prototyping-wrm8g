import React from 'react'

import { Helmet } from 'react-helmet'

import Comment from '../components/comment'
import projectStyles from '../style.module.css'
import styles from './breakpoints-settings-modal1.module.css'

const BreakpointsSettingsModal1 = (props) => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Breakpoints Settings Modal1 - Playground v3 prototyping</title>
        <meta
          property="og:title"
          content="Breakpoints Settings Modal1 - Playground v3 prototyping"
        />
      </Helmet>
      <h1 className={styles['text']}>Breakpoints Settings Modal</h1>
      <div className={styles['modal']}>
        <div
          className={` ${styles['container01']} ${projectStyles['modal-title']} `}
        >
          <span>Breakpoints Settings</span>
        </div>
        <div className={projectStyles['line']}>
          <div className={styles['container03']}>
            <img
              alt="pasted-image"
              src="/playground_assets/[object Object]-0x5q.svg"
              className={styles['pasted-image']}
            />
            <span>Mobile</span>
          </div>
          <div className={styles['container04']}>
            <div className={styles['container05']}>
              <img
                alt="pasted-image"
                src="/playground_assets/[object Object]-fjef.svg"
                className={styles['pasted-image01']}
              />
              <span>400</span>
            </div>
            <span className={styles['text04']}>px</span>
          </div>
        </div>
        <div className={projectStyles['line']}>
          <div className={styles['container07']}>
            <div className={styles['container08']}>
              <img
                alt="pasted-image"
                src="/playground_assets/[object Object]-0x5q.svg"
                className={styles['pasted-image02']}
              />
            </div>
            <span>Mobile Landscape</span>
          </div>
          <div className={styles['container09']}>
            <div className={styles['container10']}>
              <img
                alt="pasted-image"
                src="/playground_assets/[object Object]-fjef.svg"
                className={styles['pasted-image03']}
              />
              <span>720</span>
            </div>
            <span className={styles['text07']}>px</span>
          </div>
        </div>
        <div className={projectStyles['line']}>
          <div className={styles['container12']}>
            <img
              alt="pasted-image"
              src="/playground_assets/[object Object]-0x5q.svg"
              className={styles['pasted-image04']}
            />
            <span>Tablet</span>
          </div>
          <div className={styles['container13']}>
            <div className={styles['container14']}>
              <img
                alt="pasted-image"
                src="/playground_assets/[object Object]-fjef.svg"
                className={styles['pasted-image05']}
              />
              <span>960</span>
            </div>
            <span className={styles['text10']}>px</span>
          </div>
        </div>
        <div className={projectStyles['line']}>
          <div className={styles['container16']}>
            <img
              alt="pasted-image"
              src="/playground_assets/[object Object]-0x5q.svg"
              className={styles['pasted-image06']}
            />
            <span>Laptop</span>
          </div>
          <div className={styles['container17']}>
            <div className={styles['container18']}>
              <img
                alt="pasted-image"
                src="/playground_assets/[object Object]-fjef.svg"
                className={styles['pasted-image07']}
              />
              <span className={styles['text12']}>1200</span>
            </div>
            <span className={styles['text13']}>px</span>
          </div>
        </div>
        <div className={projectStyles['line']}>
          <div className={styles['container20']}>
            <div className={styles['container21']}></div>
            <span>Desktop</span>
          </div>
          <div className={styles['container22']}>
            <div className={styles['container23']}>
              <img
                alt="pasted-image"
                src="/playground_assets/[object Object]-fjef.svg"
                className={styles['pasted-image08']}
              />
              <span className={styles['text15']}>1600</span>
            </div>
            <span className={styles['text16']}>px</span>
          </div>
        </div>
        <div className={projectStyles['line']}>
          <div className={styles['container25']}>
            <div className={styles['container26']}></div>
            <span>Wide</span>
          </div>
          <div className={styles['container27']}>
            <div className={styles['container28']}>
              <img
                alt="pasted-image"
                src="/playground_assets/[object Object]-fjef.svg"
                className={styles['pasted-image09']}
              />
              <span className={styles['text18']}>1920</span>
            </div>
            <span className={styles['text19']}>px</span>
          </div>
        </div>
        <div
          className={` ${styles['container29']} ${projectStyles['modal-title']} `}
        >
          <div className={styles['container30']}>
            <span className={styles['text20']}>
              <span>
                If you delete a breakpoint, all its associated data will be
                destroyed. This operation cannot be undone.
              </span>
            </span>
          </div>
        </div>
        <div
          className={` ${styles['container31']} ${projectStyles['modal-title']} `}
        >
          <div className={styles['container32']}>
            <div className={styles['container33']}></div>
          </div>
          <div className={styles['container34']}>
            <div className={styles['container35']}>
              <span className={styles['text22']}>Cancel</span>
            </div>
          </div>
          <div className={styles['container36']}>
            <div className={styles['container37']}>
              <span className={styles['text23']}>Apply</span>
            </div>
          </div>
        </div>
      </div>
      <Comment
        text="&lt;-- On error"
        rootClassName="root-class-name8"
      ></Comment>
      <Comment
        text="&lt;-- On hover"
        rootClassName="root-class-name9"
      ></Comment>
      <Comment
        text="&lt;-- Selected. On click, by default, all the value is selected. Only chars are accepted, no spaces. Value is cleaned on blur"
        rootClassName="root-class-name10"
      ></Comment>
      <span className={styles['text24']}>
        <span>General remarks</span>
        <br></br>
        <span></span>
        <br></br>
        <span>
          - the modal is opening on right click on any media query icon
        </span>
        <br></br>
        <span>
          -
          <span
            dangerouslySetInnerHTML={{
              __html: ' ',
            }}
          />
        </span>
        <span>
          the values of the breakpoints must remain &quot;logical&quot;. Ex:
          Desktop cannot be smaller than Laptop
        </span>
        <br></br>
        <span>- i</span>
        <span>
          f the user inserts an invalid value we will display the following
          message as a notification
          <span
            dangerouslySetInnerHTML={{
              __html: ' ',
            }}
          />
        </span>
        <span>
          &quot;$breakpointName must be [smaller|bigger] than
          $breakpointName&quot; and/or same message will appear also as a
          tooltip with no delay, to be tested
        </span>
        <br></br>
        <span>- there should always be at least on active value</span>
        <br></br>
        <span>- values are saved on blur (and only if they are valid)</span>
        <br></br>
        <span>- new values cannot be changed unless all values are valid</span>
        <br></br>
        <span>- a breakpoint value can be edited only if it is enabled</span>
        <br></br>
        <span>
          - please use the blue icon from this prototype for the ckecked status
        </span>
        <br></br>
        <span>
          - when the mouse is hovering the &lt;--&gt; symbol, the cursor
          changes, and the value can be changed by mouse down + move left/right
        </span>
        <br></br>
        <span></span>
      </span>
    </div>
  )
}

export default BreakpointsSettingsModal1
