import React, { Component } from 'react';
export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
        <div className="row section-head">
          <div className="ten columns">
            <p className="lead">
              Feel free to contact me for any work or suggestions below
            </p>
          </div>
        </div>
        <div className="row">
          <aside className="eigth columns footer-widgets">
            <div className="widget">
              <h4>Linked in :
                {resumeData.linkedinId}
              </h4>
              <h4>
                Phone : +880 1521-331738
              </h4>
              <h4>
                E-mail : sourovejubair@gmail.com
              </h4>
            </div>
          </aside>
        </div>
      </section>
    );
  }
}