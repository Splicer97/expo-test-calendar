import Checkbox from "expo-checkbox";
import React, { FC, useState } from "react";
import { View, Text } from "react-native";
import { ICard, IMetrics } from "../interfaces";
import { styles } from "../styles";
import { SeparatorComponent } from "./SeparatorComponent";
import Counter from "react-native-counters";
import axios from "axios";

export const CardComponent: FC<{ card: ICard; handleCart: Function }> = ({
  card,
  handleCart,
}) => {
  const [isChecked, setChecked] = useState(false);
  const [num, setNum] = useState<Number>(0);
  const handleCounter = async (number: Number, type: String, id: String) => {
    try {
      const data: IMetrics = {
        action: "cart_update",
        itemId: id,
        quantity: number,
      };
      await axios.post("/metrics", data);
      setNum(number);
    } catch (error) {
      console.log("error", error);
    }
  };
  const handleChecked = (optId: String) => {
    setChecked(!isChecked);
    handleCart({
      id: card.id,
      options: {
        optId,
      },
      quantity: num,
    });
  };
  return (
    <View style={styles.card}>
      <Text>{card.title}</Text>
      <Text>{card.description}</Text>
      <SeparatorComponent />
      {card.options.map((option) => (
        <View key={+option.title}>
          <View style={styles.option}>
            <Checkbox
              value={isChecked}
              onValueChange={() => handleChecked(option.id)}
            />
            <Text>{option.title}</Text>
            <Text>{option.price.value}</Text>
            <Text>
              {option.price.currency === "EUR" ? "€" : option.price.currency}
            </Text>
          </View>
          <SeparatorComponent />
        </View>
      ))}
      <Text style={styles.cardPrice}>
        {card.price.value}
        {card.price.currency === "EUR" ? "€" : card.price.currency}
      </Text>
      <Counter
        start={0}
        onChange={(number: Number, type: String) =>
          handleCounter(number, type, card.id)
        }
      />
    </View>
  );
};
