import React from 'react';
import type { ViewProps } from 'react-native';

import cns from 'classnames';
import { useTailwind } from 'tailwind-rn';

export { useTailwind };

export const useTw = function (...classNames: string[]) {
  const tw = useTailwind();
  return tw(cns(classNames));
};

export default function withTw<T = ViewProps>(
  // TODO: fix any
  Component: any,
  defaultClassnames?: any
) {
  const WithTailwindComponent = React.forwardRef(function (
    {
      className,
      style,
      ...props
    }: // TODO: fix any
    // }: T & { style?: Pick<T, 'style'>; className?: string },
    T & { style?: Pick<T, any>; className?: string },
    ref
  ) {
    const tw = useTailwind();
    const styles = {
      ...tw(cns(defaultClassnames, className)),
      ...style,
    };

    return <Component style={styles} ref={ref} {...props} />;
  });
  return WithTailwindComponent;
}

export function useColor(name: string | string[]): string[] {
  const tw = useTailwind();

  // TODO: fix any
  let names: any = name;
  if (typeof name === 'string') {
    names = [name];
  }
  return names.map((n: string) => {
    const { color } = tw(`text-${n}`);
    return color;
  });
}
