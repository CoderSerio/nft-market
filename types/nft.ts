export type Trait = 'attack' | 'health' | 'speed';

export interface NftAttribute {
  trait_type: Trait;
  value: string;
}
export interface NftMeta {
  description: string;
  image: string;
  name: string;
  attributes: Array<NftAttribute>;
}
