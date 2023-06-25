import {
  IButton,
  ICol,
  IInput,
  IOption,
  IRow,
  ISelect,
  ISwitch,
} from '../dist';

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    IButton: typeof IButton
    IInput: typeof IInput & HTMLInputElement
    ISwitch: typeof ISwitch
    IRow: typeof IRow
    ICol: typeof ICol
    ISelect: typeof ISelect
    IOption: typeof IOption
  }
}