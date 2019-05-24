/**
 * PostsListItem
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function PostsListItem(props) {
  const post = props.item;
  return (
    <div>
      <FormattedMessage {...messages.header} />
      {/*<h1>{post.title}</h1>*/}
      {/*<p>{post.content}</p>*/}
    </div>
  );
}

PostsListItem.propTypes = {
  item: PropTypes.object,
  id: PropTypes.number,
};

export default PostsListItem;
