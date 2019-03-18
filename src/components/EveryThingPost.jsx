import React, { Component } from "react";
import moment from "moment";

class EveryThingPost extends Component {
  renderTopPost = () => {
    var topPost = this.props.data.splice(1, 1).map((item, index) => {
      return (
        <div key={index} className="col-md-12">
          <div className="post post-thumb">
            <a className="post-img" href={item.url}>
              <img src={item.urlToImage} alt="true" />
            </a>
            <div className="post-body">
              <div className="post-meta">
                <a className="post-category cat-3" href="category.html">
                  {this.props.category}
                </a>
                <span className="post-date">
                  {moment(item.publishedAt).format("LLL")}
                </span>
              </div>
              <h3 className="post-title">
                <a href={item.url}>{item.title}</a>
              </h3>
            </div>
          </div>
        </div>
      );
    });
    return topPost;
  };

  renderListPost = () => {
    var listPost = this.props.data.splice(1, 9).map((item, index) => {
      return (
        <div key={index} className="col-md-6">
          <div className="post">
            <a className="post-img" href={item.url}>
              <img src={item.urlToImage} alt="true" />
            </a>
            <div className="post-body">
              <div className="post-meta">
                <a className="post-category cat-4" href="category.html">
                  {this.props.category}
                </a>
                <span className="post-date">
                  {moment(item.publishedAt).format("LLL")}
                </span>
              </div>
              <h3 className="post-title">
                <a href={item.url}>{item.title}</a>
              </h3>
            </div>
          </div>
        </div>
      );
    });
    return listPost;
  };
  render() {
    return (
      <div>
        {/* Top Post */}
        {this.renderTopPost()}
        {/* /Top Post */}
        {/* post */}
        {this.renderListPost()}
      </div>
    );
  }
}

export default EveryThingPost;
