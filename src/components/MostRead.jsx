import React, { Component } from "react";

class MostRead extends Component {
  renderListMostRead = () => {
    var listMostJSX = this.props.data.map((item, index) => {
      return (
        <div key={index} className="post post-widget">
          <a className="post-img" href={item.url}>
            <img src={item.urlToImage} alt="true" />
          </a>
          <div className="post-body">
            <h3 className="post-title">
              <a href={item.url}>{item.title}</a>
            </h3>
          </div>
        </div>
      );
    });
    return listMostJSX;
  };
  render() {
    // console.log(this.props.data);
    return (
      <div>
        {/* post widget */}
        <div className="aside-widget">
          <div className="section-title">
            <h2>Most Read</h2>
          </div>
          {this.renderListMostRead()}
          {/* <div className="post post-widget">
            <a className="post-img" href="blog-post.html">
              <img src={widget1} alt="true" />
            </a>
            <div className="post-body">
              <h3 className="post-title">
                <a href="blog-post.html">
                  Tell-A-Tool: Guide To Web Design And Development Tools
                </a>
              </h3>
            </div>
          </div>
          <div className="post post-widget">
            <a className="post-img" href="blog-post.html">
              <img src={widget2} alt="true" />
            </a>
            <div className="post-body">
              <h3 className="post-title">
                <a href="blog-post.html">
                  Pagedraw UI Builder Turns Your Website Design Mockup Into Code
                  Automatically
                </a>
              </h3>
            </div>
          </div>
          <div className="post post-widget">
            <a className="post-img" href="blog-post.html">
              <img src={widget3} alt="true" />
            </a>
            <div className="post-body">
              <h3 className="post-title">
                <a href="blog-post.html">
                  Why Node.js Is The Coolest Kid On The Backend Development
                  Block!
                </a>
              </h3>
            </div>
          </div>
          <div className="post post-widget">
            <a className="post-img" href="blog-post.html">
              <img src={widget4} alt="true" />
            </a>
            <div className="post-body">
              <h3 className="post-title">
                <a href="blog-post.html">
                  Tell-A-Tool: Guide To Web Design And Development Tools
                </a>
              </h3>
            </div>
          </div>
          {/* /post widget */}
        </div>
      </div>
    );
  }
}

export default MostRead;
