/**
 *
 * PostsList
 *
 */

import React, { memo } from 'react';
// import styled from 'styled-components';

import PropTypes from 'prop-types';
import List from 'components/List';
import LoadingIndicator from 'components/LoadingIndicator';

import PostsListItem from '../PostsListItem';

function PostsList({ loading, error, posts }) {
  if (loading) {
    return <List component={LoadingIndicator} />;
  }

  if (error !== false) {
    const ErrorComponent = () => (
      <List item="Something went wrong, please try again!" />
    );
    return <List component={ErrorComponent} />;
  }

  if (posts !== false) {
    return <List items={posts} component={PostsListItem} />;
  }

  return null;
}

PostsList.propTypes = {
  posts: PropTypes.array,
};

export default memo(PostsList);
