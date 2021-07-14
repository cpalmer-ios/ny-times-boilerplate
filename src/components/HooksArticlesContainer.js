import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchArticles } from "../redux";

function HooksArticlesContainer() {
  const data = useSelector((state) => state.articles);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Fetch The New York Times Top Stories with React Hooks</h2>
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
                  <h2 className="article__title">{article.title}</h2>
                  <p className="article__category"><strong>{article.section} - </strong>{article.subsection}</p>
                  <p className="article__strapline"><em>{article.abstract}</em></p> 
                  <p className="article__author"><strong>{article.byline}</strong></p>

                  {article.multimedia.map((img) => (
                  <img className="article__img" src={img.url}></img>
                  ))}

                </div>
              ))}
          </div>
        </div>
      )}

      
    </div>
  );
}

export default HooksArticlesContainer;
