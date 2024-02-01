/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import React, { useEffect, useState } from 'react';
import { FlatList, Image, StyleSheet, Text, View } from "react-native";

import json from './assets/data.json';
import INotificationItemProps, { getColor, getIcon, getInComeColor, getStatusColor, transformStatus } from './models/Notification';

const App = () => {
  const [dataSource, setDataSource] = useState<INotificationItemProps[]>([])
  useEffect(() => {
    const items: INotificationItemProps[]  = JSON.parse(JSON.stringify(json))
    setDataSource(items)
  }, []);

  return (
    <View>
      <FlatList data={dataSource}
        renderItem={({item}) => ItemList(item)}
        keyExtractor={(_item, index) => `basicListEntry-${index}`}>
      </FlatList>
    </View>
  );

}

const ItemList = (item: INotificationItemProps) => {
  return (
    <View style={styles.rowContainer}>
      <View style={{flexDirection: "row", paddingLeft: 16}}>
        <View style={[styles.iconContainer, {backgroundColor: getColor(item.type)}]}>
          <Image style={styles.icon} source={getIcon(item.type)}></Image>
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={[styles.subtitle, {color: getInComeColor(item.income)}]}>{`${item.income ? "+" : "-"}$${item.amount}`}</Text>
        </View>
      </View>
      
      <View style={styles.statusContainer}>
        <Text style={[styles.status, {color: getStatusColor(item.status)}]}>{transformStatus(item.status)}</Text>
        <Text style={styles.time}>{item.time}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
  },
  rowContainer: {
    flexDirection:'row',
    height: 60,
    justifyContent: "space-between"
  },

  iconContainer: {
    backgroundColor: "#FABE3C",
    width: 48,
    height: 48,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: 'center',
    borderRadius: 24
  },
  icon: {
    width: 24,
    height: 24,
    resizeMode: "center"
  },
  descriptionContainer: {
    paddingLeft: 12,
    alignSelf: "center",
    justifyContent: "center"
  },

  title: {
    color: "#232440",
    fontSize: 17
  },
  subtitle: {
    fontSize: 15
  },
  statusContainer: {
    paddingRight: 16,
    alignSelf: "center",
    justifyContent: "center"
  },
  status: {
    fontSize: 15,
    textAlign: "right"
  },
  time: {
    fontSize: 13,
    textAlign: "right",
    fontWeight: "400",
    color: "#6E6E82"
  }
});

export default App

