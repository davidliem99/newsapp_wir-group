import React, { Component } from "react";
import { connect } from "react-redux";
import { getNews } from "../actions";

import RecentPost from "../components/RecentPost";
import MostRead from "../components/MostRead";
import EveryThingPost from "../components/EveryThingPost";
import TopHeadline from "../components/TopHeadline";

class Technology extends Component {
  state = {
    selectCategory: "technology"
  };

  componentDidMount = () => {
    this.props.getNews(this.state.selectCategory);
  };

  render() {
    // console.log(this.props.news);
    return (
      <div>
        <center>
          <h1>Teknologi</h1>
        </center>
        {/* section */}
        <div className="section">
          {/* container */}
          <div className="container">
            {/* row */}
            <div className="row">
              {/* post */}
              <TopHeadline
                data={this.props.news}
                category={this.state.selectCategory}
              />
              {/* /post */}
            </div>
            {/* /row */}
            <RecentPost
              data={this.props.news}
              category={this.state.selectCategory}
            />
            {/* row */}
            <div className="row">
              <div className="col-md-8">
                <div className="row">
                  {/* post */}
                  <EveryThingPost
                    data={this.props.news}
                    category={this.state.selectCategory}
                  />
                  {/* /post */}
                </div>
              </div>
              {/* most read */}
              <div className="col-md-4">
                {/* post widget */}
                <MostRead data={this.props.news} />
                {/* /post widget */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { news: state.news };
};

export default connect(
  mapStateToProps,
  { getNews }
)(Technology);
