import {StyleSheet} from 'react-native';

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',    
    alignItems:'center',
  },

  appLogo:{
    maxWidth:310,
    maxHeight:310,
  },

  loginContainer: {
    display:'flex',
    flexWrap: 'nowrap',
    alignItems:'center',
    marginTop:-42
  },

  loginTextInput: {
    display:'flex',
    flexDirection:'row',
    margin:20,
    borderBottomWidth: 1,
    borderColor: 'gray',
    paddingBottom: 12,
  },

  textInputText: {
    fontSize: 15,
    width: 200,
  },

  textInputImage: {
    maxWidth:35,
    maxHeight: 35,
    marginRight: 23.6,
  },

  button: {
    alignItems: "center",
    paddingVertical: 15,
    marginTop: 10,
    borderRadius: 30,
    width: 280,
    backgroundColor:'#1B76FF',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color:'white'
  },
  
  tagsCard: {
    width: 150,
    height: 105,
    margin: 10,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: 'grey',
    alignItems: 'center',
  },
  textImageTag: {
      display:'flex',
      flexDirection: 'row',
      flexWrap:'nowrap',
      padding: 11,
      alignItems:'center',
  },
  textImage: {
      fontSize: 25,
      marginLeft:8,
  },
  cardImage: {
      maxWidth:30,
      maxHeight: 30,
  },
  textTag: {
      fontSize: 10,
      width: 120,
  },

  userInfoContainer: {
    display: 'flex',
    flexDirection:'row',
  },
  userInfoImage: {
    width: 60,
    height: 60,
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 100,
    marginRight: 8
  },
  userInfoTextContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignSelf:'center',
  },
  feedButtonsContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  feedButtonContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: 70,
  },
  feedButtonsIcons: {
    width: 30,
    height: 30,
  },
  feedButtonsTextContainer: {
    marginLeft: 5,
  },
  feedIcons: {
    flex: 1,
    resizeMode: 'cover',
  },
  
});