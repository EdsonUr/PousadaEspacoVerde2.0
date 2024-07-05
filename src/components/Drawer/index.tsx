import React, { useEffect, useState } from "react";
import {
  CloseButton,
  DrawerContainer,
  Information,
  InformationsContainer,
  Section,
  LinkContainer,
  SectionsContainer,
} from "./style";
import logo from "../../assets/logo.svg";
import { FaAngleRight } from "react-icons/fa6";
import { modules } from "../../utils/modules";

interface Props {
  isOpen: boolean;
  setIsOpen: Function;
}

const Drawer = ({ isOpen, setIsOpen }: Props) => {
  const [currentSection, setCurrentSection] = useState<string>("/atracoes");

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleCurrentSection = (section: string) => {
    setCurrentSection(section);
    setIsOpen(false);
  };

  return (
    <DrawerContainer $isOpen={isOpen}>
      <CloseButton onClick={handleClose} />
      <img src={logo} alt="Logo Pousada" />
      <SectionsContainer>
        {modules.map((module, index) => {
          return (
            <LinkContainer key={index}>
              <FaAngleRight color={"var(--green)"} size={20} />
              <Section
                to={module.title}
                smooth={true}
                duration={800}
                $isActive={currentSection === module.link}
                onClick={() => handleCurrentSection(module.link)}
              >
                {module.title}
              </Section>
            </LinkContainer>
          );
        })}
      </SectionsContainer>

      <InformationsContainer>
        <Information>© Pousada Espaço Verde 2023</Information>
        <Information>Viçosa do Ceará - Ceará</Information>
      </InformationsContainer>
    </DrawerContainer>
  );
};

export default Drawer;
