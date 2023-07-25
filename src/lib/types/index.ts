export interface SelectProps {
  values: string[];
  onSelect: (value: string | string[]) => void;
  multiple?: boolean;
  required?: boolean;
  placeholder?: string;
}

export interface OptionProps {
  value: string;
  isSelected: boolean;
  onSelect: () => void;
  optionRenderer?: (value: string, isSelected: boolean) => React.ReactNode;
}

export interface SelectInputProps {
  setIsOpen: (isOpen: boolean) => void;
  isOpen: boolean;
  placeholder?: string;
  error?: boolean;
  setFilter: (filter: string) => void;
}

export interface SelectOptionsProps {
  values: string[];
  selectedValues: string[];
  handleSelect: (value: string) => void;
  filter: string;
  optionRenderer?: (value: string, isSelected: boolean) => JSX.Element | null; // add this line
}

export interface SelectedItemsProps {
  selectedValues: string[];
  handleRemove: (value: string) => void;
}

type CarBrand = {
  num_models: number;
  img_url: string;
  max_car_id: number;
  id: number;
  name: string;
  avg_horsepower: number;
  avg_price: number;
};

export type CarBrandsResponse = CarBrand[];

export interface ClearButtonProps {
  clearSelected: () => void;
  text: string;
}

export interface UseClearSelectedProps {
  setSelectedValues: (values: string[]) => void;
}

export interface UseHandleSelectProps {
  multiple: boolean;
  onSelect: (value: string | string[]) => void;
}

export interface ErrorComponentProps {
  message: string;
  visible: boolean;
  dismissError: () => void;
  dismissable?: boolean;
}

export interface SelectionSectionProps {
  selectedValues: string[];
  clearSelected: () => void;
  handleRemove: (value: string) => void;
}
