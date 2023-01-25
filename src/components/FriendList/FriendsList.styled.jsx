import styled from 'styled-components';

export const FriendsTitle = styled.h2`
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: 40px;
  text-align: center;
`;

export const FriendsList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin: 0 auto;
  max-width: 250px;
  background-color: #fff;
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);

  :hover {
    transform: scale(1.05);
  }
`;

export const FriendsItem = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
  width: 100%;
  box-shadow: 0px 1px 3px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%),
    0px 2px 1px rgb(0 0 0 / 20%);
  border-radius: 0 0 4px 4px;
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);

  :hover {
    transform: scale(1.05);
  }
`;
