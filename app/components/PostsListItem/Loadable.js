/**
 *
 * Asynchronously loads the component for PostsListItem
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
