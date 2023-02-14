import React from 'react';
import { Children, cloneElement } from 'react';

export function Space({
  as: AsComponent,
  className,
  children,
  x,
  y,
  dividerX,
  dividerY,
}: {
  // TODO: fix any
  as: any;
  className: string;
  children?: React.ReactNode | React.ReactNode[];
  x?: number;
  y?: number;
  dividerX?: string;
  dividerY?: string;
}) {
  const length = Children.count(children);
  return (
    <AsComponent className={className}>
      {Children.map(children, (child: any, index: number) => {
        if (child) {
          return cloneElement(child, {
            ...child.props,
            className:
              index < length - 1
                ? getSpaceClassName(
                    { x, y, dividerX, dividerY },
                    child.props.className
                  )
                : child.props.className,
          });
        } else {
          return child;
        }
      })}
    </AsComponent>
  );
}

function getSpaceClassName(
  {
    x,
    y,
    dividerX,
    dividerY,
  }: { x?: number; y?: number; dividerX?: string; dividerY?: string },
  className: string
) {
  let classNames = [className].filter((v) => v);
  if (dividerX) {
    classNames.push(dividerX);
    if (x) {
      classNames.push(`mr-${x}`);
    }
  }
  if (dividerY) {
    classNames.push(dividerY);
    if (y) {
      classNames.push(`mb-${y}`);
    }
  }
  if (x) {
    classNames.push(`mr-${x}`);
  }
  if (y) {
    classNames.push(`mb-${y}`);
  }
  return classNames.join(' ');
}
