import React from 'react';
import type { ViewProps } from 'react-native';
import type { ReactNode } from 'react';

import cns from 'classnames';

import { Space } from './Space';
import { View } from './View';
interface WithSpaceType extends ViewProps {
  as?: any;
  className?: string;
  children?: ReactNode | ReactNode[];
  x?: number;
  y?: number;
  dividerX?: string;
  dividerY?: string;
  gapX?: number;
  gapY?: number;
}

function withSpace(defaultClassName: string) {
  return function WithSpaceComponent<T>({
    gapX,
    gapY,
    className,
    children,
    ...props
  }: T & WithSpaceType) {
    if (gapX) {
      return (
        <Space
          {...props}
          as={View}
          className={cns(defaultClassName, className)}
          x={gapX}
        />
      );
    } else if (gapY) {
      return (
        <Space
          {...props}
          as={View}
          className={cns(defaultClassName, className)}
          y={gapY}
        />
      );
    } else {
      return (
        <View className={cns(defaultClassName, className)}>{children}</View>
      );
    }
  };
}

// type HStackProps = {
//   gapX?: number;
// };
// type VStackProps = {
//   gapY?: number;
// };

export const HStack = withSpace('flex-row');
export const VStack = withSpace('flex-col');
