import React from 'react';
import PropTypes from 'prop-types';

function MainContent(props) {
    var mainContentStyle = {
        marginBottom: '4rem',
        width: '100%'
    };

    return React.createElement(
        'div',
        { style: mainContentStyle },
        props.children
    );
}
MainContent.propTypes = {
    children: PropTypes.oneOfType([PropTypes.array.isRequired, PropTypes.object.isRequired])
};

export default MainContent;