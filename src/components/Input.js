import React from 'react';
import PropTypes from 'prop-types';

const Input = props => {
    let input;
    let timeout = 0;
    const { onSubmit } = props;
    return (
        <span>
            <h1>Search for a Github username</h1>
            <form
                onChange={e => {
                    console.log(input.value);
                      if(timeout) clearTimeout(timeout);
                    e.preventDefault();
                    if (input.value || input.value != "") {
                         timeout = setTimeout(()=>{ 
                             onSubmit(input.value); }, 1000);
                        ;
                    }
                }}
            >
                <input
                    type="text"
                    ref={node => {
                        input = node;
                    }}
                />
            </form>
        </span>
    );
};

Input.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};

export default Input;
