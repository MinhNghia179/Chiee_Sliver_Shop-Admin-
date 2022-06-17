import { useState, useCallback } from "react";

const useToogle = (defaultValue: boolean = false): any => {
  const [isShow, setIsShow] = useState(defaultValue);

  const handleClose = useCallback(() => setIsShow(false), []);
  const handleOpen = useCallback(() => setIsShow(true), []);

  return [isShow, handleClose, handleOpen];
};

export default useToogle;
