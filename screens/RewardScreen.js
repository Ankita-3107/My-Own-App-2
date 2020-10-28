import React, { Component } from 'react';
import { View, StyleSheet, Text, FlatList,TouchableOpacity } from 'react-native';
import { ListItem } from 'react-native-elements'
import firebase from 'firebase';
import db from '../config'
import MyHeader from '../components/MyHeader';

export default class RewardScreen extends Component{
  constructor(){
    super()
    this.state = {
      requestedUsersList : []
    }
  this.requestRef= null
  }

  getRequestedUsersList =()=>{
    this.requestRef = db.collection("requested_users")
    .onSnapshot((snapshot)=>{
      var requestedUsersList = snapshot.docs.map(document => document.data());
      this.setState({
        requestedUsersList : requestedUsersList
      });
    })
  }

  componentDidMount(){
    this.getRequestedUsersList()
  }

  componentWillUnmount(){
    this.requestRef();
  }

  keyExtractor = (item, index)=>index.toString()


    renderItem = ( {item, i} ) =>{
        return (
          <ListItem
            key={i}
            title={item.student_name}
            subtitle={item.time_spent}
            titleStyle={{ color: 'black', fontWeight: 'bold' }}
            rightElement={
                <TouchableOpacity style={styles.button}>
                  <Text style={{color:'#ffff'}}>View</Text>
                </TouchableOpacity>
              }
            bottomDivider
          />
        )
      }
      render(){
        return(
          <View style={{flex:1}}>
            <MyHeader title="Reward Screen"/>
            <View style={{flex:1}}>
              {
                this.state.requestedUsersList.length === 0
                ?(
                  <View style={styles.subContainer}>
                    <Text style={{ fontSize: 20}}>List Of The Submitted Forms By Children</Text>
                  </View>
                )
                :(
                  <FlatList
                    keyExtractor={this.keyExtractor}
                    data={this.state.requestedBooksList}
                    renderItem={this.renderItem}
                  />
                )
              }
            </View>
          </View>
        )
      }
}
    const styles = StyleSheet.create({
        subContainer:{
          flex:1,
          fontSize: 20,
          justifyContent:'center',
          alignItems:'center'
        },
        button:{
          width:100,
          height:30,
          justifyContent:'center',
          alignItems:'center',
          backgroundColor:"#ff5722",
          shadowColor: "#000",
          shadowOffset: {
             width: 0,
             height: 8
           }
        }
    
      })
      