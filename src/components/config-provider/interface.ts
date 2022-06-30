/**
 * ConfigProvider
 */
export type ConfigProviderProps = {
  /**
   * @zh 配置组件的默认尺寸，只会对支持`size`属性的组件生效。
   * @defaultValue default
   */
  size?: 'mini' | 'small' | 'default' | 'large';
  /**
   * @zh 全局组件类名前缀
   * @defeaultValue xin
   */
  prefixCls?: string;
  getPrefixCls?: (componentName: string, customPrefix?: string) => string;
  children?: React.ReactNode;
};
