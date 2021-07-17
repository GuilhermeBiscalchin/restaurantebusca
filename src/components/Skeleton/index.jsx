import React from "react";

import styled, { keyframes } from "styled-components";

const KeyFrameLoading = keyframes`
0%{
    opacity: 0.5;
}
100%{
    opactity:1;
}
`;

const LoadingSkeleto = styled.div`
  background-color: gray;
  border-radius: 6px;
  margin-bottom: 10px;
  min-width: ${(props) => props.width};
  height: ${(props) => props.height};
  animation: ${KeyFrameLoading} 500ms infinite alternate;
`;
export default ({ width, height }) => (
  <LoadingSkeleto width={width} height={height} />
);
