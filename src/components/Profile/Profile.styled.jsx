import styled from 'styled-components';

export const ProfileTitle = styled.h2`
  margin-bottom: 20px;
  font-size: 40px;
  text-align: center;
`;

export const ProfileCard = styled.div`
  margin: 0 auto;
  max-width: 300px;
  background-color: #fff;
  box-shadow: 0px 1px 3px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%),
    0px 2px 1px rgb(0 0 0 / 20%);
  border-radius: 0 0 4px 4px;
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);

  :hover {
    transform: scale(1.05);
  }
`;

export const ProfileDescr = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 15px;
`;

export const ProfileImg = styled.img`
  width: 50%;
  height: auto;
  border-radius: 50%;
  background-color: lightgrey;
`;

export const ProfileName = styled.p`
  font-size: 20px;
  font-weight: 700;
`;

export const ProfileText = styled.p`
  font-size: 16px;
  color: grey;
`;

export const ProfileStats = styled.ul`
  display: flex;
  justify-content: center;
  background-color: ghostwhite;
  border-top: 1px solid lightgrey;
`;

export const ProfileStatsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  row-gap: 5px;
  padding: 20px;

  :not(:last-child) {
    border-right: 1px solid lightgrey;
  }
`;

export const ProfileStatsLabel = styled.span`
  color: grey;
`;

export const ProfileStatsQuantity = styled.span`
  font-weight: 500;
`;
