import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {selectDirectoySections} from '../../redux/directory/directory.selector';
import MenuItem from '../menu-item/menu-item.component';
import './item-showcase.style.scss';

const ItemShowcase = ({sections}) => {
        return (
            <div className='item-showcase'>
                {
                    sections.map(({id, ...sectionProps}) => (
                        <MenuItem key={id} {...sectionProps} />
                    ))
                }
            </div>
        )    
}

const mapStateToProps = createStructuredSelector({
    sections: selectDirectoySections
})

export default connect(mapStateToProps)(ItemShowcase);