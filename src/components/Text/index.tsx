import React from 'react';

type Rainbow = 'red' | 'orange' | 'yellow' | 'green' | 'blue' | 'indigo' | 'violet';

type AsProp<C extends React.ElementType> = {
  as?: C;
};

type PropsToOmit<C extends React.ElementType, P> = keyof (AsProp<C> & P);
type PolymorphicComponentProp<C extends React.ElementType, Props = {}> = React.PropsWithChildren<
  Props & AsProp<C>
> &
  Omit<React.ComponentPropsWithoutRef<C>, PropsToOmit<C, Props>>;

type PolymorphicComponentPropWithRef<
  C extends React.ElementType,
  Props = {},
> = PolymorphicComponentProp<C, Props> & { ref?: PolymorphicRef<C> };

type TextProps<C extends React.ElementType> = PolymorphicComponentPropWithRef<
  C,
  { color?: Rainbow | 'black' }
>;

type PolymorphicRef<C extends React.ElementType> = React.ComponentPropsWithRef<C>['ref'];

type TextComponent = <C extends React.ElementType = 'span'>(
  props: TextProps<C>,
) => React.ReactElement | null;

const Text: TextComponent = React.forwardRef(
  <C extends React.ElementType>(
    { as, color, children, ...restProps }: TextProps<C>,
    ref?: PolymorphicRef<C>,
  ) => {
    const Component = as || 'span';
    const style = color ? { style: { color } } : {};
    return (
      <Component {...restProps} {...style} ref={ref}>
        {children}
      </Component>
    );
  },
);

// const buttonRef = React.useRef<HTMLButtonElement>(null);
const TextDemo = () => {
  const divRef = React.useRef<HTMLDivElement>(null);

  return (
    <Text as="div" color="blue" ref={divRef}>
      Hello Polymorphic!
    </Text>
  );
};
export default TextDemo;
