export const add = (a: string, b: string) => (Number(a) + Number(b)).toString();

export const sub = (a: string, b: string) => (Number(a) - Number(b)).toString();

export const multiply = (a: string, b: string) =>
  (Number(a) * Number(b)).toString();

export const divide = (a: string, b: string) =>
  (Number(a) / Number(b)).toString();

export const unary = (a: string) => (Number(a) / 100).toString();
