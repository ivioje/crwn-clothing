import React from 'react';
import MenuItem from '../menu-item/MenuItem.component';
import './directory.styles.scss';

class Directory extends React.Component {
    constructor() {
        super();

        this.state = {
            sections: [
                {
                    title: 'hats',
                    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                    id: 1,
                    linkUrl: 'shop/hats'
                },
                {
                    title: 'jackets',
                    imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                    id: 2,
                    linkUrl: ''
                },
                {
                    title: 'sneakers',
                    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                    id: 3,
                    linkUrl: 'shop/hats'
                },
                {
                    title: 'womens',
                    imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                    id: 4,
                    linkUrl: '',
                    size:'large'
                },
                {
                    title: 'mens',
                    imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                    id: 5,
                    linkUrl: '',
                    size:'large'
                },
            ]
        }
    }
    render() {
        return(

        <div className='directory-menu'>
            {
this.state.sections.map(({title, imageUrl, id, linkUrl, size }) => (
    <MenuItem key={id} title={title} linkUrl={linkUrl} imageUrl={imageUrl} size={size} />
))
            }
        </div>
        )
    }
}

export default Directory
