import React from 'react';
import Svg, { Path } from 'react-native-svg';

const StarRating = ({ filled }) => (
    <Svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
    >
        <Path
            d="M12 2l2.4 7.2h7.6l-6 4.8 2.4 7.2-6-4.8-6 4.8 2.4-7.2-6-4.8h7.6z"
            fill={filled ? 'yellow' : 'grey'}
        />
    </Svg>
);

export default StarRating;
