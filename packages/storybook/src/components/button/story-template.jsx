import clsx from 'clsx';

export const argTypes = {
  children: {
    name: 'Content',
    description: 'Button text',
    defaultValue: '',
  },
  appearance: {
    name: 'Variation',
    description: 'Button variations',
    control: { type: 'select' },
    options: ['', 'primary-action-button', 'secondary-action-button', 'subtle-button'],
    defaultValue: '',
    table: {
      type: {
        summary: ['string'],
      },
    },
  },
  className: {
    name: 'State',
    description: 'Differt states of the button',
    control: { type: 'select' },
    defaultValue: '',
    table: {
      type: {
        summary: ['string'],
      },
    },
    options: [
      '',
      'utrecht-button--active',
      'utrecht-button--hover',
      'utrecht-button--hover utrecht-button--focus utrecht-button--focus-visible',
      'utrecht-button--focus',
      'utrecht-button--focus utrecht-button--focus-visible',
    ],
  },
  disabled: {
    name: 'Disabled',
    description: 'Disable the button',
    control: { type: 'boolean' },
    defaultValue: false,
    table: {
      type: {
        summary: ['boolean'],
      },
    },
  },
};

// TODO Icon implementation
export const defaultArgs = {
  content: 'Button text',
  appearance: 'Default',
  state: 'Default',
};

export const Button = ({ content, appearance = defaultArgs.appearance, state = defaultArgs.state, ...restProps }) => {
  return (
    <button
      className={clsx('utrecht-button', {
        'utrecht-button--primary-action': appearance === 'Primary',
        'utrecht-button--secondary-action': appearance === 'Secondary',
        'utrecht-button--subtle': appearance === 'Subtle',
        'utrecht-button--active': state === 'Active',
        'utrecht-button--hover': state === 'Hover',
        'utrecht-button--hover utrecht-button--focus utrecht-button--focus-visible': state === 'Hover + focus-visible',
        'utrecht-button--focus': state === 'Focus',
        'utrecht-button--focus utrecht-button--focus-visible': state === 'Focus-visible',
      })}
      type="button"
      {...restProps}
    >
      {content}
    </button>
  );
};
