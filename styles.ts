import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FDFDFE",
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
    shadowColor: "#000",
    shadowOffset: { width: 10, height: 10 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 10,
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
  title: {
    marginLeft: 60,
    marginTop: 80,
    color: "#A2A5AD",
    fontSize: 20,
    marginBottom: 20,
  },
  titleView: {
    backgroundColor: "#F8FBFC",
    shadowColor: "#000",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 5,
  },
});
