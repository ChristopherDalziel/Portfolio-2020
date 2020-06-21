import React from "react";
import { connect } from "react-redux";
import styled from "@emotion/styled";
import { setTextFilter } from "../actions/filters";

const InputContainer = styled.div`
  margin: 10vh 0 0 10px;
  width: 650px;
`;

const FilterInput = styled.input`
  width: 100%;
  border: none;
  background: transparent;
  margin: 0 0 5px;
  padding-top: 5px;
  padding-bottom: 5px;
  &:focus {
    outline: 0;
    border-bottom: 1px solid #ef626b;
  }
`;

export class ProjectFilters extends React.Component {
  onTextChange = (e) => {
    this.props.setTextFilter(e.target.value);
  };

  render() {
    return (
      <InputContainer>
        <label>Search Projects:</label>
        <FilterInput
          autoFocus
          aria-label="Filter Input"
          type="text"
          placeholder="By name or technology used"
          value={this.props.filters.text}
          onChange={this.onTextChange}
        ></FilterInput>
      </InputContainer>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    filters: state.filters,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setTextFilter: (text) => dispatch(setTextFilter(text)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ProjectFilters);
