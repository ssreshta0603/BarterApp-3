import React, { Component } from 'react';
import { StyleSheet, Text, View ,TextInput,TouchableOpacity, Alert,Modal,ScrollView,KeyboardAvoidingView} from 'react-native';
import firebase from 'firebase'
export default class LoginScreen extends Component {
    constructor (){
        super();
        this.state={
            emailId:'',
            password:'',
            isVisible : false,
            firstName : "",
            lastName : "",
            mobileNumber:"",
            address : "",
            confirmPassword : ""
        }
    }

    userSignUp=(emailId,password)=> {
        firebase.auth().createUserWithEmailAndPassword(emailId,password)
        .then((response)=>{
            return Alert.alert('User added sucessfully')
        })
        .catch(function(error){
            var errorCode=error.code;
            var erorMessage=error.message;
            return Alert.alert(errorMessage)
    })
    }

    userSignUp = (emailId, password,confirmPassword) =>{
        if(password !== confirmPassword){
            return Alert.alert("password doesn't match\nCheck your password.")
        }else{
          firebase.auth().createUserWithEmailAndPassword(emailId, password)
          .then((response)=>{
            db.collection('users').add({
              first_name:this.state.firstName,
              last_name:this.state.lastName,
              mobile_number:this.state.mobileNumber,
              emailId:this.state.emailId,
              address:this.state.address
            }) 
            return  Alert.alert(
                'User Added Successfully',
                '',
                [
                  {text: 'OK', onPress: () => this.setState({"isVisible" : false})},
                ]
            );
         })
         .catch(function(error) {
           // Handle Errors here.
           var errorCode = error.code;
           var errorMessage = error.message;
           return Alert.alert(errorMessage)
         });
       }
   
     }
     showModal = ()=>(
        <Modal
          animationType="fade"
          transparent={true}
          visible={this.state.isVisible}
          >
          <View style={styles.modalContainer}>
            <ScrollView style={{width:'100%'}}>
              <KeyboardAvoidingView style={{flex:1,justifyContent:'center', alignItems:'center'}}>
              <Text
                style={{justifyContent:'center', alignSelf:'center', fontSize:30,color:'orange',margin:50}}
                >Registration</Text>
              <TextInput
                style={styles.registration}
                placeholder ={"First Name"}
                maxLength ={8}
                onChangeText={(text)=>{
                  this.setState({
                    firstName: text
                  })
                }}
              />
              <TextInput
                style={styles.registration}
                placeholder ={"Last Name"}
                maxLength ={8}
                onChangeText={(text)=>{
                  this.setState({
                    lastName: text
                  })
                }}
              />
              <TextInput
                style={styles.registration}
                placeholder ={"Mobile Number"}
                maxLength ={10}
                keyboardType={'numeric'}
                onChangeText={(text)=>{
                  this.setState({
                    mobileNumber: text
                  })
                }}
              />
              <TextInput
                style={styles.registration}
                placeholder ={"Address"}
                multiline = {true}
                onChangeText={(text)=>{
                  this.setState({
                    address: text
                  })
                }}
              />
              <TextInput
                style={styles.registration}
                placeholder ={"Username"}
                keyboardType ={'email-address'}
                onChangeText={(text)=>{
                  this.setState({
                    username: text
                  })
                }}
              /><TextInput
                style={styles.registration}
                placeholder ={"Password"}
                secureTextEntry = {true}
                onChangeText={(text)=>{
                  this.setState({
                    password: text
                  })
                }}
              /><TextInput
                style={styles.registration}
                placeholder ={"Confrim Password"}
                secureTextEntry = {true}
                onChangeText={(text)=>{
                  this.setState({
                    confirmPassword: text
                  })
                }}
              />
              <View style={styles.modalBackButton}>
                <TouchableOpacity
                  style={styles.registerButton}
                  onPress={()=>
                    this.userSignUp(this.state.username, this.state.password, this.state.confirmPassword)
                  }
                >
                <Text style={styles.registerButtonText}>Register</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.modalBackButton}>
                <TouchableOpacity
                  style={styles.cancelButton}
                  onPress={()=>this.setState({"isVisible":false})}
                >
                <Text style={{color:'orange'}}>Cancel</Text>
                </TouchableOpacity>
              </View>
              </KeyboardAvoidingView>
            </ScrollView>
          </View>
        </Modal>
      )
    render (){
        return(
            <View style={styles.container}>
               <View style={styles.profileContainer}>
        <Image style={{ width: 180, height: 100 }} source={require("../assets/AppLogo.png")} />
          <Text style={styles.title}>Barter App</Text>
        </View>

                <View> 
                    <TextInput 
                    
                    style={styles.loginBox}
                    placeHolder='abc@example.com'
                    placeholderTextColor = 'orange'
                    keyboardType='email-address'
                    onChangeText={(text)=>{
                        this.setState({
                            emailId:text
                        })
                    }}
                    />
                         <TextInput 
                    style={styles.loginBox}
                    secureTextEntry={true}
                    placeHolder='enter Password'
                    onChangeText={(text)=>{
                        this.setState({
                            password:text
                        })
                    }}
                    />

                    <TouchableOpacity 
                    style={styles.button}
                    onPress={()=>{this.userLogin(this.state.emailIdId ,this.state.password)}}>
                        <Text style={styles.buttonText}>login</Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                    style={styles.button}
                    onPress={()=>{this.userSignUp(this.state.emailIdId ,this.state.password)}}>
                        <Text style={styles.buttonText}>signUp</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        flex:1,
        backgroundColor:'#feeob2'
    },
    title :{
      fontSize:65,
      fontWeight:'300',
      paddingBottom:30,
      color : '#e1a1a7'
    },
    profileContainer:{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
    },
    loginBox:{
      width: 300,
      height: 40,
      borderBottomWidth: 1.5,
      borderColor : 'e1a107',
      fontSize: 20,
      margin:10,
      paddingLeft:10
    },
    button : {
        width:300,
        height:50,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:25,
        borderColor : 'orange',
        backgroundColor:"white",
        shadowColor: "#000",
    },
    buttonText : {
        color:'red',
        fontWeight:'200',
        fontSize:20
    },
    registration:{
      width:"75%",
      height:35,
      alignSelf:'center',
      borderColor:'#e1a107',
      borderRadius:10,
      borderWidth:1,
      marginTop:20,
      padding:10
    },
    modalContainer:{
        flex:1,
        borderRadius:20,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:"#ffff",
        marginRight:30,
        marginLeft : 30,
        marginTop:80,
        marginBottom:80,
      }, registerButton:{
        width:200,
        height:40,
        alignItems:'center',
        justifyContent:'center',
        borderWidth:1,
        borderRadius:10,
        marginTop:30
      },
      registerButtonText:{
        color:'#ff5722',
        fontSize:15,
        fontWeight:'bold'
      },
      cancelButton:{
        width:200,
        height:30,
        justifyContent:'center',
        alignItems:'center',
        marginTop:5,
      },
})