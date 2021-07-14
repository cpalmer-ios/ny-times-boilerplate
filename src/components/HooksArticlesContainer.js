import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchArticles } from "../redux";

function HooksArticlesContainer() {
  const data = useSelector((state) => [state.articles]);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Fetch Content with Hooks</h2>
      <button onClick={() => dispatch(fetchArticles())}>Fetch Data</button>
      {data.loading ? (
        <h2>Loading...</h2>
      ) : data.error ? (
        <h2>{data.results}</h2>
      ) : (
        <div>
          <h2>Content List</h2>
          <div>
            {data.articles}
          </div>
        </div>
      )}

      
    </div>
  );
}

export default HooksArticlesContainer;
