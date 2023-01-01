// 一手操作惊为天人
export type Nullable<T> = {
  [P in keyof T]: T[P] | null;
};
