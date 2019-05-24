/* PostsPage */

import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import {
  makeSelectPosts,
  makeSelectLoading,
  makeSelectError,
} from 'containers/App/selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { loadPosts } from '../App/actions';
import PostsList  from '../../components/PostsList';

const key = 'posts';

export function PostsPage({ loading, error, posts, fetchPosts }) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  useEffect(() => {
    // When initial state username is not null, submit the form to load repos
    fetchPosts();
  }, []);

  console.log(posts);

  const postsListProps = {
    loading,
    error,
    posts,
  };

  return (
    <div>
      <Helmet>
        <title>PostsPage</title>
        <meta name="description" content="Description of PostsPage" />
      </Helmet>
      <FormattedMessage {...messages.header} />
      <PostsList {...postsListProps} />
    </div>
  );
}

PostsPage.propTypes = {
  // dispatch: PropTypes.func.isRequired,
  fetchPosts: PropTypes.func,
  posts: PropTypes.array,
};

const mapStateToProps = createStructuredSelector({
  posts: makeSelectPosts(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

export function mapDispatchToProps(dispatch) {
  return {
    fetchPosts: () => dispatch(loadPosts()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(PostsPage);
