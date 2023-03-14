import { PDFViewer } from "@react-pdf/renderer";
import {
  Document,
  Page,
  View,
  Text,
  Image,
  StyleSheet,
} from "@react-pdf/renderer";
import { useState } from "react";
import getCurrentDate from "./GetCurrentDate";
import { styles } from "./PDFStyles";
export default function PDFView(props: any) {
  let subtotal = 0;
  return (
    <PDFViewer height={"100%"} width={"100%"}>
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
                  {props.name}
                </Text>
                <Text>{props.phone}</Text>
                <Text>{props.email}</Text>
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
                <Text>Numéro : {props.numero}</Text>
                <Text>Date : {getCurrentDate("/")}</Text>
                <Text>Due Date : {props.rendu}</Text>
              </View>

              <View style={styles.tab}>
                <View style={styles.tab_header}>
                  <Text style={styles.tab_header_text}>NO</Text>
                  <Text style={styles.tab_header_text}>DESCRIPTION</Text>
                  <Text style={styles.tab_header_text}>QTY</Text>
                  <Text style={styles.tab_header_text}>PRICE</Text>
                  <Text style={styles.tab_header_text}>TOTAL</Text>
                </View>
                {props.feature.map((feature: any, index: number) => {
                  return (
                    <View style={styles.tab_content} key={index + 1}>
                      <Text style={styles.tab_header_text}>{index + 1}</Text>
                      <Text style={styles.tab_header_text}>
                        {feature.description}
                      </Text>
                      <Text style={styles.tab_header_text}>{feature.qty}</Text>
                      <Text style={styles.tab_header_text}>
                        {feature.price}
                      </Text>
                      <Text style={styles.tab_header_text}>
                        {feature.price * feature.qty}
                      </Text>
                    </View>
                  );
                })}
              </View>

              <View style={styles.footer}>
                <View style={styles.w_70}>
                  <Text style={styles.orange_color}>METHODE DE RÉGLEMENT</Text>
                  <Text>{props.reglement}</Text>
                </View>
                <View style={styles.w_30}>
                  <View style={styles.recap}>
                    <Text style={styles.w_50}>Subtotal</Text>
                    <Text style={styles.w_50}>{props.subtotal} €</Text>
                    <Text style={styles.w_50}>Tax (20%)</Text>
                    <Text style={styles.w_50}>{props.taxe} €</Text>
                    <Text style={styles.orange_bg_text}>Total</Text>
                    <Text style={styles.orange_bg_text}>
                      {props.subtotal + props.taxe} €
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
}
