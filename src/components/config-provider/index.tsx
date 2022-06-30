import React from 'react';
import { ConfigProviderProps } from './interface';

const defaultProps: ConfigProviderProps = {
  prefixCls: 'xin',
};

const defaultGetPrefixCls = (componentName: string, customPrefix?: string) =>
  `${customPrefix || 'xin'}-${componentName}`;

export const ConfigContext = React.createContext<ConfigProviderProps>({
  getPrefixCls: defaultGetPrefixCls,
  ...defaultProps,
});

const ConfigProvider = (props: ConfigProviderProps) => {
  const { prefixCls, children } = props;

  const getPrefixCls = (componentName: string, customPrefix?: string) =>
    `${customPrefix || prefixCls}-${componentName}`;

  const config: ConfigProviderProps = {
    ...props,
    getPrefixCls,
  };

  return <ConfigContext.Provider value={config}>{children}</ConfigContext.Provider>;
};

ConfigProvider.ConfigContext = ConfigContext;
ConfigProvider.displayName = 'ConfigProvider';
export default ConfigProvider;

export const ConfigConsumer = ConfigContext.Consumer;

export { ConfigProviderProps };
