import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import moment from "moment";

class TopHeadline extends Component {
  renderArticles = () => {
    var listTopHeadline = this.props.data.splice(15, 2).map((item, index) => {
      return (
        <div key={index} className="col-md-6">
          <div className="post post-thumb">
            <a className="post-img" href={item.url}>
              <img
                src={item.urlToImage}
                alt="true"
                width="200px"
                style={{ objectFit: "contain" }}
              />
            </a>
            <div className="post-body">
              <div className="post-meta">
                <a className="post-category cat-2" href="category.html">
                  {this.props.category}
                </a>
                <span className="post-date">
                  {moment(item.publishedAt).format("LLL")}
                </span>
              </div>
              <h3 className="post-title">
                {/* <Link
                  to={`/detailpost/category=${this.props.category}&&${
                    item.title
                  }`}
                >
                  {item.title}
                </Link> */}
                <a href={item.url}>{item.title}</a>
              </h3>
            </div>
          </div>
        </div>
      );
    });
    return listTopHeadline;
  };

  render() {
    // console.log(this.props.data);
    return <div>{this.renderArticles()}</div>;
  }
}

export default TopHeadline;
