import { FlatList } from "react-native";
import { View } from "react-native";
import { todojsonplaceholder_get_todos_list } from "./../../store/tODOJsonPlaceholder/todojsonplaceholder_response_get_GETTODOLists.slice.js";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import React from "react";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled2 = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(todojsonplaceholder_get_todos_list());
  }, []);
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><FlatList style={styles.MaRpRiTH} renderItem={() => <View style={styles.WsWTDgkm}></View>} ItemSeparatorComponent={() => <View style={styles.UAWrMLtm} />} data={[1, 2, 3]} keyExtractor={item => item.toString()}></FlatList></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  MaRpRiTH: {
    position: "absolute",
    width: 336,
    height: 549,
    left: 10,
    top: 9
  },
  WsWTDgkm: {
    width: 92,
    height: 60,
    backgroundColor: "#FFFFFF"
  },
  UAWrMLtm: {
    backgroundColor: "#000000",
    height: 1
  }
});
export default Untitled2;