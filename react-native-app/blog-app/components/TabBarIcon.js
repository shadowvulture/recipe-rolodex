import React from 'react';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

import Colors from '../constants/Colors';

export default function TabBarIcon(props) {
  return (
    
    <MaterialCommunityIcons
      name={props.name}
      size={36}
      style={{ marginTop: 0 }}
      color={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
    />

  );
}
