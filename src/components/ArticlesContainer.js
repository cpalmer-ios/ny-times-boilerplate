import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchArticles } from "../redux";

const ArticleContainer = ({ nytData, fetchArticles }) => {
  useEffect(() => {
    fetchArticles();
  }, []);

  console.log(nytData.loading);

  return (
    <div>
      {nytData.loading ? (
        <h2>Loading...</h2>
      ) : nytData.error ? (
        <h2>{nytData.error}</h2>
      ) : (
        <div>
          <h2>Top Stories List</h2>
          <div>
            {nytData &&
              nytData.articles &&
              nytData.articles.map((article) => (
                <>
                  <p>{article.id}</p>
                  <p>{article.name}</p>
                  <p>{article.email}</p> 
                  <p>{article.website}</p>
                </>
              ))}
          </div>
        </div>
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    nytData: state.articles,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchArticles: () => dispatch(fetchArticles()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ArticleContainer);
