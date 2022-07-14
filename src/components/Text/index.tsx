import React from 'react';

type Rainbow = 'red' | 'orange' | 'yellow' | 'green' | 'blue' | 'indigo' | 'violet';

type ITextProps<C extends React.ElementType> = {
  as?: C;
  color?: Rainbow | 'black';
};

type AsProp<C extends React.ElementType> = {
  as?: C;
};

type TextProps = {
  color?: Rainbow | 'black';
};

/**
 * C 根据 as 确定的元素类型
 * Props 组件的属性，eg：ItextProps
 */
type Props<C extends React.ElementType> = React.PropsWithChildren<ITextProps<C>> &
  Omit<React.ComponentPropsWithoutRef<C>, keyof ITextProps<C>>;

type PropsToOmit<C extends React.ElementType, P> = keyof (AsProp<C> & P);
type PolymorphicComponentProp<C extends React.ElementType, Props = {}> = React.PropsWithChildren<
  Props & AsProp<C>
> &
  Omit<React.ComponentPropsWithoutRef<C>, PropsToOmit<C, Props>>;

const Text = <C extends React.ElementType = 'span'>({
  as,
  color,
  children,
  ...restProps
}: PolymorphicComponentProp<C, TextProps>) => {
  const Component = as || 'span';
  const style = color ? { style: { color } } : {};
  return (
    <Component {...restProps} {...style}>
      {children}
    </Component>
  );
};

const Text2 = () => {
  return (
    <>
      <Text color="blue">Hello Polymorphic!</Text>
    </>
  );
};
export default Text2;
