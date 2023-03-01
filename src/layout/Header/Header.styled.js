import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderStyled = styled.header`
  width: 100vw;
  margin: 0 auto;
  position: sticky;
  z-index: 100;
  background-color: #1E1E1E; 
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 86px;
  width: 100%;
  padding-left: 25px;
  padding-right: 25px;
  margin: 0 auto;

@media screen and (min-width: 768px) {
    max-width: 768px;
    padding-left: 50px;
    padding-right: 50px;
}

@media screen and (min-width: 1440px) {
    max-width: 1440px;
    padding-left: 109px;
    padding-right: 109px;
}
`;

export const Logo = styled(Link)`
  max-width: 100%;
  margin-right: 5px;
`;

export const PrimeryBtn = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ffd966;
  height: auto;
  padding-bottom: 12px;
  padding-top: 12px;
  padding-left: 24px;
  padding-right: 24px;
  color: #000;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover:not(.active),
  :focus:not(.active) {
  background-color:#f5dd95;
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-wrap: wrap;
  gap: 10%;
  min-width: 50%;
  margin-right: 5%;
`;

export const MenuLink = styled(Link)`
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  color: #fff;
  &.active {
    color: #FFD966;
  }

  &:hover:not(.active),
  &:focus:not(.active) {
    color: #FFD966;
  }
`;

export const DropMenu = styled.div`
  position: relative;
  padding-right: 10px;
  padding-bottom: 33px;
    padding-top: 33px;
    color: #FFF;
    font-weight: 200;

      &::after {
    content: '';
    position: absolute;
    top: 52%;
    right: 0px;
    width: 0;
    height: 0;
    border-top: 5px solid transparent;
    border-bottom: 5px solid transparent;
    border-left: 5px solid #fff;
    transform: translateY(-50%) rotate(90deg);
  }
`;

export const DropMenuItem = styled(Link)`
  display: block;
  padding: 10px;
  text-decoration: none;
  color: #000;
  border: 1px solid #e5e5e5;
  &:hover {
    background-color: #e5e5e5;
  }
`;

export const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  left: -30%;
  min-width: 200px;
  z-index: 1;
  opacity: 0;
  background-color: #f9f9f9;
  color: #000;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  ${DropMenu}:hover & {
    opacity: 1;
  }
`;
