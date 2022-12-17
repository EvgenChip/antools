import { useState, useCallback } from "react";

export const useHeader = () => {
  const [selectActive, setSelectActive] = useState(false);

  const displaySelect = useCallback(() => {
    setSelectActive(!selectActive);
  }, [selectActive]);

  return {
    selectActive,
    setSelectActive,
    displaySelect,
  };
};
