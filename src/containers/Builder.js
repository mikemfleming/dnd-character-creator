import React, { Component } from 'react';
import { connect } from 'react-redux';
import Builder from '../components/Builder';
import { setRace, setSubrace } from '../actions';

const mapStateToProps = (state, ownProps) => {
  return {
    race: state.builder.race,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onSetRace: (e) => dispatch(setRace(e.target.value)),
    onSetSubrace: (e) => dispatch(setSubrace(e.target.value)),
  };
};

const Mike = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Builder);

export default Mike;
