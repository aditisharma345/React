/* FUNCTION BASED COMPONENT */
import React from "react";

const NewsItem = (props) => {
  let { title, description, urlToImage, newsurl, author, date } = props;
  return (
    <div className="my-3">
      <div className="card">
        <img
          src={
            urlToImage
              ? urlToImage
              : "https://images.forexlive.com/images/china%20COVID%20zero%20end_id_df42932f-ac7f-416e-b7b2-0f5038462ef9_size900.jpg"
          }
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text">
            <small className="text-muted">
              By {!author ? "Unknown" : author} on
              {new Date(date).toGMTString()}
            </small>
          </p>

          <a
            rel="noreferrer"
            href={newsurl}
            target="blank"
            className="btn btn-sm btn-dark"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
/*  https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize} */
