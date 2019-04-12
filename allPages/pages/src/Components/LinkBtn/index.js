import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


const LinkBtn = ({ to, label }) => {
    return (
        <BrowserRouter>
            <Link to={to}>
                <button>
                    <span>{label}</span>
                </button>
            </Link>
        </BrowserRouter>
    )
}

LinkBtn.propTypes = {
    to: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
}

export default LinkBtn