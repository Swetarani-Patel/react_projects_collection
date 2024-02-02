import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

const NewsBoard = ({ category }) => {
  const [news, setNews] = useState([]);
  const apikey = process.env.REACT_APP_NEWS_API_KEY;
  let API_URL = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apikey}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(API_URL);
        const data = await res.json();
        setNews(data.articles);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [category]);

  return (
    <div>
      <h2 className="text-center my-4">
        <span>
          Latest <span className="badge bg-danger">News</span>
        </span>
      </h2>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "1rem",
        }}
      >
        {news.map((ele, index) => (
          <NewsItem
            key={ele.id}
            title={ele.title}
            description={ele.description}
            url={ele.urlToImage}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default NewsBoard;
