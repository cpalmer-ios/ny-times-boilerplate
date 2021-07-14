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
          <h2>Top Stories</h2>
          <div>
            {data &&
              data.articles &&
              data.articles.map((article) => (
                <div className="article__card" key={article.created_date}>

                  <h2 className="article__title">{article.title}</h2>
                  <p className="article__category"><strong>{article.section} - </strong>{article.subsection}</p>

                  {article.multimedia.map((img, index) => (
                  <img className={'article__img_'+index} src={img.url}></img>
                  ))}
                  <p className="article__strapline"><em>{article.abstract}</em></p> 
                  <p className="article__author"><strong>{article.byline}</strong></p>

                </div>
              ))}
          </div>
        </div>
      )}

      
    </div>
  );
}

export default HooksArticlesContainer;
