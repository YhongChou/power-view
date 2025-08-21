export type Result<T = any> = {
  code:number
  data: T;
  message: string;
};