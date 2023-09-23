import { makeStyles } from "@material-ui/core";
import MuiButton from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1),
    "& .MuiButton-label": {
      textTransform: "none",
    },
  },
}));

export default function Button(props) {
  const { children, color, variant, onClick, className, ...other } = props;
  const classes = useStyles();

  return (
    <MuiButton
      //passes root css + extra css class if necessary
      className={classes.root + " " + (className || "")}
      variant={variant || "contained"}
      color={color || "default"}
      onClick={onClick}
      {...other}
    >
      {children}
    </MuiButton>
  );
}
