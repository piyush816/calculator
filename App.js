import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Button from "./components/Button";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

import { Entypo } from "@expo/vector-icons";

export default function App() {
  const [equation, setEquation] = useState("");
  const handleEquation = (button) => {
    if (button === "c") {
      setEquation("");
    } else if (button === "back") {
      setEquation(equation.slice(0, equation.length - 1));
    } else if (button === "=") {
      try {
        if (!equation) {
          setEquation("");
        } else {
          setEquation(eval(equation).toString());
        }
      } catch (err) {
        setEquation("Invalid");
      }
    } else {
      setEquation(equation.replace("Invalid", "") + button);
    }
  };
  return (
    <View style={styles.screen}>
      <View style={styles.display}>
        <Text numberOfLines={4} style={styles.number}>
          {equation}
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button onPress={() => handleEquation("c")} style={styles.topButton}>
          <Text style={styles.buttonText}>C</Text>
        </Button>
        <Button onPress={() => handleEquation("back")} style={styles.topButton}>
          <FontAwesome5 name="backspace" size={24} color="white" />
        </Button>
        <Button onPress={() => handleEquation("%")} style={styles.topButton}>
          <FontAwesome5 name="divide" size={24} color="white" />
        </Button>
        <Button onPress={() => handleEquation("+")}>
          <FontAwesome name="plus" size={24} color="white" />
        </Button>
        <Button onPress={() => handleEquation("1")} style={styles.Numbutton}>
          <Text style={styles.NumButtonText}>1</Text>
        </Button>
        <Button onPress={() => handleEquation("2")} style={styles.Numbutton}>
          <Text style={styles.NumButtonText}>2</Text>
        </Button>
        <Button onPress={() => handleEquation("3")} style={styles.Numbutton}>
          <Text style={styles.NumButtonText}>3</Text>
        </Button>
        <Button onPress={() => handleEquation("-")}>
          <FontAwesome5 name="minus" size={24} color="white" />
        </Button>
        <Button onPress={() => handleEquation("4")} style={styles.Numbutton}>
          <Text style={styles.NumButtonText}>4</Text>
        </Button>
        <Button onPress={() => handleEquation("5")} style={styles.Numbutton}>
          <Text style={styles.NumButtonText}>5</Text>
        </Button>
        <Button onPress={() => handleEquation("6")} style={styles.Numbutton}>
          <Text style={styles.NumButtonText}>6</Text>
        </Button>
        <Button onPress={() => handleEquation("*")}>
          <FontAwesome name="times" size={24} color="white" />
        </Button>
        <Button onPress={() => handleEquation("7")} style={styles.Numbutton}>
          <Text style={styles.NumButtonText}>7</Text>
        </Button>
        <Button onPress={() => handleEquation("8")} style={styles.Numbutton}>
          <Text style={styles.NumButtonText}>8</Text>
        </Button>
        <Button onPress={() => handleEquation("9")} style={styles.Numbutton}>
          <Text style={styles.NumButtonText}>9</Text>
        </Button>
        <Button onPress={() => handleEquation("/")}>
          <FontAwesome5 name="divide" size={24} color="white" />
        </Button>
        <Button onPress={() => handleEquation("s")} style={styles.Numbutton}>
          <Text style={styles.NumButtonText}>S</Text>
        </Button>
        <Button onPress={() => handleEquation("0")} style={styles.Numbutton}>
          <Text style={styles.NumButtonText}>0</Text>
        </Button>
        <Button onPress={() => handleEquation(".")} style={styles.Numbutton}>
          <Entypo name="dot-single" size={24} color="black" />
        </Button>
        <Button onPress={() => handleEquation("=")}>
          <FontAwesome5 name="equals" size={24} color="white" />
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#111",
    padding: 10,
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 28,
    fontWeight: "500",
    color: "#fff",
  },
  Numbutton: {
    backgroundColor: "#fff",
  },
  NumButtonText: {
    fontSize: 28,
    fontWeight: "500",
    color: "#000",
  },
  topButton: {
    backgroundColor: "#2D2D2D",
  },
  display: {
    flex: 1,
    paddingHorizontal: 15,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    paddingBottom: 5,
    width: "100%",
  },
  number: {
    fontSize: 60,
    color: "#fff",
    textAlign: "right",
  },
});
