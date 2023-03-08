import {
  Document,
  Page,
  View,
  Text,
  Image,
  StyleSheet,
} from "@react-pdf/renderer";
import getCurrentDate from "./GetCurrentDate";
import { styles } from "./PDFStyles";
const PDFGenerator = () => {
  return (
    <Document>
      <Page size="A4">
        <View style={styles.header} fixed>
          <View style={styles.orange_bg}></View>
          <View style={styles.blue_bg}>
            <View style={styles.infos}>
              <Text style={styles.bold}>CONTACT INFO</Text>
              <Text>+33 7.50.42.19.91</Text>
              <Text>brandon.cebi.pro@gmail.com</Text>
              <Text>16 Rue du coin rond</Text>
              <Text>45000 ORLÉANS</Text>
            </View>
            <View style={styles.logo}>
              <Image src="logo.png" />
            </View>
          </View>
        </View>

        <View style={styles.content}>
          <View style={styles.gray_bg}></View>
          <View style={styles.content_head}>
            <View style={styles.client}>
              <Text style={{ fontWeight: "bold", marginBottom: "7px" }}>
                BILLING TO:
              </Text>
              <Text style={{ fontWeight: "bold", marginBottom: "4px" }}>
                SALFORD & CO.
              </Text>
              <Text>Phone : +123-456-7890</Text>
              <Text>Email : hello@test.fr</Text>
            </View>
            <View style={styles.infos_devis}>
              <Text
                style={{
                  letterSpacing: "24px",
                  fontSize: "40px",
                  borderBottom: "2px solid black",
                  paddingBottom: "10px",
                  marginBottom: "10px",
                }}
              >
                DEVIS
              </Text>
              <Text>Numéro : 123</Text>
              <Text>Date : {getCurrentDate("/")}</Text>
              <Text>Due Date : 24.05.2025</Text>
            </View>

            <View style={styles.tab}>
              <View style={styles.tab_header}>
                <Text style={styles.tab_header_text}>NO</Text>
                <Text style={styles.tab_header_text}>DESCRIPTION</Text>
                <Text style={styles.tab_header_text}>QTY</Text>
                <Text style={styles.tab_header_text}>PRICE</Text>
                <Text style={styles.tab_header_text}>TOTAL</Text>
              </View>
              <View style={styles.tab_content}>
                <Text style={styles.tab_header_text}>1</Text>
                <Text style={styles.tab_header_text}>Ajout d'une feature</Text>
                <Text style={styles.tab_header_text}>2</Text>
                <Text style={styles.tab_header_text}>500</Text>
                <Text style={styles.tab_header_text}>1000</Text>
              </View>
              <View style={styles.tab_content}>
                <Text style={styles.tab_header_text}>2</Text>
                <Text style={styles.tab_header_text}>
                  Ajout d'une seconde feature
                </Text>
                <Text style={styles.tab_header_text}>3</Text>
                <Text style={styles.tab_header_text}>400</Text>
                <Text style={styles.tab_header_text}>1200</Text>
              </View>
            </View>

            <View style={styles.footer}>
              <View style={styles.w_70}>
                <Text style={styles.orange_color}>METHODE DE RÉGLEMENT</Text>
                <Text>Account Name: Brandon CEBI</Text>
                <Text>Account No : 123-456-7890</Text>
              </View>
              <View style={styles.w_30}>
                <View style={styles.recap}>
                  <Text style={styles.w_50}>Subtotal</Text>
                  <Text style={styles.w_50}>$250</Text>
                  <Text style={styles.w_50}>Tax (20%)</Text>
                  <Text style={styles.w_50}>$15</Text>
                  <Text style={styles.orange_bg_text}>Total</Text>
                  <Text style={styles.orange_bg_text}>$265</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
};

export { PDFGenerator };
