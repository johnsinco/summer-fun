import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom'
import ScrollableAnchor from 'react-scrollable-anchor'

class Home extends Component {

  render() {
    return (
      <div className="homepage">
      <div className="header">
          <div className="home-menu pure-menu pure-menu-horizontal pure-menu-fixed">
              <a className="pure-menu-heading" href="">Summer Fun!</a>

              <ul className="pure-menu-list">
                  <li className="pure-menu-item pure-menu-selected"><a href="#home" className="pure-menu-link">Home</a></li>
                  <li className="pure-menu-item"><a href="#tour" className="pure-menu-link">Tour</a></li>
                  <li className="pure-menu-item"><a href="#signup" className="pure-menu-link">Sign Up!</a></li>
              </ul>
          </div>
      </div>

      <div className="splash-container">
          <div className="splash">
            <ScrollableAnchor id={'home'}>
              <h1 className="splash-head">SUMMER FUN!</h1>
              </ScrollableAnchor>
              <p className="splash-subhead">
                COMPLETE CHALLENGES! HAVE FUN! EARN POINTS AND PRIZES!  CHALLENGE YOUR FRIENDS!
              </p>
              <p>
                <Link className="pure-button pure-button-primary" to="/register">REGISTER NOW!</Link>
              </p>
          </div>
      </div>

      <div className="content-wrapper">
          <div className="content">
            <ScrollableAnchor id={'tour'}>
              <h2 className="content-head is-center">Get Started</h2>
            </ScrollableAnchor>

              <div className="pure-g">
                  <div className="l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">

                      <h3 className="content-subhead">
                          <i className="fa fa-rocket"></i>
                          WHAT IS IT?
                      </h3>
                      <p>
                          Summer Fun is an online system to help kids keep learning and be active all summer!
                      </p>
                  </div>
                  <div className="l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">
                      <h3 className="content-subhead">
                          <i className="fa fa-mobile"></i>
                          WHO IS IT FOR?
                      </h3>
                      <p>
                        Parents, Care providers, Churches, Grandparents, and KIDS!
                      </p>
                  </div>
                  <div className="l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">
                      <h3 className="content-subhead">
                          <i className="fa fa-th-large"></i>
                          WHAT CAN I DO?
                      </h3>
                      <p>
                          Parents and Kids decide on Challenges like Reading Books, Getting Exercise,
                          and anything that makes Summer FUN!
                      </p>
                  </div>
                  <div className="l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">
                      <h3 className="content-subhead">
                          <i className="fa fa-check-square-o"></i>
                          GET REWARDS
                      </h3>
                      <p>
                          Kids can earn BADGES and LEVELS, and parents and care providers can setup
                          PRIZES kids can earn for completing challenges!
                      </p>
                  </div>
              </div>
          </div>

          <div className="content">
            <ScrollableAnchor id={'signup'}>
              <h2 className="content-head is-center">REGISTER NOW</h2>
            </ScrollableAnchor>
      <h1>TODO.... INSERT REGISTER COMPONENT HERE!</h1>
              <div className="pure-g">
                  <div className="l-box-lrg pure-u-1 pure-u-md-2-5">
                      <form className="pure-form pure-form-stacked">
                          <fieldset>

                              <label for="name">Your Name</label>
                              <input name="name" type="text" placeholder="Your Name" />


                              <label for="email">Your Email (login id)</label>
                              <input name="email" type="email" placeholder="Your Email" />

                              <label for="Organization">Your Organization</label>
                              <input name="org" type="text" placeholder="Your Organization" />

                              <label for="password">Your Password</label>
                              <input name="password" type="password" placeholder="Your Password" />

                              <button type="submit" className="pure-button">Sign Up</button>
                          </fieldset>
                      </form>
                  </div>

                  <div className="l-box-lrg pure-u-1 pure-u-md-3-5">
                      <h4>How To Register</h4>
                      <p>
                        Parents, Caregivers, and Organizations, register for an account for yourself or your organization.
                        Then add your competitors and challenges, and log progress for your team!
                                                </p>

                      <h4>More Information</h4>
                      <p>
                        <a href="mailto:johnstewartco@outlook.com">Contact us</a> for information about customizing SUMMER FUN! for your organization.
                      </p>
                  </div>
              </div>

          </div>

      </div>
      </div>
    );
  }
}

export default Home;
