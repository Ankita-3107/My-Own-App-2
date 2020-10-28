import React,{Component} from 'react';
import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
  Alert} from 'react-native';
import db from '../config';
import firebase from 'firebase';
import MyHeader from '../components/MyHeader'

export default class WriteScreen extends Component{
    constructor(){
        super();
        this.state ={
            userId: firebase.auth().currentUser.email,
            Name:"",
            HowUSpentTheDay:"",
        }
    }
    createUniqueId(){
   return Math.random().toString(40).substring(7);
    }

    addRequest =(Name, HowUSpentTheDay)=>{
        var userId = this.state.userId
        var randomRequestId = this.createUniqueId()
        db.collection('requested_users').add({
            "user_id": userId,
            "student_name": Name,
            "time_spent": HowUSpentTheDay,
            "request_id"  : randomRequestId,
        })
     this.state({
        Name:'',
        HowUSpentTheDay:'',
     })
     return Alert.alert("Form Submmited Successfully");
}

render(){
    return(
        <View style={{flex:1}}>
          <MyHeader title="Write the rountine"/>
            <KeyboardAvoidingView style={styles.keyBoardStyle}>
              <TextInput
                style ={styles.formTextInput}
                placeholder={"enter your name"}
                onChangeText={(text)=>{
                    this.setState({
                        Name:text
                    })
                }}
                value={this.state.Name}
              />
              <TextInput
                style ={[styles.formTextInput,{height:300}]}
                multiline
                numberOfLines ={15}
                placeholder={"How u spent your whole day?"}
                onChangeText ={(text)=>{
                    this.setState({
                        HowUSpentTheDay:text
                    })
                }}
                value ={this.state.HowUSpentTheDay}
              />
        <TouchableOpacity
                style={styles.button}
                onPress={()=>{this.addRequest(this.state.Name,this.state.HowUSpentTheDay)}}
                >
                <Text>Submit</Text>
              </TouchableOpacity>
            </KeyboardAvoidingView>
        </View>
    )
  }
}

const styles = StyleSheet.create({
    keyBoardStyle : {
      flex:1,
      alignItems:'center',
      justifyContent:'center'
    },
    formTextInput:{
      width:"75%",
      height:35,
      alignSelf:'center',
      borderColor:'#ffab91',
      borderRadius:10,
      borderWidth:1,
      marginTop:20,
      padding:10,
    },
    button:{
      width:"75%",
      height:50,
      justifyContent:'center',
      alignItems:'center',
      borderRadius:10,
      backgroundColor:"#ff5722",
      shadowColor: "#000",
      shadowOffset: {
         width: 0,
         height: 8,
      },
      shadowOpacity: 0.44,
      shadowRadius: 10.32,
      elevation: 16,
      marginTop:20
      },
    }
  )
