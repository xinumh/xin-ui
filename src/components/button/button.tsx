import classNames from 'classnames';
import React from 'react';
import { ConfigContext } from '../config-provider';
import { ButtonProps } from './interface';

const InternalButton: React.ForwardRefRenderFunction<unknown, ButtonProps> = (
  props: ButtonProps,
  ref,
) => {
  const { getPrefixCls } = React.useContext(ConfigContext);
  const { type = 'default', children, htmlType, className } = props;
  const buttonRef = (ref as any) || React.createRef<HTMLElement>();

  const prefixCls = getPrefixCls?.('btn');

  const classes = classNames(
    prefixCls,
    {
      [`${prefixCls}-${type}`]: type,
    },
    className,
  );

  console.log('classes', classes);
  return (
    <button className={classes} type={htmlType} ref={buttonRef}>
      {children}
    </button>
  );
};

const Button = React.forwardRef<unknown, ButtonProps>(InternalButton);

export default Button;
