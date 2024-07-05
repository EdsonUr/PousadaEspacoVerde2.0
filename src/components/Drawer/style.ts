import styled from "styled-components";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-scroll";
import { navbarText, secondaryText, textButton } from "../../styles/global";

export const DrawerContainer = styled.div<{ $isOpen: boolean }>`
  transform: ${({ $isOpen }) =>
    $isOpen ? "translateX(0)" : "translateX(100%)"};
  visibility: ${({ $isOpen }) => ($isOpen ? "visible" : "hidden")};
  height: 100%;
  width: 100%;
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  background-color: var(--gray);
  padding: 1.3rem 1.7rem;
  display: flex;
  flex-direction: column;
  transition: transform 300ms ease, visibility 300ms;
  align-items: center;
  row-gap: 1rem;
`;

export const CloseButton = styled(IoMdClose)`
  font-size: 1.7rem;
  color: var(--green);
  align-self: flex-end;
  cursor: pointer;
`;

export const SectionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  width: 100%;
  overflow: auto;
  height: 100%;
  margin-top: 1rem;
`;

export const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  column-gap: 1rem;
`;

export const Section = styled(Link)<{ $isActive: boolean }>`
  ${textButton};
  text-decoration: none;
  width: 100%;
  color: var(--green);
  font-weight: ${({ $isActive }) => ($isActive ? "bold" : "normal")};
  padding: ${({ $isActive }) => ($isActive ? "10px 0px 6px 0px" : "10px 0px")};
  border-bottom: ${({ $isActive }) =>
    $isActive ? "3px solid var(--green)" : "none"};
  cursor: pointer;
`;

export const InformationsContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.4rem;
  text-align: center;
`;

export const Information = styled.p`
  ${navbarText};
  font-weight: 400;
  color: var(--green);
`;
