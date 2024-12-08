import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Redirect } from "expo-router";

const NotFoundPage = () => {
  return <Redirect href={"/"} />;
};

export default NotFoundPage;
