import { Text } from "react-native";
import { todojsonplaceholder_get_todos_list } from "./../../store/tODOJsonPlaceholder/todojsonplaceholder_response_get_GETTODOLists.slice.js";
import { useEffect, useSelector } from "react";
import { useDispatch } from "react-redux";
import React from "react";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled2 = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(todojsonplaceholder_get_todos_list());
  }, []);
  const todojsonplaceholder_response_get_GETTODOList = useSelector(state => state.todojsonplaceholder_get_todos_list);
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><Text style={styles.hbhUhyrK}>{todojsonplaceholder_response_get_GETTODOList.title}</Text></ScrollView>
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
  },
  hbhUhyrK: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  }
});
export default Untitled2;