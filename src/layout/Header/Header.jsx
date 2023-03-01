import { useState } from 'react';
import { routes } from 'utils/routes';
import logo from '../../utils/logo.png';
import ButtonFunc from '../../components/ButtonFunc';


import { HeaderStyled, Container, Logo, Nav, MenuLink, DropMenu, DropdownMenu, DropMenuItem } from './Header.styled';

export const Header = () => {
  const [isProjectsMenuOpen, setIsProjectsMenuOpen] = useState(false);
  const [isAboutMenuOpen, setIsAboutMenuOpen] = useState(false);

  const handleProjectsMenuToggle = () => {
    setIsProjectsMenuOpen(!isProjectsMenuOpen);
  };

  const handleAboutMenuToggle = () => {
    setIsAboutMenuOpen(!isAboutMenuOpen);
  };

  return (
    <HeaderStyled>
      <Container>
        <Logo to={routes.HOME} end>
          <img src={logo} alt="Company logo" />
        </Logo>
        <Nav>
          <DropMenu>
            <div onClick={handleAboutMenuToggle} onFocus={() => null}>Про нас</div>
            {isAboutMenuOpen && (
              <DropdownMenu>
                <DropMenuItem to={routes.HISTORY}>Мета та історія фонду</DropMenuItem>
                <DropMenuItem to={routes.TEAM}>Команда та партнери</DropMenuItem>
                <DropMenuItem to={routes.DOCS}>Документація та звітність</DropMenuItem>
              </DropdownMenu>
            )}
          </DropMenu>
          <DropMenu>
            <div onClick={handleProjectsMenuToggle} onFocus={() => null}>Проєкти</div>
            {isProjectsMenuOpen && (
              <DropdownMenu>
                <DropMenuItem to={routes.CURRENT}>Поточні потреби</DropMenuItem>
                <DropMenuItem to={routes.SUCCESS}>Успішні історії</DropMenuItem>
              </DropdownMenu>
            )}
          </DropMenu>
          <MenuLink to={routes.CONTACTS}>Контакти</MenuLink>
        </Nav>
        <a href="#button_help">
          <ButtonFunc class="hero-button">
            Допомогти
          </ButtonFunc>
        </a>
      </Container>
    </HeaderStyled>
  );
};
