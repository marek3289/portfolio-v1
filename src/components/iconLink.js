import React from 'react';
import PropTypes from 'prop-types';

import {
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
  ExternalIcon,
} from '@assets';

const IconLink = ({ name }) => {
  switch (name) {
    case 'Github':
      return <GithubIcon />;
    case 'Instagram':
      return <InstagramIcon />;
    case 'Linkedin':
      return <LinkedinIcon />;
    case 'Twitter':
      return <TwitterIcon />;
    case 'External':
      return <ExternalIcon />;
    default:
      return null;
  }
};

IconLink.propTypes = {
  name: PropTypes.string.isRequired,
};

export default IconLink;
