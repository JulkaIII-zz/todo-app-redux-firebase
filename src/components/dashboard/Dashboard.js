import React, { Component } from "react";
import NotesList from "../notes/NotesList";
import Notifications from "./Notifications";
import { connect } from "react-redux";

class Dashboard extends Component {
  render() {
    //console.log(this.props);
    const { notes } = this.props;
    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <NotesList notes={notes} />{" "}
            {/* pass notes down as a prop to NoteList component */}
          </div>
          <div className="col s12 m5 offset-m1">
            <Notifications />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    notes: state.note.notes // note-from rootReducer, which has notes in noteReducer
  };
};
// now we have notes propery inside the props of this component

export default connect(mapStateToProps)(Dashboard);
