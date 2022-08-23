import React from "react";
import { useNavigation } from "@react-navigation/native";
import AnimatedLottieView from "lottie-react-native";
import pokemonAnimation from "./pokemon.json";

import * as S from "./styles";

export function Welcome() {
  const { navigate } = useNavigation();

  function handleNavigateToHome() {
    navigate("Home");
  }

  return (
    <S.Container>
      <S.Content>
        <S.WrapperIcon>
          <S.IconContent>
            <AnimatedLottieView autoPlay source={pokemonAnimation} loop />
          </S.IconContent>
        </S.WrapperIcon>

        <S.Title>Pokedon</S.Title>
        <S.SubTitle>Temukan semua pokemon ditempat ini</S.SubTitle>
      </S.Content>

      <S.Bottom>
        <S.Button onPress={handleNavigateToHome}>
          <S.ButtonText>Entrar</S.ButtonText>
        </S.Button>
      </S.Bottom>
    </S.Container>
  );
}
