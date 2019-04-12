import React from 'react';

const Image = ({ img }) =>
    <div>
        <img src = {img} />
    </div>


Image.displayName = 'Image';

export default Image