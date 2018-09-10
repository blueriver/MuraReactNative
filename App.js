import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ConditionalRender, Loading } from './components/componentIndex'
import Mura from 'mura.js'

export default class App extends React.Component {
	constructor(){
		 super();
		 this.state={
			 loading:true,
			 content:''
		 };

		 Mura.init({
			 rootpath:'http://localhost:8080',
			 siteid:'default'
		 });

	}

	componentWillMount = () => {
    this.getContent().then((content) => {
			this.setState({
				content:content,
				loading:false
			});
		})
  }

	getContent(){
		return new Promise((success,failure)=>{

			Mura.getFeed('content')
				.sort('random')
				.getQuery()
				.then((collection)=>{
					success(collection.item(0).getAll());
				});

		});
	}

  render() {
    return (
			<ConditionalRender condition={!this.state.loading} FallbackComponent={Loading}>
	      <View style={styles.container}>
	        <Text>{this.state.content.title}</Text>
	      </View>
			</ConditionalRender>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
