// Libs
import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";

// Styles
import { Container, SectionsContainer, SectionButton } from "./styles";

// Hooks
import { getWindowSize } from "../../utils/getWindowSize";

// Assets
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { ReactComponent as Menu } from "../../assets/menu.svg";
import { Button } from "../Button";
import { modules } from "../../utils/modules";
import Drawer from "../Drawer";

// Renderer
export function NavBar() {
  const windowSize = getWindowSize();
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

  useEffect(() => {
    if (windowSize !== "mobile" && isDrawerOpen) {
      document.body.style.overflow = "unset";
      setIsDrawerOpen(false);
    }
  }, [isDrawerOpen, windowSize]);

  const handleDrawer = () => {
    setIsDrawerOpen(true);
  };

  return (
    <Container device={windowSize}>
      <Logo />
      {windowSize !== "mobile" ? (
        <SectionsContainer>
          {modules.map((module, index) => {
            return (
              <Link
                to={module.title}
                smooth={true}
                duration={800}
                key={index}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <SectionButton>{module.title}</SectionButton>
              </Link>
            );
          })}
          <Button
            size="small"
            text="reservar"
            onClick={() => {}}
            type="primary"
            redirect
          />
        </SectionsContainer>
      ) : (
        <>
          <Menu onClick={handleDrawer} style={{ cursor: "pointer" }} />
          <Drawer isOpen={isDrawerOpen} setIsOpen={setIsDrawerOpen} />
        </>
      )}
    </Container>
  );
}
