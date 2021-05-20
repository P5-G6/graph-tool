import React, { useCallback, useEffect, useRef, useState } from "react";

import List from "../../List";

import styled, { keyframes } from "styled-components";
import ListItem from "../../ListItem";

import { AiOutlineDown } from "react-icons/ai";
import useTransiion from "../../hooks/transition";

// import { slideInTop, slideOutTop } from "../../../appassets";

const DURATION = 200;

// SECTION ANIMATIONS:

const show = keyframes`
    0% {
        opacity: 0;
        transform: translateY(-25px);
    }
    100% {
        opacity: 1;
        transform: translate(0);
    }
`;

const hide = keyframes`
    0% {
        opacity: 1;
        transform: translateY(0);
    }
    100% {
        opacity: 0;
        transform: translateY(-25px);
    }
`;

// SECTION

const Transitions = {
  "open-transition": show,
  "close-transition": hide,
};

export default function Dropdown({ onChange }) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const { mode } = useTransiion({ visible: open, duration: DURATION });

  const handleToggle = useCallback(() => {
    setOpen(!open);
  }, [open]);

  const handleSelect = useCallback(
    ({ title, value }) => {
      setSelected(title);
      if (onChange) onChange(value);
      handleToggle();
    },
    [onChange, handleToggle]
  );

  const RenderItem = () => {
    return <ListItem onPress={handleSelect} title="teste" value={0} />;
  };

  return (
    <Container>
      <Field onClick={handleToggle}>
        <div className="drop-down-value">{selected}</div>
        <Icon />
      </Field>
      {mode !== "hidden" ? (
        <OptionsList transition={Transitions[mode] ?? "none"}>
          <List data={[1, 2, 3, 4, 5, 6, 7]} renderItem={RenderItem} />
        </OptionsList>
      ) : null}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  height: 25px;
  width: 100%;
  min-width: 90px;
  flex-direction: row;
`;

const Field = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px;

  border: 1px solid black;
  border-radius: 10px;

  .drop-down-value {
    display: flex;
    flex-direction: row;
    font-size: 15px;
  }
`;

const Icon = styled(AiOutlineDown)`
  display: flex;
  font-size: 15px;
`;

const OptionsList = styled.div`
  display: flex;
  position: absolute;
  top: 40px;
  width: 120px;
  height: 200px;
  background-color: #fff;

  border-radius: 10px;

  overflow: hidden;

  animation-name: ${({ transition }) => transition};
  animation-duration: ${DURATION / 1000}s;

  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;
