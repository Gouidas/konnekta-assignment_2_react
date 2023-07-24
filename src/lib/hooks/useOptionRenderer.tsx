import { colors } from "../../lib/constants";

// useOptionRenderer is a custom hook that provides a function to render the options in a specific style
const useOptionRenderer = () => {
  // optionRenderer is a function that returns a JSX element representing an option
  // it takes a value and a boolean indicating if the option is selected
  // it styles the option differently depending on whether it is selected or not
  const optionRenderer = (value: string, isSelected: boolean) => (
    <span style={{ color: isSelected ? colors.selected : colors.hover }}>
      {value}
    </span>
  );
  
  // The hook returns the optionRenderer function
  return optionRenderer;
};

export default useOptionRenderer;
