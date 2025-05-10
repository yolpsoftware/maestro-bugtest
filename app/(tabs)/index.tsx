import { Image, StyleSheet, Platform, Pressable, Text, Alert, View, useColorScheme } from 'react-native';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { useCallback } from 'react';

interface SearchResultItem {
  text: string;
  translation?: string;
  topTag?: string;
  bottomTag: string;
}

const searchResults: SearchResultItem[] = [{
  text: 'Capisce?',
  translation: 'Do you understand?',
  bottomTag: 'not yet',
}, {
  text: 'capire',
  translation: 'to understand',
  bottomTag: 'not yet',
}, {
  text: 'dummy',
  bottomTag: 'not yet',
}, {
  text: 'dummy',
  bottomTag: 'not yet',
}, {
  text: 'dummy',
  bottomTag: 'not yet',
}, {
  text: 'dummy',
  bottomTag: 'not yet',
}, {
  text: 'dummy',
  bottomTag: 'not yet',
}, {
  text: 'dummy',
  bottomTag: 'not yet',
}, {
  text: 'dummy',
  bottomTag: 'not yet',
}]

export default function HomeScreen() {
  return (
    <ScrollView
      style={[styles.resultsContainer]}
      //animatedProps={animatedScrollViewContainerProps}
      contentContainerStyle={styles.resultsContainerInner}
      keyboardShouldPersistTaps="never"
    >
      {searchResults.map((item, index) => (
        <QueryResultView item={item} key={item.text} />
      ))}
    </ScrollView>
  );
}

const QueryResultView = ({ item }: { item: SearchResultItem }) => {
  const now = Date.now();
  const isDark = useColorScheme() === 'dark';
  const onPress = useCallback(() => {
    Alert.alert(item.text);
  }, []);
  return (
    <TouchableOpacity
      style={[styles.item]}
      onPress={onPress}
    >
      <View style={styles.itemContainer}>
        <View style={styles.topContainer}>
          <Text style={[styles.itemTitle, styles.fg]}>
            {item.text}
            {item.translation && <Text style={[styles.fontWeight400, styles.dimmedFg]}>{` - ${item.translation}`}</Text>}
          </Text>
          <Text style={[styles.standardSmallScript, styles.dimmedFg, styles.rightText, styles.rightText]}>
            {item.topTag}
          </Text>
        </View>
        <View style={styles.bottomContainer}>
          <Text style={[styles.itemSubtitle, styles.fg]}>
            🇮🇹 Italian Words
          </Text>
          <Text style={[styles.standardSmallScript, styles.dimmedFg3, styles.rightText, styles.rightText]}>
            {item.bottomTag}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  resultsContainer: {
    flex: 1,
    //borderWidth: 1, borderColor: 'green',
    backgroundColor: 'white',
    marginTop: 100,
    marginBottom: 100,
  },
  resultsContainerInner: {
    padding: 0,
    margin: 0,
    paddingTop: 16,
    paddingBottom: 45,
    //borderWidth: 1, borderColor: 'pink',
  },
  item: {
    overflow: 'hidden',
    //height: 44,
    paddingHorizontal: 16,
    marginBottom: 4,
    //borderTopWidth: 1,
    //borderBottomWidth: 1,
    //borderColor: 'transparent',
    paddingTop: 4,
    paddingBottom: 4,
    //paddingHorizontal: 8,
    borderRadius: 6,
    justifyContent: 'space-between',
  },
  selectedItem: {
    //borderColor: '#44AAFF',
    //backgroundColor: 'rgba(60, 140, 255, 0.2)',
  },
  itemContainer: {
    flex: 1,
  },
  topContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    //backgroundColor: 'red',
  },
  bottomContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    //backgroundColor: 'red',
  },
  itemTitle: {
    fontWeight: '600',
    fontSize: 16,
    flex: 1,
    marginBottom: 2,
    //backgroundColor: 'red',
    //borderWidth: .333,
    //borderColor: 'red',
  },
  itemSubtitle: {
    fontSize: 14,
    flexWrap: 'nowrap',
    maxHeight: 16,
    //backgroundColor: 'red',
  },
  rightText: {
    //flexWrap: 'wrap',
    lineHeight: 19,
    marginTop: 1,
    marginBottom: -3,
  },
  fg: {
    color: '#000',
  },
  dimmedFg: {
    color: '#000',
    opacity: 0.8,
  },
  dimmedFg3: {
    color: '#000',
    opacity: 0.3,
  },
  fontWeight400: {
    fontWeight: '400',
  },
  standardSmallScript: {
    fontSize: 12,
    lineHeight: 16,
    fontWeight: '400',
  },
});
