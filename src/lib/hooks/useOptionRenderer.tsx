
import { colors } from "../../lib/constants";

const useOptionRenderer = () => {
  const optionRenderer = (value: string, isSelected: boolean) => (
    <span style={{ color: isSelected ? colors.selected : colors.hover }}>
      {value}
    </span>
  );
  
  return optionRenderer;
};

export default useOptionRenderer;