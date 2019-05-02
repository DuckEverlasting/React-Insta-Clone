import React from "react";
import ls from "local-storage";

const withAuthenticate = PostsPage => EntryPage =>
  class extends React.Component {
    constructor() {
      super();
      this.state = {
        loggedIn: false
      };
    }

    componentDidMount() {
      if (ls("current-user")) {
        this.setState({
          loggedIn: true
        });
      }
    }

    render() {
      if (this.state.loggedIn) {
        return <PostsPage />;
      } else {
        return <EntryPage />;
      }
    }
  };

export default withAuthenticate;
