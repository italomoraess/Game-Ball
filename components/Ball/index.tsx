import { View } from "react-native";
import { style } from "./styles";

type Props = {
  posY: number;
}

export const Ball = ({posY}: Props) => {
  return (
    <View style={[style.container, { bottom: posY }]}></View>
  )
}