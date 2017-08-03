
/*
 * Adapted from Traviskn's react-navgiation-slide-from-right-transition
 */

import { Animated, I18nManager } from 'react-native';

function forHorizontal(props) {
  const { layout, position, scene, navigation } = props;
  // console.log(navigation.state.routes);
  const index = scene.index;
  const inputRange = [index - 1, index, index + 1];

  const width = layout.initWidth;
  const outputRange = I18nManager.isRTL
    ? ([-width, 0, width * 0.5]: Array<number>)
    : ([width, 0, width * -0.5]: Array<number>);

  const translateX = position.interpolate({
    inputRange,
    outputRange,
  });

  return {
    transform: [{ translateX }],
  };
}

export default function getSlideFromRightTransitionConfig() {
  return {
    transitionSpec: {
      duration: 400,
      timing: Animated.timing,
    },
    screenInterpolator: forHorizontal,
  };
}