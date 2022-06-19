import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#60648d",
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  option: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#fff",
    marginHorizontal: 20,
    borderRadius: 10,
    marginTop: 50,
  },
  date: {
    textAlign: "center",
    marginTop: 20,
  },
  button: {
    marginVertical: 20,
    marginHorizontal: 20,
  },
  calendar: {
    height: 100,
    paddingTop: 20,
    paddingBottom: 10,
    marginTop: 50,
  },
  cardPrice: {
    textAlign: "right",
  },
});
