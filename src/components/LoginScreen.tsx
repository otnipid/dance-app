import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { useDispatch } from "react-redux";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../NavigationParamList";

type LoginScreenProps = {
  navigation: FrameNavigationProp<MainStackParamList, "Login">;
};

export function LoginScreen({ navigation }: LoginScreenProps) {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const dispatch = useDispatch();

  const handleLogin = () => {
    // TODO: Implement actual login logic with API call
    dispatch({ type: "LOGIN_SUCCESS", payload: { token: "dummy_token", user: { username } } });
    navigation.navigate("VideoList");
  };

  return (
    <flexboxLayout style={styles.container}>
      <label className="text-2xl mb-4 font-bold">Dance Instruction App</label>
      <textField
        hint="Username"
        value={username}
        onTextChange={(e) => setUsername(e.value)}
        style={styles.input}
      />
      <textField
        hint="Password"
        secure={true}
        value={password}
        onTextChange={(e) => setPassword(e.value)}
        style={styles.input}
      />
      <button onTap={handleLogin} style={styles.button}>
        Login
      </button>
    </flexboxLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  input: {
    width: "80%",
    marginBottom: 10,
    fontSize: 18,
  },
  button: {
    fontSize: 18,
    color: "#ffffff",
    backgroundColor: "#65adf1",
    padding: 10,
    borderRadius: 5,
  },
});