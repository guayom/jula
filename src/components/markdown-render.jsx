import React from 'react';

export default ({ childMarkdownRemark: {html} }) => {
    return(
        <div dangerouslySetInnerHTML={{ __html: html }} />
    );
};