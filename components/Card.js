import React, {useState} from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import FlipCard from "react-native-flip-card";

const Card = (props) => {
  const [flip, setFlip] = useState(false);
  return (
    <>
      <FlipCard
        flip={flip}
        friction={6}
        perspective={1000}
        flipHorizontal={true}
        flipVertical={false}
        clickable={true}
        style={styles.card}
        alignHeight={true}
        // alignWidth={true}
        onFlipEnd={(isFlipEnd) => {
          console.log("isFlipEnd", isFlipEnd);
        }}
      >
        {/* Face Side */}
        <View style={styles.face}>
          <Text>The Face</Text>
        </View>
        {/* Back Side */}
        <View style={styles.back}>
          <Text>The Back</Text>
        </View>
      </FlipCard>

      <View>
        <Text
          onPress={() => {
            setFlip(!flip);
            console.log("Press Flip", flip);
          }}
        >
          FLIP
        </Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  card: { backgroundColor: "yellow", padding: 50 },
  face: {
    backgroundColor: "red",
    padding: 50,
  },
  back: {
    backgroundColor: "blue",
    padding: 50,
  },
});

export default Card;
