import React from "react";

const NoteSummary = ({ note }) => {
  return (
    <div className="card z-depth-0 note-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">{note.title}</span>
        <p>Posted by Julka</p>
        <p className="grey-text">3rd september</p>
      </div>
    </div>
  );
};
export default NoteSummary;
