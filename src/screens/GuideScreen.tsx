import React from 'react';
import { View, ScrollView, StyleSheet, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

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
  'Channel 11',
  'Channel 12',
  'Channel 13',
  'Channel 10',
  'Channel 3',
  'Channel 14',
  'Channel 12',
  'Channel 11',
  'Channel 15',
  'Channel 16',
  'Channel 17',
  'Channel 18',
  'Channel 19',
];

const hours = Array.from(Array(24), (_, index) => index).map((hour) => {
  const hourString = String(hour).padStart(2, '0');
  return `${hourString}:00`;
});

const GuideScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <View style={styles.contentContainer}>
          <ScrollView style={styles.channelsContainer} contentContainerStyle={styles.channelsContent}>
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
            {channels.map((channel, channelIndex) => (
              <View key={channelIndex} style={styles.programRow}>
                {hours.map((hour, hourIndex) => (
                  <TouchableOpacity key={hourIndex} style={styles.programItem} onPress={() => handleCellPress(channel, hour)}>
                    {/* Aquí puedes colocar el contenido de las celdas de programación */}
                  </TouchableOpacity>
                ))}
              </View>
            ))}
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
};

const handleCellPress = (channel, hour) => {
  // Lógica para manejar el evento de clic en una celda de programación
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flexDirection: 'row',
  },
  channelsContainer: {
    width: 120,
  },
  channelsContent: {
    flexGrow: 1,
    

  },
  channelItem: {
    height: 50,
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderColor: 'gray',
    position: 'relative',
    zIndex: 1,
    
  },
  channelText: {
    fontSize: 16,
    marginLeft: 10,
  },
  programContainer: {
    flexDirection: 'column',
  },
  timeContainer: {
    flexDirection: 'row',
  },
  timeItem: {
    width: 100,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderColor: 'gray',
  },
  timeText: {
    fontSize: 14,
  },
  programRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: 'gray',
  },
  programItem: {
    width: 100,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'gray',
  },
});

export default GuideScreen;
