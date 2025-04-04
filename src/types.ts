export interface Country {
  id: string;
  name: string;
  plugTypes: PlugType[];
  voltage: string;
  frequency: string;
  imageUrl: string;
}

export interface PlugType {
  type: string;
  imageUrl: string;
  description: string;
}

export interface Compatibility {
  needsAdapter: boolean;
  needsConverter: boolean;
  message: string;
}