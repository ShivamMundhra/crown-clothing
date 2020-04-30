import React, { Component } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectDirectorySections } from "../../redux/directory/directory.selectors";
import MenuItem from "../menu-items/MenuItem.component";

import "./Directory.styles.scss";

// We Should Use functional Component Here because there is no local state requirement
class Directory extends Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
      <div className="directory-menu">
        {this.props.sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
