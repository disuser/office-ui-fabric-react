import { ICardComponent, ICardStylesReturnType, ICardTokenReturnType } from './Card.types';
import { getGlobalClassNames } from '../../Styling';
import { Depths } from '@uifabric/fluent-theme';

const GlobalClassNames = {
  root: 'ms-Card',
  stack: 'ms-Card-stack'
};

export const CardTokens: ICardComponent['tokens'] = (props, theme): ICardTokenReturnType => [];

export const CardStyles: ICardComponent['styles'] = (props, theme, tokens): ICardStylesReturnType => {
  const { compact } = props;

  const classNames = getGlobalClassNames(GlobalClassNames, theme);

  return {
    root: [
      classNames.root,
      {
        boxShadow: Depths.depth16,
        padding: 12,
        height: '350px',
        width: '250px'
      }
    ],

    stack: [
      classNames.stack,
      {
        selectors: {
          '> *': {
            height: 'auto',
            textOverflow: 'ellipsis'
          },

          '> *:not(:first-child)': [
            compact && {
              marginLeft: '12px'
            },
            !compact && {
              marginTop: '12px'
            }
          ]
        }
      }
    ]
  };
};
