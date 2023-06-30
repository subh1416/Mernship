import React from "react";

function AddWork() {
  const divStyle = {
    height: "100px",
  };

  const colorjuw = {
    backgroundColor: '#9b59b6',
  };
  return (
    <div>
      <h1>Add Work</h1>

      <div className="input6757">
        <div className="form-floating my-4"  >
          <textarea
            className="form-control"
            placeholder="Leave a comment here"
            id="floatingTextarea"
            
           
          ></textarea>
          <label for="floatingTextarea">Add Title</label>
        </div>

        <div className="form-floating">
          <textarea
            className="form-control"
            placeholder="Leave a comment here"
            id="floatingTextarea2"
            style={divStyle}
          ></textarea>
          <label for="floatingTextarea2">Add Description</label>
        </div>

        <button type="button" class="btn btn-primary my-3" style={colorjuw}>
          Upload File
        </button>
        <button type="button" class="btn btn-secondary my-3">
          Save
        </button>
      </div>
    </div>
  );
}

export default AddWork;
