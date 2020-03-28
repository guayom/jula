import React from 'react';
import Link from 'gatsby-link'

export default ({ title, slug }) => {
    const url = `/blog/${slug}`
    return (
        <h2>
            <Link to={url}>
                { title }
            </Link>
        </h2>
    );
};