import React from "react";
import { Link } from "react-router";

export default class Layout extends React.Component {
  navigate() {
    this.props.history.replaceState(null, "/");
  }
  render() {
    const {history} = this.props;
    console.log(history.isActive("archives"));
    return (
      <div>
        <h1> KillerNews.net</h1>
        {this.props.children}
        <Link to="archives" activeClassName="test"><button class="btn btn-success">archives</button></Link>
        <Link to="settings" class="btn btn-primary">settings</Link>
        <button class="btn btn-danger" onClick={this.navigate.bind(this)}>Featured</button>
      </div>
    );
  }
}
