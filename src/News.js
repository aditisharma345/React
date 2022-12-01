/* FUNCTION BASED COMPONENT */
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setpage] = useState(1);

  const capitalizefirstletter = (string) => {
    return string.charAt(0).toUpperCase;
  };
  const updatenews = async () => {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${props.category}&apiKey=5bcce1c83df947f59344596ac6e12240&page=${
      page + 1
    }&pagesize=6`;
    setLoading(true);
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json();
    props.setProgress(70);
    setArticles(parsedData.articles);
    setLoading(false);
    props.setProgress(100);
  };

  useEffect(() => {
    updatenews();
  }, []);

  /*  */
  const handlePrevClick = async () => {
    setpage(page - 1);
    updatenews();
  };

  /*  */
  const handleNextClick = async () => {
    setpage(page + 1);
    updatenews();
  };
  const fetchMoreData = async () => {
    setpage(page + 1);
    const url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${props.category}&apiKey=5bcce1c83df947f59344596ac6e12240&page=${
      page + 1
    }&pagesize=6`;
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
  };

  /*  */

  return (
    <div className="container my-3">
      <h1 className="text-center">
        News- {capitalizefirstletter(props.category)} Headlines
      </h1>
      {/* !loading && */ loading && <Spinner />}
      <div className="row">
        {articles.map((element) => (
          <div className="col-md-4" key={element.url}>
            <NewsItem
              title={element.title}
              description={element.description}
              urlToImage={element.urlToImage}
              newsurl={element.url}
              author={element.author}
              date={element.publishedAt}
            />
          </div>
        ))}
      </div>
      <div className="container  d-flex justify-content-between">
        <button
          disabled={page <= 1}
          type="button"
          className="btn btn-dark"
          onClick={handlePrevClick}
        >
          Previous
        </button>
        <button
          type="button"
          className="btn btn-dark"
          onClick={handleNextClick}
        >
          Next
        </button>
      </div>
    </div>
  );
};
News.defaultProps = {
  country: "us",
  category: "entertainment",
};
News.propTypes = {
  country: PropTypes.string,
  category: PropTypes.string,
};
export default News;

//
//
//
//
// /* CLASS BASED COMPONENT */
// import PropTypes from "prop-types";
// import React, { Component } from "react";
// import NewsItem from "./NewsItem";
// import Spinner from "./Spinner";

// export class News extends Component {
//   static defaultProps = {
//     country: "us",
//     category: "entertainment",
//   };
//   static propTypes = {
//     country: PropTypes.string,
//     category: PropTypes.string,
//   };

//   constructor() {
//     super();
//     console.log("hyya");
//     this.state = {
//       articles: [],
//       loading: false,
//       page: 1,
//     };
//   }
//   async componentDidMount() {
//     let url = `https://newsapi.org/v2/top-headlines?country=${
//       props.country
//     }&category=${
//       props.category
//     }&apiKey=5bcce1c83df947f59344596ac6e12240&page=${
//       this.state.page + 1
//     }&pagesize=6`;
//     let data = await fetch(url);
//     let parsedData = await data.json();
//     this.setState({
//       ...this.state.articles,
//       articles: parsedData.articles,
//       totalResults: parsedData.totalResults,
//       loading: false,
//     });
//   }

//   /*  */
//   handlePrevClick = async () => {
//     console.log("handlePreviousClick");

//     let url = `https://newsapi.org/v2/top-headlines?country=${
//       props.country
//     }&category=${
//       props.category
//     }&apiKey=5bcce1c83df947f59344596ac6e12240&page=${
//       this.state.page - 1
//     }&pagesize=6`;
//     this.setState({ loading: true });
//     let data = await fetch(url);
//     let parsedData = await data.json();
//     console.log(parsedData);

//     this.state({
//       page: this.state.page - 1,
//       articles: parsedData.articles,
//       loading: false,
//     });
//   };

//   /*  */
//   handleNextClick = async () => {
//     console.log("handleNextClick");

//     if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / 6))) {
//     }
//     let url = `https://newsapi.org/v2/top-headlines?country=${
//       props.country
//     }&category=${
//       props.category
//     }&apiKey=5bcce1c83df947f59344596ac6e12240&page=${
//       this.state.page + 1
//     }&pagesize=6`;
//     this.setState({ loading: true });
//     let data = await fetch(url);
//     let parsedData = await data.json();
//     this.setState({ loading: false });
//     this.state({
//       page: this.state.page + 1,
//       articles: parsedData.articles,
//       loading: false,
//     });
//   };

//   /*  */
//   render() {
//     return (
//       <div className="container my-3">
//         <h1 className="text-center">News-Headlines</h1>
//         {/* !this.State.loading && */ this.state.loading && <Spinner />}
//         <div className="row">
//           {this.state.articles.map((element) => (
//             <div className="col-md-4" key={element.url}>
//               <NewsItem
//                 title={element.title}
//                 description={element.description}
//                 urlToImage={element.urlToImage}
//                 newsurl={element.url}
//                 author={element.author}
//                 date={element.publishedAt}
//               />
//             </div>
//           ))}
//         </div>
//         <div className="container  d-flex justify-content-between">
//           <button
//             disabled={this.state.page <= 1}
//             type="button"
//             className="btn btn-dark"
//             onClick={this.handlePrevClick}
//           >
//             Previous
//           </button>
//           <button
//             type="button"
//             className="btn btn-dark"
//             onClick={this.handleNextClick}
//           >
//             Next
//           </button>
//         </div>
//       </div>
//     );
//   }
// }

// export default News;
