import React from 'react';
import { View, Text } from 'react-native';
import { MotiView } from 'moti';

import { UserPhoto } from '../UserPhoto';

import { IMessageProps } from './@interfaces';
import { styles } from './styles';

export function Message({ data }: IMessageProps) {
  return (
    <MotiView
      from={{ opacity: 0, translateY: -50 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ type: 'timing', duration: 700 }}
      style={styles.container}
    >
      <Text style={styles.message}>{data.text}</Text>

      <View style={styles.footer}>
        <UserPhoto sizes="SMALL" imageUri={data.user.avatar_url} />

        <Text style={styles.userName}>{data.user.name}</Text>
      </View>
    </MotiView>
  );
}
