import React from 'react';
import './Articles.scss';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Sidebar, Segment } from 'semantic-ui-react';
import Header from '../Header/Header';
import UserSpecificArticleComponent from './UserSpecificArticlesComponent';
import fetchArticlesFunc from '../../actions/articleActions';
import SideBarMenu from '../Menu/Menu';

export class UserSpecificArticleContainer extends React.Component {
  constructor() {
    super();
    this.state = {
    };
  }

  componentWillMount() {
    const { fetchArticles } = this.props;
    fetchArticles();
  }


  render() {
    const { articles } = this.props;
    const ArticlesComponents = articles.map(
      article => (
        <UserSpecificArticleComponent {...article} key={article.id} />
      ),
    );
    return (
      <React.Fragment>
        <Header />
        <React.Fragment>
          <Sidebar.Pushable as={Segment} attached="bottom">
            <SideBarMenu />
            <Sidebar.Pusher id="pusher" className="pusher-height">
              <div className="ui container">
                <div className="space">
                  <div className="ui header medium">
                    <h3>My Publications</h3>
                  </div>
                </div>
                <div className="ui grid">
                  <div className="twelve wide column">
                    <div className="space">
                      <div className="ui divided items">
                        {ArticlesComponents}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Sidebar.Pusher>
          </Sidebar.Pushable>
        </React.Fragment>
      </React.Fragment>
    );
  }
}

UserSpecificArticleContainer.propTypes = {
  fetchArticles: PropTypes.func.isRequired,
  articles: PropTypes.arrayOf(PropTypes.object),
};

UserSpecificArticleContainer.defaultProps = {
  articles: [],
};

const mapStateToProps = state => ({
  articles: state.ownArticles.articles,
});

export default connect(mapStateToProps, {
  fetchArticles: fetchArticlesFunc,
})(UserSpecificArticleContainer);
