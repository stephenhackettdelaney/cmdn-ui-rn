import React from 'react';

import { TouchableOpacity } from 'react-native';

import cns from 'classnames';
import { useTailwind } from 'tailwind-rn';

import { Text } from './Text';

export function Button({
  className = '',
  style,
  variant = 'solid',
  theme = 'primary',
  size = 'md',
  children,
  onPress,
  ...props
}: {
  className?: string;
  style?: any;
  variant?: string;
  theme?: string;
  size?: string;
  children?: string;
  onPress: any;
}) {
  const tailwind = useTailwind();

  const isIcon = typeof children === 'object';

  let buttonClassName = '';
  let textClassName = '';
  let sizeClassName = '';
  let themeClassName = '';

  if (variant === 'solid' && !isIcon) {
    buttonClassName = 'p-2 bg-navy-light rounded-lg text-white text-center';
    textClassName = 'py-0.5 text-base text-white text-center font-bold';

    if (theme === 'danger') {
      themeClassName = 'bg-red-500 border-red-500';
    }
  } else if (variant === 'link') {
    textClassName = 'text-center text-navy-light text-base';

    if (theme === 'danger') {
      themeClassName = 'text-red-500';
    }
    if (size === 'sm') {
      sizeClassName = 'text-sm';
    }
  } else if (variant === 'outline') {
    buttonClassName =
      'p-2 border border-navy-light rounded-lg text-navy-light text-center';
    textClassName = 'py-0.5 text-base text-navy-light text-center font-bold';
  }

  return (
    <TouchableOpacity
      onPress={onPress}
      style={tailwind(cns(style, buttonClassName, className, themeClassName))}
      {...props}
    >
      {isIcon ? (
        children
      ) : (
        <Text
          style={tailwind(cns(textClassName, sizeClassName, themeClassName))}
        >
          {children}
        </Text>
      )}
    </TouchableOpacity>
  );
}
