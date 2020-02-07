import React from 'react';

//redux
import { connect } from "react-redux";


import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
import { removeFeatureAction, buyItemAction } from "./actions";

const App = ({car, additionalFeatures, additionalPrice, removeFeatureAction, buyItemAction}) => {
  console.log({car, additionalFeatures, additionalPrice});
  const removeFeature = item => {
    // dispatch an action here to remove an item
    removeFeatureAction(item);
  };

  const buyItem = item => {
    // dipsatch an action here to add an item
    console.log("buyItem", item);
    buyItemAction(item);
  };

  return (
      <div className="boxes">
        <div className="box">
          <Header car={car} />
          <AddedFeatures car={car} removeFeature={removeFeature} />
        </div>
        <div className="box">
          <AdditionalFeatures additionalFeatures={additionalFeatures} buyItem={buyItem}/>
          <Total car={car} additionalPrice={additionalPrice} />
        </div>
      </div>
  );
};

const mapStateToProps = state => {
  return {
    car: state.car,
    additionalFeatures: state.additionalFeatures,
    additionalPrice: state.additionalPrice
  }
}

export default connect(
  mapStateToProps,
  { removeFeatureAction, buyItemAction }
  )(App);
