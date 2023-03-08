import { Font, StyleSheet } from "@react-pdf/renderer";
import bebas from "../fonts/Bebas_Neue/BebasNeue-Regular.ttf";
import lato from "../fonts/Lato/Lato-Regular.ttf";
import lato_bold from "../fonts/Lato/Lato-Bold.ttf";
Font.register({
  family: "bebas",
  src: bebas,
});
Font.register({
  family: "lato",
  src: lato,
});
Font.register({
  family: "lato_bold",
  src: lato_bold,
});
const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: "15%",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  infos: {
    position: "absolute",
    right: "10%",
    top: "20px",
    fontSize: "10px",
    color: "white",
    borderLeft: "1px solid white",
    paddingLeft: "50px",
    paddingVertical: "5px",
  },
  orange_bg: {
    height: "100%",
    width: "10%",
    backgroundColor: "#dfcd9e",
  },
  blue_bg: {
    height: "100%",
    width: "90%",
    backgroundColor: "#37394b",
    position: "relative",
  },
  logo: {
    width: "100px",
    left: "100px",
  },
  bold: {
    fontFamily: "lato_bold",
  },
  gray_bg: {
    height: "auto",
    width: "10%",
    backgroundColor: "#ededed",
    minHeight: "90%",
  },
  content: {
    display: "flex",
    flexDirection: "row",
  },
  content_head: {
    display: "flex",
    flexDirection: "row",
    padding: "25px",
    fontSize: "10px",
    width: "90%",
    flexWrap: "wrap",
  },
  client: {
    width: "50%",
  },
  infos_devis: {
    width: "50%",
  },
  tab: {
    width: "100%",
    marginTop: "30px",
    borderBottom: "2px solid black",
  },
  tab_header: {
    display: "flex",
    flexDirection: "row",
    paddingVertical: "15px",
    borderBottom: "2px solid black",
    borderTop: "2px solid black",
  },
  tab_header_text: {
    width: "20%",
    textAlign: "center",
  },
  tab_content: {
    display: "flex",
    flexDirection: "row",
    paddingVertical: "15px",
    borderBottom: "1px solid #ededed",
  },
  footer: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    marginTop: "20px",
  },
  w_30: {
    width: "30%",
  },
  w_50: {
    width: "50%",
    paddingVertical: "10px",
    paddingRight: "10px",
  },
  w_70: {
    width: "70%",
  },
  recap: {
    textAlign: "right",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  orange_bg_text: {
    backgroundColor: "#dfcd9e",
    width: "50%",
    paddingVertical: "10px",
    paddingRight: "10px",
  },
  orange_color: {
    color: "#dfcd9e",
    paddingBottom: "10px",
  },
});

export { styles };
