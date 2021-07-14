import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchArticles } from "../redux";

function HooksArticlesContainer() {
  const data = useSelector((state) => state.articles);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Fetch Content with Hooks</h2>
      <button onClick={() => dispatch(fetchArticles())}>Fetch Data</button>
      {data.loading ? (
        <h2>Loading...</h2>
      ) : data.error ? (
        <h2>{data.error}</h2>
      ) : (
        <div>
          <h2>Content List</h2>
          <div>
            {data &&
              data.articles &&
              data.articles.map((article) => (
                <div key={article.created_date}>
                  <p>{article.section}</p>
                  <p>{article.subsection}</p>
                  <p>{article.title}</p>
                  <p>{article.abstract}</p> 
                  <p>{article.byline}</p>
                  <img src={article.multimedia[0]}></img>
                </div>
              ))}
          </div>
        </div>
      )}

      
    </div>
  );
}

export default HooksArticlesContainer;
