import PropTypes from 'prop-types';
import cn from 'classnames';
import css from './Button.module.scss';

const Button = ({
    className,
    children,
    type,
    color,
    disabled,
    loading,
    onClick,
    ...attrs
}) => {
    const classes = cn(
        css.root,
        {[css.colored]: Boolean(color)},
        {[css[color]]: color},
        {[css.loading]: loading},
        className
    );

    return (
        <button
            className={classes}
            type={type}
            disabled={disabled}
            onClick={onClick}
            {...attrs}
        >
            {children}
        </button>
    );
};

Button.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    type: PropTypes.oneOf(['button', 'submit', 'reset']),
    color: PropTypes.oneOf(['primary', 'secondary']),
    disabled: PropTypes.bool,
    loading: PropTypes.bool,
    onClick: PropTypes.func,
};

Button.defaultProps = {
    type: 'button',
};

export default Button;
