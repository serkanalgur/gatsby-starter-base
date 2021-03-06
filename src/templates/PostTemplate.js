import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import 'prismjs/themes/prism-okaidia.css';

import Article from '../components/Article';
import Layout from '../components/Layout';
import Post from '../components/Post';

const PostTemplate = props => {
  const {
    data: {
      post,
      authorNote: { html: authorNote },
    },
  } = props;

  return (
    <Layout>
      <Article>
        <Post post={post} authorNote={authorNote} />
      </Article>
    </Layout>
  );
};

PostTemplate.propTypes = {
  data: PropTypes.object.isRequired,
  pageContext: PropTypes.object.isRequired,
};

export default PostTemplate;

export const query = graphql`
  query PostTemplateQuery($slug: String!) {
    post: markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      fileAbsolutePath
      fields {
        slug
        prefix
      }
      frontmatter {
        title
        category
      }
    }
    authorNote: markdownRemark(fileAbsolutePath: { regex: "/authorNote/" }) {
      html
    }
  }
`;
