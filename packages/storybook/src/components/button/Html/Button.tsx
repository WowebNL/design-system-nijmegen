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
    options: ['Default', 'Primary', 'Secondary', 'Subtle'],
    table: {
      type: {
        summary: ['string'],
      },
    },
  },
  state: {
    name: 'State',
    description: 'Button states',
    control: { type: 'select' },
    options: ['Default', 'Active', 'Hover', 'Hover + focus-visible', 'Focus', 'Focus-visible'],
  },
  disabled: {
    name: 'Disabled',
    description: 'Disable the button',
    control: { type: 'boolean' },
    table: {
      type: {
        summary: ['boolean'],
      },
    },
  },
  // icon: {
  //   name: 'Icon',
  //   description: 'Icon',
  //   control: { type: 'select' },
  //   options: ['None', 'Start', 'End'],
  // },
};

export const defaultArgs = {
  children: 'Button text',
  appearance: 'Default',
  state: 'Default',
  // icon: 'None',
  disabled: false,
};

export const ButtonStory = ({
  children,
  appearance = defaultArgs.appearance,
  state = defaultArgs.state,
  disabled = defaultArgs.disabled,
}) => {
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
      disabled={disabled}
      type="button"
    >
      {children}
    </button>
  );
};
