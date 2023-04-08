import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Alert,
  ImageBackground,
  ScrollView,
} from 'react-native';
import { Header, Icon } from 'react-native-elements';
import firebase from 'firebase';
import db from '../config';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import {
  Entypo,
  Fontisto,
  FontAwesome5,
  Octicons,
  AntDesign,
  MaterialIcons,
  MaterialCommunityIcons,
  Feather,
} from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { ScreenHeight ,ScreenWidth, color} from 'react-native-elements/dist/helpers';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Dimensions } from 'react-native';

const { height, width } = Dimensions.get("window");

export default class ViewDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mrn: this.props.route.params.patientDetails.details['mrn'],
      name: this.props.route.params.patientDetails['name'],
      age: this.props.route.params.patientDetails.details['age'],
      height:
        this.props.route.params.patientDetails.details['height'],
        weight: this.props.route.params.patientDetails.details['weight'],
        bpm: this.props.route.params.patientDetails.details['bpm'],
        bp: this.props.route.params.patientDetails.details['BP'],
        bloodgroup: this.props.route.params.patientDetails.details['bloodgroup'],
        date: this.props.route.params.patientDetails.details['date'],
        gender: this.props.route.params.patientDetails.details['gender'],
        phone: this.props.route.params.patientDetails.details['phoneNo'],
        refered: this.props.route.params.patientDetails.details['referredBy'],
    };
    console.log(this.state.mrn)
  }

  

  render() {
    return (
      <SafeAreaProvider style={{ flex: 1, backgroundColor: 'white' }}>
        
        <ImageBackground
        source={require("../assets/ViewDetailsBackground.png")}
        style = {styles.bg}
        >
        <ScrollView>
      <View
      style = {styles.titleContainer}
      >
        <View style = {{flexDirection: "row", justifyContent: 'space-around', marginLeft: 90}}>
      
        <Ionicons name={'person-circle-outline'} size={80} color={'grey'} style = {{marginLeft: 0}}/>
        <View style = {styles.edit}>
          <TouchableOpacity>
         <Ionicons name={'create-outline'} size={40} color={'grey'} />
         </TouchableOpacity>
         </View>
         </View>
      <Text
      
      style = {styles.title}>
        {this.state.name}
      </Text>

      <Text
      style = {styles.subtitle2}
      >
        {this.state.mrn}
      </Text>

      </View>
      <View>
        <Text
        style = {styles.subtitle}
        >
          Reports
        </Text>
      </View>
      <View style = {styles.container}>
        <TouchableOpacity>
        <Ionicons name={'add-circle'} size={80} color={'#41C264'} />
        </TouchableOpacity>

        <TouchableOpacity>
        <Ionicons name="water" size={80} color='red'/>
        </TouchableOpacity>

        <TouchableOpacity>
        <Ionicons name="time" size={80} color='blue'/>
        </TouchableOpacity>

      
      </View>
      <View>
        <Text
        style = {styles.subtitle}
        >
          Details
        </Text> 
        
        <View
        style = {styles.container2}
        >
        <Text
        style = {styles.subheading}
        >
          Age
        </Text>
        <View style = {styles.container}>
        <Text
        style = {styles.subheading1}
        >
          {this.state.age}
        </Text>
        <TouchableOpacity
        style = {{alignSelf: "flex-end", justifyContent: "flex-end", alignItems: "flex-end",alignContent: "flex-end"}}
        >
        <Ionicons name={'create-outline'} size={40} color={'grey'} />
        </TouchableOpacity>
        </View>
        </View>
        </View>
        
        <View>     
        <View
        style = {styles.container2}
        >
          <View style = {{flexDirection: "row"}}>
            <View style = {{flexDirection: "column"}}>
          <Text
          style = {styles.subheading}
          >
            BP
          </Text>
          <Text
          style = {styles.subheading1}
          >
          {this.state.bp}
          </Text>
          </View>
        <View style = {{marginLeft: width-210}}>
        <TouchableOpacity>
        <Ionicons name={'create-outline'} size={40} color={'grey'} />
        </TouchableOpacity>
        </View>
        </View >
        </View>
        </View>

        <View>     
        <View
        style = {styles.container2}
        >
          <View style = {{flexDirection: "row"}}>
            <View style = {{flexDirection: "column"}}>
          <Text
          style = {styles.subheading}
          >
            Blood Group
          </Text>
          <Text
          style = {styles.subheading1}
          >
          {this.state.bloodgroup}
          </Text>
          </View>
        <View style = {{marginLeft: width-210}}>
        <TouchableOpacity>
        <Ionicons name={'create-outline'} size={40} color={'grey'} />
        </TouchableOpacity>
        </View>
        </View >
        </View>
        </View>

        <View>     
        <View
        style = {styles.container2}
        >
          <View style = {{flexDirection: "row"}}>
            <View style = {{flexDirection: "column"}}>
          <Text
          style = {styles.subheading}
          >
            DoB
          </Text>
          <Text
          style = {styles.subheading1}
          >
          {this.state.date}
          </Text>
          </View>
        <View style = {{marginLeft: width-210}}>
          <TouchableOpacity>
        <Ionicons name={'create-outline'} size={40} color={'grey'} />
        </TouchableOpacity>
        </View>
        </View >
        </View>
        </View>
        
        <View>     
        <View
        style = {styles.container2}
        >
          <View style = {{flexDirection: "row"}}>
            <View style = {{flexDirection: "column"}}>
          <Text
          style = {styles.subheading}
          >
            Sex
          </Text>
          <Text
          style = {styles.subheading1}
          >
          {this.state.gender}
          </Text>
          </View>
        <View style = {{marginLeft: width-210}}>
          <TouchableOpacity>
        <Ionicons name={'create-outline'} size={40} color={'grey'} />
        </TouchableOpacity>
        </View>
        </View >
        </View>
        </View>

        <View>     
        <View
        style = {styles.container2}
        >
          <View style = {{flexDirection: "row"}}>
            <View style = {{flexDirection: "column"}}>
          <Text
          style = {styles.subheading}
          >
            Height
          </Text>
          <Text
          style = {styles.subheading1}
          >
          {this.state.height}
          </Text>
          </View>
        <View style = {{marginLeft: width-210}}>
          <TouchableOpacity>
        <Ionicons name={'create-outline'} size={40} color={'grey'} />
        </TouchableOpacity>
        </View>
        </View >
        </View>
        </View>

        <View>     
        <View
        style = {styles.container2}
        >
          <View style = {{flexDirection: "row"}}>
            <View style = {{flexDirection: "column"}}>
          <Text
          style = {styles.subheading}
          >
            Weight
          </Text>
          <Text
          style = {styles.subheading1}
          >
          {this.state.weight}
          </Text>
          </View>
        <View style = {{marginLeft: width-210}}>
          <TouchableOpacity>
        <Ionicons name={'create-outline'} size={40} color={'grey'} />
        </TouchableOpacity>
        </View>
        </View >
        </View>
        </View>

        <View>     
        <View
        style = {styles.container2}
        >
          <View style = {{flexDirection: "row"}}>
            <View style = {{flexDirection: "column"}}>
          <Text
          style = {styles.subheading}
          >
            Phone Number
          </Text>
          <Text
          style = {styles.subheading1}
          >
          {this.state.phone}
          </Text>
          </View>
        <View style = {{marginLeft: width-210}}>
          <TouchableOpacity>
        <Ionicons name={'create-outline'} size={40} color={'grey'} />
        </TouchableOpacity>
        </View>
        </View >
        </View>
        </View>


        <View>     
        <View
        style = {styles.container2}
        >
          <View style = {{flexDirection: "row"}}>
            <View style = {{flexDirection: "column"}}>
          <Text
          style = {styles.subheading}
          >
          Reffered By
          </Text>
          <Text
          style = {styles.subheading1}
          >
          {this.state.refered}
          </Text>
          </View>
        <View style = {{marginLeft: width-210}}>
          <TouchableOpacity>
        <Ionicons name={'create-outline'} size={40} color={'grey'} />
        </TouchableOpacity>
        </View>
        </View >
        </View>
        </View>
        
      {/* <Text style={{alignSelf:'center',fontSize:'bold',fontSize:25,}}>Patients</Text>
          <ScrollView style={{ flex: 1 }}>
          <View style={{height:ScreenHeight,width:ScreenWidth,alignContent:'center',alignItems:'center'}}>
            <Text style={{alignSelf:'center',fontSize:'bold',fontSize:25,}}>Patients</Text>
            <View style={{height:ScreenHeight/1.8,width:ScreenWidth-20, padding:10,backgroundColor:'skyblue',borderRadius:30}}>
<Text style={{alignSelf:'center',fontSize:20}}>{this.state.name} </Text>
<Text style={{alignSelf:'flex-start',fontSize:20}}>{this.state.height} kg(weight)</Text>
<Text style={{alignSelf:'flex-end',fontSize:20}}>{this.state.weight} cms(height)</Text>
            </View>

            <View style={{flexDirection:'row',height:ScreenHeight/3.5, width:ScreenWidth, margin:10,padding:10}}>
              <View style={{backgroundColor:'blue',width:ScreenWidth/2,borderRadius:30}}>
                <Text></Text>
              </View>
            </View>
          </View>

          </ScrollView> */}
          </ScrollView>
        </ImageBackground>
        
      </SafeAreaProvider>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    width: '100%',
    resizeMode: 'contain',
  },
  headerImg: {
    width: '90%',
    height: 60,
    backgroundColor: '#FFA500',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
  },
  updateButton: {
    width: '60%',
    height: 50,
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: '#62A001',
    borderRadius: 20,
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignContent: "center",
    marginTop: 15,
    backgroundColor: "#E2F0D9",
    width: width-15,
    alignSelf: "center",
    borderRadius: 25
  },
  bg: {
    width: 400,
    height: 600,
    alignSelf: "center",
    resizeMode: "contain",
  },
  titleContainer: {
    backgroundColor: "white",
    borderRadius: 50,
    width: width-100,
    height: 200,
    alignSelf: "center",
    margin: 30,
    marginBottom: 0,
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.3,
    shadowRadius: 4,
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    color: 'black',
    paddingRight: 0,
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    alignSelf: "center",
    justifyContent: "center",
  },
  subtitle: {
    color: 'black',
    paddingRight: 0,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    alignSelf: "",
    justifyContent: "center",
    marginLeft: 25,
    marginTop: 20
  },
  subtitle2: {
    color: 'black',
    paddingRight: 0,
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    alignSelf: "center",
    justifyContent: "center",
  },
  edit: {
    marginLeft: 40,
    // marginTop: 30
  },
  container2: {
    flexDirection: "column",
    justifyContent: "spaced-around",
    alignContent: "center",
    marginTop: 15,
    backgroundColor: "#E2F0D9",
    width: width-15,
    alignSelf: "center",
    borderRadius: 25,
    marginLeft: 0
  },
  subheading: {
    color: 'black',
    paddingRight: 0,
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    alignSelf: "",
    justifyContent: "center",
    marginLeft: 10,
    marginTop: 5
  },
  subheading1: {
    color: 'black',
    paddingRight: 0,
    fontSize: 23,
    // fontWeight: 'bold',
    textAlign: 'center',
    alignSelf: "",
    justifyContent: "center",
    marginLeft: 10,
    marginTop: 5
  }
});
