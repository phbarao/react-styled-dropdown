import React, { useState } from "react";
import { BsCaretDown, BsCaretUp } from "react-icons/bs";

import { useUnit } from "../../contexts/unit";
import {
  Main,
  DropDownContainer,
  DropDownHeader,
  DropDownList,
  DropDownListContainer,
  ListItem,
} from "./styles";

export default function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Matriz");

  const { units } = useUnit();

  function toggling() {
    setIsOpen(!isOpen);
  }

  const onOptionClicked = (value) => () => {
    setSelectedOption(value);
    setIsOpen(false);
  };

  return (
    <Main>
      <h1>Selecione uma filial</h1>
      <DropDownContainer>
        <DropDownHeader onClick={toggling}>
          {selectedOption}
          {!isOpen ? (
            <BsCaretDown className="arrow-icon" />
          ) : (
            <BsCaretUp className="arrow-icon" style={{ color: "#0ddac5" }} />
          )}
        </DropDownHeader>
        {isOpen && (
          <DropDownListContainer>
            <DropDownList>
              {units.map((unit) => (
                <ListItem onClick={onOptionClicked(unit)} key={Math.random()}>
                  {unit}
                </ListItem>
              ))}
            </DropDownList>
          </DropDownListContainer>
        )}
      </DropDownContainer>
      <small>
        Filial selecionada: <span>{`${selectedOption}`}</span>{" "}
      </small>

      <p className="credits">
        {`Developed by `}
        <a href="https://phbarao.github.io/my-page" rel="author">
          Pedro Barão
        </a>
      </p>
    </Main>
  );
}
