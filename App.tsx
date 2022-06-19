import { StatusBar } from "expo-status-bar";
import {
  View,
  Text,
  SafeAreaView,
  Button,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import CalendarStrip from "react-native-calendar-strip";
import moment from "moment";
import axios from "axios";
import React, { useState } from "react";
import { styles } from "./styles";
import { ICard, ICart } from "./interfaces";
import { CardComponent } from "./components/CardComponent";
import { mockCardData } from "./mockData";
import MockAdapter from "axios-mock-adapter";

export default function App() {
  const [loaded, setLoaded] = useState(false);
  const [cards, setCards] = useState<ICard[]>();
  const [date, setDate] = useState();
  const [cartReq, setCartReq] = useState<any>();
  console.log("🚀 ~ file: App.tsx ~ line 25 ~ App ~ cartReq", cartReq);
  const mock = new MockAdapter(axios, { delayResponse: 2000 });

  mock
    .onGet("/items", { params: { date: moment().format("YYYY-MM-DD") } })
    .reply(200, {
      data: mockCardData,
    });
  mock.onPost("/metrics").reply(200);

  const handleDateSelected = async (date: Moment) => {
    setDate(date.format("dddd, MMMM DD YYYY"));
    try {
      setLoaded(true);

      const {
        data: { data },
      } = await axios.get("/items", {
        params: {
          date: moment().format("YYYY-MM-DD"),
        },
      });
      if (data) setCards(data);
      setLoaded(false);
    } catch (err: any) {
      setLoaded(false);
      console.log("err", err.response.message);
    }
  };
  const handleButtonPress = async () => {
    // const request = {
    //   items: [
    //     {
    //       id: "test-id-1",
    //       options: {
    //         "test-option-id-1": true,
    //         "test-option-id-2": true,
    //       },
    //       quantity: 3,
    //     },
    //   ],
    // };
    // await axios.post('/cart', request);
  };
  const handleCart = (state: ICart) => {
    setCartReq((prev: any) => ({ ...prev, state }));
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <StatusBar style="auto" />
        <Text style={{ textAlign: "center", marginTop: 40 }}>
          Выберите билет
        </Text>
        <CalendarStrip
          style={styles.calendar}
          onDateSelected={(date) => handleDateSelected(date)}
          scrollable
          calendarAnimation={{ type: "sequence", duration: 30 }}
          daySelectionAnimation={{
            type: "border",
            duration: 200,
            borderWidth: 1,
            borderHighlightColor: "white",
          }}
          calendarHeaderStyle={{ color: "white" }}
          calendarColor={"#86828d"}
          dateNumberStyle={{ color: "white" }}
          dateNameStyle={{ color: "white" }}
          highlightDateNumberStyle={{ color: "yellow" }}
          highlightDateNameStyle={{ color: "yellow" }}
          disabledDateNameStyle={{ color: "grey" }}
          disabledDateNumberStyle={{ color: "grey" }}
          startingDate={moment()}
        />
        {date && <Text style={styles.date}>{date}</Text>}
        {loaded && <ActivityIndicator />}
        {cards && (
          <>
            {cards.map((card, index) => (
              <CardComponent key={index} card={card} handleCart={handleCart} />
            ))}
            <View style={styles.button}>
              <Button title="Продолжить" onPress={() => handleButtonPress()} />
            </View>
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
