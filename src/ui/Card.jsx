import PropTypes from 'prop-types';
import css from './Card.module.scss';

const Card = ({children}) => {
    return <div className={css.root}>{children}</div>;
};

Card.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Card;
