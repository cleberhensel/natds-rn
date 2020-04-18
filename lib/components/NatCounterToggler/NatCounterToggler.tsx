/* eslint-disable max-statements, complexity, max-lines */
import React, { useState } from 'react';
import { Platform, TouchableNativeFeedback } from 'react-native';
import { colors } from '../../assets/theme/colors/colors';
import {
  CounterView,
  ContentViewDefault,
  ContentViewLeft,
  ContentViewRight,
  CustomTouchableHighlight,
  CustomTextOperators,
} from './NatCounterToggler.styles';

type NatCounterTogglerProps = {
  color: string,
  counter: number,
  height?: string,
  max: number,
  min: number,
  onDecrease: (...args: any[]) => any,
  onIncrease: (...args: any[]) => any,
  width?: string
};
export const NatCounterToggler: React.SFC<NatCounterTogglerProps> = ({
  onIncrease,
  onDecrease,
  counter,
  color,
  width,
  height,
  min,
  max,
}) => {
  const [decreaseDisabled, setDecreaseDisabled] = useState(true);
  const [increaseDisabled, setIncreaseDisabled] = useState(false);
  const [decreaseColor, setDecreaseColor] = useState(colors.bw.grayLight);
  const [increaseColor, setIncreaseColor] = useState(colors.primary.white);
  const actionHandler = (action) => {
    if (action === 'increase') {
      onIncrease();
      if (counter === min) {
        setDecreaseColor(colors.primary.white);
        setDecreaseDisabled(false);
      }
      if (counter + 1 === max) {
        setIncreaseColor(colors.bw.grayLight);
        setIncreaseDisabled(true);
      }
    } else {
      onDecrease();
      if (counter === max) {
        setIncreaseColor(colors.primary.white);
        setIncreaseDisabled(false);
      }
      if (counter - 1 === min) {
        setDecreaseColor(colors.bw.grayLight);
        setDecreaseDisabled(true);
      }
    }
  };

  return Platform.OS === 'android' ? (
    <CounterView color={color} width={width} height={height}>
      <TouchableNativeFeedback
        disabled={decreaseDisabled}
        onPress={() => actionHandler('decrease')}
      >
        <ContentViewLeft color={decreaseColor}>
          <CustomTextOperators>-</CustomTextOperators>
        </ContentViewLeft>
      </TouchableNativeFeedback>

      <ContentViewDefault>
        <CustomTextOperators>{counter}</CustomTextOperators>
      </ContentViewDefault>

      <TouchableNativeFeedback
        disabled={increaseDisabled}
        onPress={() => actionHandler('increase')}
      >
        <ContentViewRight color={increaseColor}>
          <CustomTextOperators>+</CustomTextOperators>
        </ContentViewRight>
      </TouchableNativeFeedback>
    </CounterView>
  ) : (
    <CounterView color={color}>
      <CustomTouchableHighlight
        disabled={decreaseDisabled}
        onPress={() => actionHandler('decrease')}
      >
        <ContentViewLeft color={decreaseColor}>
          <CustomTextOperators>-</CustomTextOperators>
        </ContentViewLeft>
      </CustomTouchableHighlight>

      <ContentViewDefault>
        <CustomTextOperators>{counter}</CustomTextOperators>
      </ContentViewDefault>

      <CustomTouchableHighlight
        disabled={increaseDisabled}
        onPress={() => actionHandler('increase')}
      >
        <ContentViewRight color={increaseColor}>
          <CustomTextOperators>+</CustomTextOperators>
        </ContentViewRight>
      </CustomTouchableHighlight>
    </CounterView>
  );
};
NatCounterToggler.defaultProps = {
  height: null,
  width: null,
};
