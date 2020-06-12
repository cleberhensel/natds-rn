import React from 'react';
import { Text, ScrollView, SafeAreaView } from 'react-native';
import { NatContainer, NatCard } from '../../../lib';

export const StoryNatCard = () => (
  <SafeAreaView>
    <NatContainer style={{ backgroundColor: '#F5F5F5' }}>
      <ScrollView>
        <NatCard
          title="Card Test"
          subtitle="13 hours ago"
          resume="Esse é um card da Natura"
          iconURI="https://upload.wikimedia.org/wikipedia/pt/thumb/c/cb/Natura_Logo.png/200px-Natura_Logo.png"
          imageURI="https://upload.wikimedia.org/wikipedia/pt/thumb/c/cb/Natura_Logo.png/200px-Natura_Logo.png"
          onPress={() => null}
        />
        <Text> You can apply margin-top by sending &ldquo;margin&ldquo; prop, with values: none, dense or normal. </Text>
      </ScrollView>
    </NatContainer>
  </SafeAreaView>

);
