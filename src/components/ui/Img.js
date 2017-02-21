import React, {PropTypes} from 'react';

const Img = ({img}) => (
  <div>
    <img {...img}/>
  </div>
);

Img.defaultProps = {
  img: {
    src: 'src do not defined',
    width: 35,
    height: 20,
    alt: 'alt image not found '
  }
};

Img.propTypes = {
  img: PropTypes.object
};

export default Img;
