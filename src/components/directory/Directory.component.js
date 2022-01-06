import React, { useState } from 'react';
import MenuItem from '../menu-item/MenuItem.component';
import './directory.styles.scss';

function Directory() {
    const [sections, setSections] = useState(
        [
            {
                title: 'hats',
                imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                id: 1,
                linkUrl: 'hats'
            },
            {
                title: 'jackets',
                imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                id: 2,
                linkUrl: ''
            },
            {
                title: 'sneakers',
                imageUrl: 'https://images.unsplash.com/photo-1516478177764-9fe5bd7e9717?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80',
                id: 3,
                linkUrl: ''
            },
            {
                title: 'womens',
                imageUrl: 'https://images.unsplash.com/photo-1545007805-a44ee83438fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
                id: 4,
                linkUrl: '',
                size: 'large'
            },
            {
                title: 'mens',
                imageUrl: 'https://images.unsplash.com/photo-1549037173-e3b717902c57?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80',
                id: 5,
                linkUrl: '',
                size: 'large'
            },
        ]
    )

    return (

        <div className='directory-menu'>
            {
                sections.map(({ id, ...otherSectionProps }) => (
                    <MenuItem key={id} {...otherSectionProps} />
                ))
            }
        </div>
    )
}

export default Directory
