import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { globalStylesWrapper } from "@/styles/global.style";
import { Colors } from "@/theme/colors";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

const Index = () => {
  const colors: Colors = useSelector((state: RootState) => state.theme.colors);

  const globalStyles = globalStylesWrapper(colors);

  return (
    <View style={[globalStyles.background, globalStyles.row_center]}>
      <Text style={{ color: colors.text }}>Index</Text>
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({});
