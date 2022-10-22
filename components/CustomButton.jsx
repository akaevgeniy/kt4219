import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function CustomButton({ text, onPress, fullWidth }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, fullWidth ? { width: "100%" } : {}]}
    >
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    borderRadius: 10,
    height: 40,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#000000",
    fontSize: 20,
  },
});
