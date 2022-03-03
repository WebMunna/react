import PropTypes from "prop-types"

const Button = ({ color, text, onClick}) => {
  return (
    <div className="btn" style={{ backgroundColor: color}} onClick={onClick}>
      {text}
    </div>
  )
}

Button.defaultProps ={
    color: "blue"
}

Button.prototype = {
    color: PropTypes.string,
    text: PropTypes.string.isRequired,
    onclick: PropTypes.func
}

export default Button