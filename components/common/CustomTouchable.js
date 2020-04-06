import React from "react";
import {
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform
} from "react-native";

const CustomTouchable = props => {
  const TouchableComponent =
    Platform.OS === "android" && Platform.Version > 21 ? (
      <TouchableNativeFeedback />
    ) : (
      <TouchableOpacity />
    );
  return <TouchableComponent {...props} />;
};
export default CustomTouchable;
