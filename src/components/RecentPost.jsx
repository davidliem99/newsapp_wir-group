import React, { Component } from "react";
import moment from "moment";

class RecentPost extends Component {
  renderArticles = () => {
    var listRecentPost = this.props.data.splice(10, 6).map((item, index) => {
      return (
        <div key={index} className="col-md-4">
          <div className="post">
            <a className="post-img" href={item.url}>
              <img
                src={item.urlToImage}
                alt="true"
                style={{ objectFit: "contain" }}
              />
            </a>
            <div className="post-body">
              <div className="post-meta">
                <a href={item.url} style={{ color: "black" }}>
                  {this.props.category}{" "}
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
    return listRecentPost;
  };
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-12">
            <div className="section-title">
              <h2>Recent Posts</h2>
            </div>
          </div>
          {/* post */}
          {this.renderArticles()}
        </div>
        {/* /row */}
      </div>
    );
  }
}

export default RecentPost;
