import React from "react";

import './collections-overview.styles.scss';

import CollectionPreview from '../../components/collection-preview/collection-preview.component';
import { connect } from "react-redux";
import {selectCollectionForPreview} from '../../redux/shop/shop.selector';
import { createStructuredSelector } from "reselect";

const CollectionsOverview = ({collections}) => {
console.log(collections);
    return (
        <div className='collections-overview'>
        {
        collections.map(({id,...otherCollectionProps}) => {
           return <CollectionPreview key={id} {...otherCollectionProps}> </CollectionPreview>
        })
        }
    </div>
    )
};

const mapStateToProps = createStructuredSelector({
    collections : selectCollectionForPreview
});

export default connect(mapStateToProps)(CollectionsOverview);