import React from "react";
import { Platform, StyleSheet, Text, TouchableOpacity } from "react-native";
import LinearGradient from 'react-native-linear-gradient';

const styles = StyleSheet.create({
  button: {
    marginHorizontal: 0
  },
  gradient: {
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white"
  }
});

class GradientButton extends React.PureComponent {
  render() {
    const {
      children,
      style,
      text,
      textStyle,
      gradientBegin,
      gradientEnd,
      disabledGradientBegin,
      disabledGradientEnd,
      gradientDirection,
      height,
      width,
      radius,
      onPressAction,
      purpleViolet,
      violetPink,
      pinkDarkGreen,
      blueViolet,
      blueMarine,
      deepBlue,
      disabled,
      activeOpacity
    } = this.props;

    const purpleVioletColor = ["#7B42F6", "#B01EFF"];
    const violetPinkColor = ["#B01EFF", "#E1467C"];
    const pinkDarkGreenColor = ["#E1467C", "#205284"];
    const blueVioletColor = ["#3672F8", "#B01EFF"];
    const blueMarineColor = ["#14F1D9", "#3672F8"];
    const deepBlueColor = ["#4F73C3", "#3C46A2"];
    const disabledColor = [disabledGradientBegin || "#D3D3D3", disabledGradientEnd || "#696969"];

    const horizontalGradient = {
      start: { x: 0, y: 0.5 },
      end: { x: 1, y: 0.5 }
    };

    const verticalGradient = {
      start: { x: 0, y: 0 },
      end: { x: 0, y: 1 }
    };

    const content = (text ? <Text style={[styles.text, textStyle]}>{text}</Text> : children);

    return (
      <TouchableOpacity
        style={[styles.button, { height, width }, style]}
        activeOpacity={activeOpacity}
        onPress={disabled ? null : () => {
          if (onPressAction) {
            return onPressAction();
          }
        }}
      >
        <LinearGradient
          style={[styles.gradient, { borderRadius: radius }]}
          colors={
            disabled
              ? disabledColor
              : purpleViolet
              ? purpleVioletColor
              : violetPink
              ? violetPinkColor
              : pinkDarkGreen
              ? pinkDarkGreenColor
              : blueViolet
              ? blueVioletColor
              : blueMarine
              ? blueMarineColor
              : deepBlue
              ? deepBlueColor
              : [gradientBegin, gradientEnd]
          }
          start={
            gradientDirection === "vertical"
              ? verticalGradient.start
              : horizontalGradient.start
          }
          end={
            gradientDirection === "vertical"
              ? verticalGradient.end
              : horizontalGradient.end
          }
        >
          { content }
        </LinearGradient>
      </TouchableOpacity>
    );
  }
}

GradientButton.defaultProps = {
  gradientBegin: "#00d2ff",
  gradientEnd: "#3a47d5",
  gradientDirection: "horizontal",
  height: 75,
  radius: 25,
  impact: false,
  impactStyle: "Heavy",
  textStyle: {},
  disabled: false,
  disabledGradientBegin: "#D3D3D3",
  disabledGradientEnd: "#696969",
  activeOpacity:0.2
};

export default GradientButton;
