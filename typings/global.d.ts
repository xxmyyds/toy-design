// GlobalComponents for Volar
/* eslint-disable */
// @ts-nocheck
declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    ToyButton: typeof import('toy-design')['ToyButton']
    ToyInput: typeof import('toy-design')['ToyInput']
    ToyIcon: typeof import('toy-design')['ToyIcon']
  }
}
