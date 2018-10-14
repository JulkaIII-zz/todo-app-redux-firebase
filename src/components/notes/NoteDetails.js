import React from "react";

const NoteDetails = props => {
  const id = props.match.params.id;
  console.log(props);
  return (
    <div className="container section note-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Note Title - {id}</span>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit magni
            mollitia impedit quis, voluptatibus doloribus exercitationem,
            perspiciatis quibusdam ratione non praesentium, porro quisquam
            recusandae blanditiis tenetur? Autem reprehenderit temporibus
            molestias!
          </p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by Julka</div>
          <div>2nd eptember, 2am</div>
        </div>
      </div>
    </div>
  );
};
export default NoteDetails;
