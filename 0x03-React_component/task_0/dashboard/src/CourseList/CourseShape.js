import PropTypes from 'prop-types';

const courseShape = PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    credit: PropTypes.number.isRequired
});

export default courseShape;
