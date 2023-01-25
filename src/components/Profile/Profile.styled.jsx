import styled from 'styled-components';

export const ProfileCard = styled.div`
  margin: 10px auto;
  max-width: 300px;
  padding: 15px;
  background-color: #fff;
  box-shadow: 0px 1px 3px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%),
    0px 2px 1px rgb(0 0 0 / 20%);
  border-radius: 0 0 4px 4px;
`;

export const ProfileDescr = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  img {
    width: 50%;
    height: auto;
    border-radius: 50%;
    background-color: lightgrey;
  }
`;

export const ProfileName = styled.p`
  font-size: 20px;
  font-weight: 700;
`;

export const ProfileText = styled.p`
  font-size: 16px;
  color: grey;
`;
