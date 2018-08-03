import React from 'react';
import { createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';

import LoginScreen from './../screens/auth/LoginScreen';
import CadastroScreen from './../screens/auth/CadastroScreen';
import EsqueceuSenhaScreen from './../screens/auth/EsqueceuSenhaScreen';

export default createSwitchNavigator({
  Login: LoginScreen,
  Cadastro: CadastroScreen,
  EsqueceuSenha: EsqueceuSenhaScreen,
  Main: MainTabNavigator,
});