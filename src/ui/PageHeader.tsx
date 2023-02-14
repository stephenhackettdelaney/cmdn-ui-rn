import React from 'react';

import cns from 'classnames';
import { useTailwind } from 'tailwind-rn';

import { Button } from './Button';
import { HStack, VStack } from './Stack';
import { Text } from './Text';

export function PageHeader({
  icon,
  title,
  size = 'md',
  action,
  ...props
}: {
  icon?: any;
  title?: string;
  size?: string;
  action?: any;
}) {
  const Icon = icon;
  const tailwind = useTailwind();

  return (
    <HStack className="pb-3 items-center justify-between">
      <HStack className="items-center">
        {!!icon && <Icon style={tailwind('text-white w-5 h-5')} />}
        <Text
          className={cns(
            'text-xl font-bold text-white capitalize',
            !!icon && 'ml-3',
            {
              'text-xl': size === 'sm',
              'text-2xl': size === 'md',
            }
          )}
        >
          {title}
        </Text>
      </HStack>
      {action ? <Action {...action} {...props} /> : null}
    </HStack>
  );
}

function Action({ verb, onPress, ...props }: { verb: any; onPress: any }) {
  let ActionIcon = null;

  const isIcon = typeof verb === 'function';

  if (isIcon) {
    ActionIcon = verb;
  }

  const tailwind = useTailwind();

  const child = isIcon ? (
    <VStack className="justify-center items-center p-2 bg-navy-light/40 rounded-full">
      <ActionIcon style={tailwind('w-2.5 h-2.5')} />
    </VStack>
  ) : (
    verb
  );

  return (
    <Button
      className="text-right"
      variant="link"
      size="sm"
      onPress={onPress}
      {...props}
    >
      {child}
    </Button>
  );
}
