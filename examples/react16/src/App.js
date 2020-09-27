import React from "react";
import Loadable from "react-loadable";
const PageA = Loadable({
  loader: () => import("./PageA"),
  loading: () => <div></div>,
});
export default class App extends React.Component {
  render() {
    return (
      <div className="react15-main">
        app
        <PageA></PageA>
      </div>
    );
  }
}
