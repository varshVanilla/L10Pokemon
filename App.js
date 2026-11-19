import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View, TouchableOpacity, SectionList, Button, Image, Alert} from 'react-native';
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const datasource = [
  {
    data: [
      {name: 'Pikachu', card:'25'},
      {name: 'Voltrob', card:'100'},
    ],
    title: "Electric",
    icon:"lightning-bolt-outline",
    bgcolor: "yellow",
  },
  {
    data: [
      {name: 'Charmander', card:'4'},
      {name: 'Growlithe', card:'58'},
    ],
    title: "Fire",
    icon:"fire",
    bgcolor: "orange",
  },
  {
    data: [
      {name: 'Squirtle', card:'7'},
      {name: 'Psyduck', card:'54'},
    ],
    title: "Water",
    icon: "water",
    bgcolor: "skyblue",
  },
];

const renderItem = ({item, index, section}) => {
  // return <Text>{item.key}</Text>;
  // };
  return (
      <TouchableOpacity style={styles.opacityStyle}
                        onPress={() => {Alert.alert(item.name + " is selected!")}}>
        <Text style={styles.textStyle}>{item.name}</Text>
        <Image source ={{uri:'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_' + item.card+ '-2x.png'}}
               style={{width: 200, height: 300}} />
      </TouchableOpacity>
  );
};

export default function App() {
  return (
      <View style={styles.container}>
        <Text style={{fontSize: 20}}>L10 Ex3 - Pokemon</Text>
        <Button title="Add Pokemon" onPress={() => {Alert.alert("Yay Add Pokemon button pressed!")}}/>
        <SectionList
            sections={datasource}
            contentContainerStyle={{padding:10}}
            renderItem={renderItem}
            renderSectionHeader={({section: {title, bgcolor, icon}}) => (
                <View style={[styles.headerView, {backgroundColor:bgcolor}]}>
                  <MaterialCommunityIcons name={icon} size={40} color="black" />
                  <Text style={styles.headerText}>{title}</Text>
                </View>
            )}/>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 20,
    marginBottom: 20,
  },
  opacityStyle: {
    borderWidth: 1,
    flexDirection: 'row',  //put name and pic side by side
    justifyContent: 'space-between', //name on the left, picture on the right
    alignItems: 'center',
    backgroundColor: 'lavender',
  },
  textStyle: {
    fontSize: 20,
    margin: 10,
    textAlign: 'left',
  },
  imageStyle: {
    width:150,
    height:210,
    margin:10,
  },
  headerView:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin:10,
  },
  headerText: {
    fontSize: 20,
    marginLeft: 10,
    fontWeight: 'bold',
  },
});
