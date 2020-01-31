/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Text, View } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import { linkTo } from '@storybook/addon-links';

// eslint-disable-next-line import/extensions
import {
  Login, Card, Form, FriendExchange,
} from './ScreenSamples';
import { StoryNatTextInput } from './StoryNatTextInput';
import { NatGenericCard } from '../../lib/components/NatGenericCard/NatGenericCard';
import { StoryNatCard } from './StoryNatCard';
import { StoryNatMenuItem } from './StoryNatMenuItem';
import { StoryNatHeader } from './StoryNatHeader';
import { StoryNatHeaderNew } from './StoryNatHeaderNew';
import CenterView from './CenterView';
import Welcome from './Welcome';
import icoArrowLeft from '../../lib/assets/icons/ic_arrow_left_white.png';

storiesOf('Welcome', module).add('NATDS', () => <Welcome showApp={linkTo('Welcome')} />);

storiesOf('NatMenuItem', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('All', () => (
    <StoryNatMenuItem />
  ));

storiesOf('NatHeader', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('All', () => (
    <StoryNatHeader />
  ));

storiesOf('NatHeaderNew', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('All', () => (
    <StoryNatHeaderNew />
  ));

storiesOf('NatTextInput', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Default', () => (
    <StoryNatTextInput type="default" />
  ))
  .add('Error', () => (
    <StoryNatTextInput type="error" />
  ))
  .add('Disabled', () => (
    <StoryNatTextInput type="disabled" />
  ))
  .add('With icon - image', () => (
    <StoryNatTextInput type="default" icon={{ content: icoArrowLeft }} />
  ))
  .add('With icon - SVG', () => (
    <StoryNatTextInput type="default" icon={{ svg: { name: 'filled-action-check' } }} />
  ));

storiesOf('NatCard', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Default', () => (
    <StoryNatCard />
  ));

storiesOf('NatGenericCard', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Default', () => (
    <NatGenericCard width={100}>
      <StoryNatTextInput type="default" />
    </NatGenericCard>
  ));

storiesOf('Screen Samples', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Login', () => (
    <Login />
  ))
  .add('Form', () => (
    <Form />
  ))
  .add('Card', () => (
    <Card />
  ))
  .add('FriendExchange', () => (
    <FriendExchange />
  ));
