import React from 'react';
import styled from 'styled-components/native';

import Stars from '../components/Stars';

type BarberItem = {
  key: number;
  barber: {
    avatar: string;
    name: string;
    stars: number;
  };
};

const Area = styled.TouchableOpacity`
  background-color: #ffffff;
  margin-bottom: 20px;
  border-radius: 20px;
  padding: 15px;
  flex-direction: row;
`;

const Avatar = styled.Image`
  width: 88px;
  height: 88px;
  border-radius: 20px;
`;

const InfoArea = styled.View`
  margin-left: 20px;
  justify-content: space-between;
`;

const UserName = styled.Text`
  font-size: 17px;
  font-weight: bold;
`;

const SeeProfileButton = styled.View`
  width: 85px;
  height: 26px;
  border: 1px solid #4eadbe;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`;

const SeeProfileButtonText = styled.Text`
  font-size: 13px;
  color: #268596;
`;

export default (props: BarberItem) => {
  return (
    <Area>
      <Avatar source={{uri: props.barber.avatar}} />
      <InfoArea>
        <UserName>{props.barber.name}</UserName>

        <Stars stars={props.barber.stars} showNumber={true} />

        <SeeProfileButton>
          <SeeProfileButtonText>Ver Perfil</SeeProfileButtonText>
        </SeeProfileButton>
      </InfoArea>
    </Area>
  );
};
