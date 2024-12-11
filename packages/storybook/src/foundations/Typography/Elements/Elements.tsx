import React from 'react';

export const HeadingStory = ({
  level,
  children,
  ...props
}: {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
}) => {
  const Tag = `h${level}` as keyof React.JSX.IntrinsicElements;
  return <Tag {...props}>{children}</Tag>;
};

export const ParagraphStory = ({
  children,
  lead,
  small,
  ...props
}: {
  lead: boolean;
  small: boolean;
  children: React.ReactNode;
}) => {
  return (
    <p className={lead ? 'lead' : undefined} {...props}>
      {small ? <small>{children}</small> : children}
    </p>
  );
};
