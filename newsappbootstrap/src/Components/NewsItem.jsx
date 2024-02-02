import React from "react";

const NewsItem = ({ title, description, url }) => {
  return (
    <div
      className="card mb-3 bg-dark text-light my-3 mx-3 px-2 py-2"
      style={{ maxWidth: "345px" }}
    >
      <img
        style={{ width: "325px", height: "200px" }}
        src={
          url ??
          "https://cdn.pixabay.com/photo/2017/06/26/19/03/news-2444778_960_720.jpg"
        }
        alt=""
        className="card-img-top"
      />
      <div className="card-body">
        <h5 className="fs-4">{title.slice(0, 50)}</h5>
        <p className="fs-6 mb-3">
          {description ? description.slice(0, 90) : "No description available."}
        </p>
        <a href="/" className="btn btn-primary">
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsItem;
