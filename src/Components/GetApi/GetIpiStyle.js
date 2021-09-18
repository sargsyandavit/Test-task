import styled from "styled-components";

export const Block = styled.div`
  margin-top: 60px;
  height: 62vh;
  overflow-y: auto;
`;

export const Img = styled.img`
  width: 100px;
  height: 120px;
  margin: 10px;
`;

export const CateImges = styled.div`
  width: 90%;
  margin: 40px auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
`;

export const Button = styled.button`
  width: 270px;
  height: 50px;
  padding: 5px;
  font-size: 20px;
  font-weight: 700;
  color: white;
  background-color: brown;
  border: none;
  outline: none;
  margin-top: 150px;
  border-radius: 5px;
  cursor: pointer;
  margin: 28px auto;
  display: block;
  box-shadow: 0 0 3px 0 rgb(0 0 0 / 75%);
`;

export const FilterItem = styled.section`
  font-size: 18px;
  letter-spacing: 1px;
  font-family: sans-serif;
  font-weight: 700;
  color: ${(props) => (props.isActive ? "brown" : "black")};
  text-transform: capitalize;
  cursor: pointer;
`;

export const Filter = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
  font-size: 18px;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.25);

  ${FilterItem} + ${FilterItem} {
    margin-left: 15px;
  }
`;
