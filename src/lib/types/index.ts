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
}

export interface SelectedItemsProps {
  selectedValues: string[];
}
