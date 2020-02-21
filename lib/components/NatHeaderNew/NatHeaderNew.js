import React from 'react';
import {
  View,
} from 'react-native';
import PropTypes from 'prop-types';

import { load as loadSvg } from '../../assets/icons/svg';

import {
  HeaderWrapper,
  HeaderTitle,
  IconPress,
  InputIcon,
} from './NatHeaderNew.styles';

const styles = {
  elevation: 1,
  shadowColor: '#000',
  shadowOffset: {
    height: 2,
    width: 0,
  },
  shadowOpacity: 0.24,
};

export const NatHeaderNew = ({
  title,
  node,
  iconLeft,
  iconRight,
  onPressRight,
  onPressLeft,
}) => {
  if (!title) {
    throw new Error('Title should not empty string');
  }

  const renderIcon = (iconData, iconPress, position) => {
    let styleCustom = {};

    if (position === 'right') {
      styleCustom = { position: 'absolute', right: 0 };
    }
    if (iconData && iconData.svg) {
      const IconComponent = loadSvg(iconData.svg.name);
      const iconSize = (iconData.svg.size) ? iconData.svg.size : 24;

      return (
        <View style={styleCustom}>
          <IconPress onPress={iconPress} position={position}>
            <IconComponent width={iconSize} height={iconSize} />
          </IconPress>
        </View>
      );
    }
    if (iconData && iconData.content) {
      return (
        <View style={styleCustom}>
          <IconPress onPress={iconPress} position={position}>
            <InputIcon source={iconData.content} />
          </IconPress>
        </View>
      );
    }
    if (iconPress) {
      return (
        <View style={styleCustom}>
          <IconPress onPress={iconPress} position={position}>
            <InputIcon source={iconData} />
          </IconPress>
        </View>
      );
    }

    return (
      <View style={styleCustom}>
        <IconPress onPress={iconPress} position={position} />
      </View>
    );
  };

  return (
    <HeaderWrapper
      accessible
      accessibilityRole="header"
      style={styles}
    >
      { iconLeft !== false && renderIcon(iconLeft, onPressLeft, 'left') }
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        { node && node}
        { !node && (
          <HeaderTitle
            accessibilityLabel={`${title}`}
          >
            {title}
          </HeaderTitle>
        )}
      </View>
      { iconRight !== false && renderIcon(iconRight, onPressRight, 'right') }
    </HeaderWrapper>
  );
};

NatHeaderNew.propTypes = {
  iconLeft: PropTypes.string,
  iconRight: PropTypes.string,
  node: PropTypes.node,
  onPressLeft: PropTypes.func,
  onPressRight: PropTypes.func,
  title: PropTypes.string,
};

NatHeaderNew.defaultProps = {
  iconLeft: null,
  iconRight: null,
  node: null,
  onPressLeft: () => {},
  onPressRight: () => {},
  title: null,
};