import React from "react";
type Props = {
  children: React.ReactNode;
  onClick: () => void;
  type: "primary" | "delete";
};
const IconButton = ({ children, onClick, type }: Props) => {
  return (
    <button
      onClick={onClick}
      className={`iconButton size-8 ${
        type === "delete" ? "icon_btn_delete" : "icon_btn_primary"
      }`}>
      {children}
    </button>
  );
};

export default IconButton;
