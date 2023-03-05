import React from "react";
import { Routes, Navigate, Route } from "react-router-dom";
import { connect } from "react-redux";
import Dashboard from "../pages/Viewer/Home/Dashboard";
import TopicsBoard from "../pages/Viewer/Topics/TopicsBoard";
import DiscoverBoard from "../pages/Viewer/Discover/DiscoverBoard";

class PrivateRoutes extends React.Component {
  render() {
    const { isAuth } = this.props;
    if (isAuth) {
      return (
        <Routes>
          <Route path="/home" exact component = {<Dashboard />} />
          <Route path="/topics" exact element = {<TopicsBoard/>} />
          <Route path="/discover" exact element = {<DiscoverBoard />} />
        </Routes>
      );
    } else {
      alert("Login");
      return <Navigate to="/" />;
    }
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.login.isAuth,
});

export default connect(mapStateToProps, null)(PrivateRoutes);