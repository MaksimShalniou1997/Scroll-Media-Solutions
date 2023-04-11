import { Select as MuiSelect, SelectProps } from "@material-ui/core";
import { useStyles } from "./";
import { ReactComponent as KeyDownArrow } from "../../../shared/svgs/keyDownArrow.svg";

export const Select = ({
  value,
  onChange,
  children,
  startAdornment,
  className,
  multiple,
  ...restProps
}: SelectProps) => {
  const classes = useStyles();

  return (
    <MuiSelect
      multiple={multiple}
      value={value}
      onChange={onChange}
      startAdornment={startAdornment}
      className={`${classes.select} ${className}`}
      variant="outlined"
      MenuProps={{
        classes: {
          paper: classes.paper,
        },
        disablePortal: true,
        getContentAnchorEl: null,
        anchorOrigin: {
          vertical: "bottom",
          horizontal: "left",
        },
      }}
      IconComponent={() => (
        <div className={classes.arrow}>
          <KeyDownArrow />
        </div>
      )}
      {...restProps}
    >
      {children}
    </MuiSelect>
  );
};
