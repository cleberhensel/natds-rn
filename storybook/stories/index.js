/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { linkTo } from '@storybook/addon-links';

// eslint-disable-next-line import/extensions
import {
  Login, Card, Form, FriendExchange,
} from './ScreenSamples';
import { StoryNatTextInput } from './StoryNatTextInput';
import { StoryNatCard } from './StoryNatCard';
import { StoryNatMenuItem } from './StoryNatMenuItem';
import { StoryNatIcon } from './StoryNatIcon';
import { StoryTokenTypography } from './StoryTokenTypography';
import { StoryTokenColors } from './StoryTokenColors';
import { StoryTokenSpace } from './StoryTokenSpace';
import { StoryNatLogo } from './StoryNatLogo';
import { StoryNatHeader } from './StoryNatHeader';
import { StoryNatHeaderNew } from './StoryNatHeaderNew';
import { StoryNatList } from './StoryNatList';
import { StoryNatListItem } from './StoryNatListItem';
import { ThemeNaturaLight } from './StoryTokenThemes/ThemeNaturaLight';
import CenterView from './CenterView';
import Welcome from './Welcome';
import icoArrowLeft from '../../lib/assets/icons/ic_arrow_left_white.png';

storiesOf('Welcome', module).add('NATDS', () => <Welcome showApp={linkTo('Welcome')} />);

storiesOf('Tokens', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Typography', () => (
    <StoryTokenTypography />
  ))
  .add('Colors', () => (
    <StoryTokenColors />
  ))
  .add('Space', () => (
    <StoryTokenSpace />
  ))
  .add('Theme Natura Light', () => (
    <ThemeNaturaLight />
  ));

storiesOf('Images', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Icons', () => (
    <StoryNatIcon />
  ))
  .add('Logo', () => (
    <StoryNatLogo />
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

storiesOf('NatMenuItem', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('All', () => (
    <StoryNatMenuItem />
  ));

storiesOf('NatList', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('List', () => (
    <StoryNatList />
  ))
  .add('Only ListItem', () => (
    <StoryNatListItem />
  ));

storiesOf('NatHeader', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('OLD', () => (
    <StoryNatHeader />
  ))
  .add('NEW', () => (
    <StoryNatHeaderNew />
  ));

storiesOf('NatCard', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Default', () => (
    <StoryNatCard />
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
