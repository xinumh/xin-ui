import React from 'react';

interface ButtonUnstyledProps<C> {
  as?: C;
  children: React.ReactNode;
}
const ButtonUnstyled = <C extends React.ElementType>({ as, children }: ButtonUnstyledProps<C>) => {
  const Component = as || 'span';

  return <Component>{children}</Component>;
};

export default ButtonUnstyled;
