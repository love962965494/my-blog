import 'css-doodle'
import React, { ComponentProps } from 'react'

declare global {
  namespace JSX {
    // tslint:disable-next-line: interface-name
    interface IntrinsicElements {
      'css-doodle': ComponentProps<any>
    }
  }
}

export default ([rule = '']: any) => () => <css-doodle>{rule}</css-doodle>
