import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-left: 25px;
  padding-right: 25px;

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
