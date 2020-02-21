import React from 'react';
import {
  SafeAreaView,
  FlatList,
  View,
  ScrollView,
  Dimensions,
} from 'react-native';
import {
  NatContainer,
  NatText,
  NatLogo,
  NatSpace,
  ThemeNaturaLight,
} from '../../../lib';

const styles = {
  defaultScreen: {
    backgroundColor: '#FFF',
    width: Dimensions.get('window').width,
  },
};

export const StoryNatLogo = () => {
  const iconList = [
    { background: 'white', name: 'logo-natura-horizontal', size: 300 },
    { background: 'white', name: 'logo-natura-vertical', size: 300 },
    { background: ThemeNaturaLight.palette.text.primary, name: 'logo-natura-negative-horizontal', size: 300 },
    { background: ThemeNaturaLight.palette.text.primary, name: 'logo-natura-negative-vertical', size: 300 },
  ];

  const renderItem = (name, size, background) => (
    <View>
      <NatText type="body1" value={name} />
      <NatSpace backgroundColor={background} paddingTop="small" paddingBottom="small">
        <NatLogo name={name} size={size} />
      </NatSpace>
    </View>
  );

  return (
    <SafeAreaView>
      <NatContainer style={styles.defaultScreen}>
        <ScrollView>
          <NatText type="h6" value="ICONS SVG" />
          <FlatList
            data={iconList}
            renderItem={({ item }) => renderItem(item.name, item.size, item.background)}
            keyExtractor={item => item.name}
          />
        </ScrollView>
      </NatContainer>
    </SafeAreaView>
  );
};

StoryNatLogo.propTypes = {
};
