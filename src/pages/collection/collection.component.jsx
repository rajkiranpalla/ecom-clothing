import React from "react";
import './collection.styles.scss';

const CollectionPage = ({match}) => {
console.log(match.params);
    return (
  <div>
     <h1>Collection Page</h1>
  </div>
    );
};

export default CollectionPage;