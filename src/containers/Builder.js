import React, { Component } from 'react';
import { connect } from 'react-redux';
import Builder from '../components/Builder';
import { setRace } from '../actions';

const mapStateToProps = (state, ownProps) => {
  return {
    race: state.builder.race,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => dispatch(setRace()),
  };
};

const Mike = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Builder);

export default Mike;
