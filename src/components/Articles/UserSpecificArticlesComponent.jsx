import React from 'react';
import './Articles.scss';


const UserSpecificArticleComponent = (props) => {
  const {
    title, description, author, created_at, article_slug,
  } = props;
  return (
    <div className="item">
      <div className="image">
        <img alt="" src="https://placeimg.com/640/480/animals" />
      </div>
      <div className="top aligned content">
        <a className="header" href="article.html">{title}</a>
        <div className="excerpt">
          {description}
        </div>
        <div className="small-margin tagline">
          <span className="date">{created_at}</span>
        </div>
        <div className="tagline">
          <span className="date">
            By:
            {' '}
            {author.username}
            <span className="stay">
              {' '}
               / 500
              {' '}
              <i className="eye icon" />
              Views.
            </span>
          </span>
        </div>
      </div>
      <div className="right float">
        <a href="deleted.html"><i className="icon red trash" /></a>
          &nbsp;&nbsp;&nbsp;&nbsp;
        <a href="editarticle.html"><i className="icon green edit outline" /></a>
          &nbsp;&nbsp;&nbsp;&nbsp;
        <a href="progile"><i className="icon green chart line" /></a>
          &nbsp;&nbsp;&nbsp;&nbsp;
      </div>
    </div>
  );
};

export default UserSpecificArticleComponent;
