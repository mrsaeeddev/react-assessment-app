import React from 'react';
import PropTypes from 'prop-types';

const List = props => (
    <ul>
        {props.repos.map(repo => (
            repo.id < 3 ?
            <li key={repo.id}>
                <h3>{repo.name}</h3>
                <p>{repo.description}</p>
            </li> : null
        ))}
    </ul>
);

List.propTypes = {
    repos: PropTypes.array.isRequired,
};

export default List;
