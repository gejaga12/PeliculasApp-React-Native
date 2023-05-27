import React from 'react';
import { View, ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native';

const channels = [
  'Channel 1',
  'Channel 2',
  'Channel 3',
  'Channel 4',
  'Channel 5',
  'Channel 6',
  'Channel 7',
  'Channel 8',
  'Channel 9',
  'Channel 10',
];

const hours = Array.from(Array(24), (_, index) => index).map((hour) => {
  const hourString = String(hour).padStart(2, '0');
  return `${hourString}:00`;
});

const GuideScreen = () => {
  return (
    <ScrollView horizontal>
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.channelsContainer} showsVerticalScrollIndicator={false}>
          {channels.map((channel, index) => (
            <TouchableOpacity key={index} style={styles.channelItem}>
              <Text style={styles.channelText}>{channel}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
        <ScrollView contentContainerStyle={styles.programContainer} horizontal>
          <View style={styles.timeContainer}>
            {hours.map((hour, index) => (
              <View key={index} style={styles.timeItem}>
                <Text style={styles.timeText}>{hour}</Text>
              </View>
            ))}
          </View>
          <View style={styles.programContent}>
            {channels.map((channel, channelIndex) => (
              <View key={channelIndex} style={styles.programRow}>
                {hours.map((hour, hourIndex) => (
                  <TouchableOpacity key={hourIndex} style={styles.programItem} onPress={() => handleCellPress(channel, hour)}>
               
                  </TouchableOpacity>
                ))}
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
    </ScrollView>
  );
};

const handleCellPress = (channel: any, hour: any) => {
  // Lógica para manejar el evento de clic en una celda de programación
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  channelsContainer: {
    flexDirection: 'column',
  },
  channelItem: {
    height: 50,
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderColor: 'gray',
  },
  channelText: {
    fontSize: 16,
    marginLeft: 10,
  },
  programContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  timeContainer: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderColor: 'gray',
  },
  timeItem: {
    flex: 1,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 1,
    borderColor: 'gray',
  },
  timeText: {
    fontSize: 14,
  },
  programContent: {
    flex: 1,
    flexDirection: 'column',
  },
  programRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: 'gray',
  },
  programItem: {
    flex: 1,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'gray',
  },
});

export default GuideScreen;
