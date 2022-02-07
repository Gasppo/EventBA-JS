import { NavigationContainer } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { ActivityIndicator } from "react-native";
import { useSelector } from "react-redux";
import { Centrar } from "./Components/Centrar";
import { AuthStack } from "./stacks/AuthStack";
import { AppTabs } from "./tabs/AppTabs";

export const Routes = ({}) => {
  const [loading, setLoading] = useState(true);
  const user = useSelector((state) => state.user);

  useEffect(() => {
    user ? setLoading(false) : console.log("Couldnt load user");
  }, []);

  if (loading) {
    return (
      <Centrar>
        <ActivityIndicator size="large" />
      </Centrar>
    );
  }

  return (
    <NavigationContainer>
      {user.username ? <AppTabs /> : <AuthStack />}
    </NavigationContainer>
  );
};
