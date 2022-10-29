import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import CustomButton from "./components/CustomButton";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useState } from "react";
import store from "./store/store";
import { Provider, useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./store/counter/counterSlice";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

let persistor = persistStore(store);

function HomeScreen({ navigation }) {
  // const [count, setCount] = useState(0);
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <CustomButton
        text={"Click me!"}
        onPress={() => {
          navigation.navigate("Details");
        }}
        fullWidth={true}
      />
      <View style={{ marginTop: 20 }}></View>
      <CustomButton
        text={"Increment"}
        onPress={() => {
          dispatch(increment());
        }}
        fullWidth={true}
      />
      <View style={{ marginTop: 20 }}></View>
      <CustomButton
        text={"Decrement"}
        onPress={() => {
          dispatch(decrement());
        }}
        fullWidth={true}
      />
      <Text style={{ fontSize: 25 }}>{count}</Text>
      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
    backgroundColor: "#E76025",
    alignItems: "center",
    justifyContent: "center",
  },
});

function DetailsScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Details Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Details" component={DetailsScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}
