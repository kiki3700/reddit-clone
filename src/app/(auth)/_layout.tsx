import { useAuth } from "@clerk/clerk-expo";
import { Redirect, Stack } from "expo-router";

export default function AuthLayout() {
  const { isSignedIn } = useAuth();
  if (isSignedIn) {
    return <Redirect href={"/"} />;
  }
  return (
    <Stack>
      <Stack.Screen name="siginIn" options={{ title: "Sign In" }} />
      <Stack.Screen name="siginUp" options={{ title: "Sign Up" }} />
    </Stack>
  );
}
