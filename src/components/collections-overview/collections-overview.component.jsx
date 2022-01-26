import React from "react";

import './collections-overview.styles.scss';

import CollectionPreview from '../../components/collection-preview/collection-preview.component';
import { connect } from "react-redux";
import {selectShopCollections} from '../../redux/shop/shop.selector';
import { createStructuredSelector } from "reselect";

const CollectionsOverview = ({collections}) => {
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
    collections : selectShopCollections
});

export default connect(mapStateToProps)(CollectionsOverview);