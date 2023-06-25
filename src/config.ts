export type ISIZEType =
  // | keyof typeof ISIZE
  | 'large' | 'small' | 'default'
  | `${string}${unit}`
  | `var(${string})`
  | `calc(${string})`
type unit = 'px' | 'pt' | 'vh' | 'vw' | 'ex' | 'pc' | 'in' | 'mm' | 'cm' | '%'

// export enum ISIZE {
//   large = '50px',
//   small = '30px',
//   default = '40px'
// }


export const ISIZE: {
  [key: string]: ISIZEType
} = {
  large: '50px',
  small: '30px',
  default: '40px'
}
