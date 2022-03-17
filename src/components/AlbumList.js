// import React from "react";
// import { FlatList } from "react-native";
// import AlbumDetail from "./AlbumDetail";

// const AlbumList = ({ list, navigation }) => {
//   const renderItem = ({ item }) => <AlbumDetail album={item} navigation={navigation} />;
//   return (
//     <FlatList
//       data={list}
//       renderItem={renderItem}
//       keyExtractor={item => item.title}
//     />    
//   ); 
  
// }
// export default AlbumList;
import React from "react";
import { Text, FlatList, SectionList, StyleSheet } from "react-native";
import AlbumDetail from "./AlbumDetail";
import HotAlbumDetail from "./HotAlbumDetail";
// import sections from "../json/albums.json";//傳資料進來
import sections from "../json/album_section.json";//傳資料進來
const Albumlist = ({ list, navigation }) => {

  // const renderItem = ({ item }) => <AlbumDetail album={item} navigation={navigation} />;
  // return (
  //   <FlatList
  //     data={list}
  //     renderItem={renderItem}
  //     keyExtractor={item => item.title}
  //   />    
  // ); 

  const renderSectionHeader = ({section}) => (
    <>
      <Text style={styles.sectionHeader}>{section.title}</Text>
      {section.horizontal ? (
        <FlatList
          horizontal={true}
          data={section.data}
          renderItem={({ item }) => <HotAlbumDetail navigation album={item} />}
          showsHorizontalScrollIndicator={false}
          keyExtractor={ item => item.title }
        />
      ) : null}
    </>
  );
  const renderItem1 = ({ item, section }) => {
    if (section.horizontal) {
      return null;
    }
    return <AlbumDetail album={item} />
  };

  return (
    <SectionList 
      sections={sections}
      contentContainerStyle={{ paddingHorizontal: 10 }}
      stickySectionHeadersEnabled={false}
      showsHorizontalScrollIndicator={false}
      renderSectionHeader={renderSectionHeader}
      renderItem={renderItem1}
      keyExtractor={ item => item.title }
    />
  );

  };
const styles = StyleSheet.create({
  sectionHeader: {
    fontWeight: '600',
    fontSize: 18,
    paddingTop: 20,
    paddingBottom: 5,
    paddingLeft: 10,
    textTransform: 'uppercase',
  },
})

export default Albumlist;


