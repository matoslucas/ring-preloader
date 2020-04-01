import React from "react";
import styled from "styled-components";

const ConfigContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

const Label = styled.label`
  width: 100px;
  display: flex;
  justify-content: flex-end;
`;

const Input = styled.input`
  font-family: "Courier New", Courier, monospace;
  font-size: 16px;
  width: 60px;
  padding: 0px;
  border: none;
  margin: 2px;
`;

export default function Configurator({
  size = 120,
  strokeWidth = 10,
  strokeLinecap = "round",
  timeSpin = "1s",
  timeDash = "2s",
  bgColor,
  color,
  fill = "transparent",
  onChange
}) {
  return (
    <ConfigContainer>
      <Row>
        <Label>Color:</Label>
        <Input
          type="color"
          onChange={e => onChange({ type: "color", value: e.target.value })}
          value={color}
        />
      </Row>
      <Row>
        <Label>BG Color:</Label>
        <Input
          type="color"
          onChange={e => onChange({ type: "bgColor", value: e.target.value })}
          value={bgColor}
        />
      </Row>
      <Row>
        <Label>Size:</Label>
        <Input
          type="number"
          onChange={e => onChange({ type: "size", value: e.target.value })}
          value={size}
          step="1"
        />
      </Row>
    </ConfigContainer>
  );
}
