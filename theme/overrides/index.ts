import type { Theme } from '@mui/material/styles';
import { merge } from 'lodash';

import Button from './Button';
import Card from './Card';
import Tabs from './tab';

export default function ComponentsOverrides(theme: Theme) {
  return merge(Card(theme), Tabs(theme), Button(theme));
}
