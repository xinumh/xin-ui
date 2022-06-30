export type ButtonType = 'default' | 'primary' | 'ghost' | 'dashed' | 'link' | 'text';
export type ButtonHTMLType = 'submit' | 'button' | 'reset';

export type BaseButtonProps = {
  type?: ButtonType;
  className?: string;
  children?: React.ReactNode;
};

export type NativeButtonProps = {
  /**
   * @description 原生 button 的 type 属性值
   * @default button
   */
  htmlType?: ButtonHTMLType;
};

export type ButtonProps = Partial<BaseButtonProps & NativeButtonProps>;
