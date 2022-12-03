import React from "react";

export default function Create() {
  return (
    <section className="create">
      <div className="create__wrapper">
        <h2 className="create__heading">Create Your Own Blog</h2>
        <div className="create__form">
          <form>
            <input
              type="file"
              className="create__form-img"
              placeholder="Add a Cover Image"
              required
            />
            <input
              type="text"
              className="create__form-title"
              name="title"
              placeholder="Add Title"
            />
            <input
              type="text"
              className="create__form-category"
              name="category"
              placeholder="Add Category"
            />
            <input
              type="text"
              className="create__form-body"
              name="body"
              placeholder="Add Text"
            />
            <button>Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
}
