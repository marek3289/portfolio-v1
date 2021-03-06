import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

const query = graphql`
    query {	
      site {	
        siteMetadata {	
          title
          description
          author
          keywords
          url
          lang
        }	
      }
      image: imageSharp(fixed: {originalName: {eq: "page.png"}}) {
        fixed {
          src
        }
      }
    }
`;

const SEO = ({ title }) => {
  const { site, image } = useStaticQuery(query);	
  const { description, author, url, keywords, lang } = site.siteMetadata;

  const metaTitle = title || site.siteMetadata.title;
  const metaImage = new URL(image.fixed.src, url);
 
  return (
    <Helmet
      htmlAttributes={{lang}}
      title={metaTitle}
      meta={[
        {
          name: `description`,
          content: description,
        },
        {
          property: `og:title`,
          content: metaTitle,
        },
        {
          property: `og:description`,
          content: description,
        },
        {
          property: `og:url`,
          content: url,
        },
        {
          property: `og:image`,
          content: metaImage,
        },
        {
          property: `og:image:type`,
          content: 'image/png',
        },
        {
          property: `og:locale`,
          content: lang,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          name: `twitter:creator`,
          content: author,
        },
        {
          name: `twitter:title`,
          content: metaTitle,
        },
        {
          name: `twitter:description`,
          content: description,
        },
        {
          name: `twitter:url`,
          content: url,
        },
        {
          name: `twitter:image`,
          content: metaImage,
        },
      ].concat(keywords && keywords.length > 0 ? {
        name: 'keywords',
        content: keywords,
      } : [])}
    />
  );
};

SEO.defaultProps = {
  title: '',
};

SEO.propTypes = {
  title: PropTypes.string,
};

export default SEO;
