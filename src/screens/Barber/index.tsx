import React, {useEffect, useState} from 'react';
import {Text} from 'react-native';
import {Container} from './styles';
import {useNavigation, useRoute} from '@react-navigation/native';
import Api from '../../Api';
import {RootRouteProps} from '../../stacks/MainStack';

export default () => {
  const navigation = useNavigation();
  const route = useRoute<RootRouteProps<'Barber'>>();

  const [userInfo, setUserInfo] = useState({
    id: route.params.id,
    avatar: route.params.avatar,
    name: route.params.name,
    stars: route.params.stars,
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getBarberInfo = async () => {
      let json = await Api.getBarber(userInfo.id);
      if (json.error === '') {
        setUserInfo(json.data);
      } else {
        alert('Error: ' + json.error);
      }

      setLoading(false);
    };
    getBarberInfo();
  }, []);

  return (
    <Container>
      <Text>Barbeiro: {userInfo.name}</Text>
    </Container>
  );
};
