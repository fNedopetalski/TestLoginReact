import React from 'react';
import { Platform } from 'react-native';
import {createSwitchNavigator } from 'react-navigation';

import EscolheSala from './../screens/Salas/EscolheSala'
import CriarSala from './../screens/Salas/CriarSala'
import EntrarSala from './../screens/Salas/EntrarSala'

export default createSwitchNavigator({
  EscolheSala: EscolheSala,
  CriarSala: CriarSala,
  EntrarSala: EntrarSala,
});
