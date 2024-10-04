import clsx from 'clsx';

export const argTypes = {
  content: {
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
