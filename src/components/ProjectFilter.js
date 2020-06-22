import React from "react";
import { connect } from "react-redux";
import styled from "@emotion/styled";
import { setTextFilter } from "../actions/filters";

const InputContainer = styled.div`
  margin: 10vh 0 0 10px;
  @media (max-width: 1024px) {
    width: 100%;
    margin: 0;
    margin-top: 7vh;
    margin-left: 25px;
  }
  @media (max-width: 815px) {
    margin: 0;
    margin-top: 5vh;
    margin-left: 20px;
  }
  @media (max-width: 600px) {
    margin-top: 7vh;
  }
`;

const FilterInput = styled.input`
  width: 650px;
  border: none;
  background: transparent;
  margin: 0 0 5px;
  padding-top: 5px;
  padding-bottom: 5px;
  &:focus {
    outline: 0;
    border-bottom: 1px solid #ef626b;
  }
  @media (max-width: 1024px) {
    width: 95vw;
  }
  @media (max-width: 700px) {
    width: 90vw;
    margin-left: 0;
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
        <br />
        <FilterInput
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
