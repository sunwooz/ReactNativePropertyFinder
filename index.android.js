var React = require('react');
var ReactNative = require('react-native');

var {
  Text,
  Navigator,
  ScrollView,
  View,
  TextInput,
  Button,
  Image
} = ReactNative;

var styles = ReactNative.StyleSheet.create({
  text: {
    color: 'black',
    fontSize: 15,
    marginBottom: 40,
    textAlign: 'center'
  },
  description: {
    marginBottom: 20,
    fontSize: 18,
    textAlign: 'center',
    color: '#656565'
  },
  container: {
    padding: 30,
    marginTop: 65,
    alignItems: 'center'
  },
  image: {
    width: 400,
    height: 200,
    marginBottom: 20
  }
});

var First = React.createClass({
  render: function() {
    return (
        <View>
          <Image style={styles.image} source={require('./images/rsz_monkey.jpg')} />
          <Text style={styles.text}>Are you looking for a house?</Text>
          <Text style={styles.text}>We will help you find it!</Text>
          <TextInput />
          <Button
            title="Learn More"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
          />
        </View>
    );
  }
})

var Second = React.createClass({
  render: function() {
    return <Text style={styles.text}>Second Page</Text>;
  }
})

var PropertyFinderApp = React.createClass({
  render: function() {
    return (
      <Navigator initialRoute={{
        title: 'first',
        index: 0
      }}
    )
  }
})

ReactNative.AppRegistry.registerComponent('PropertyFinder', function() { return PropertyFinderApp });