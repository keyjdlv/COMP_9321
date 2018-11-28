import React, { Component } from 'react';
import styles from './DottedBox.css';
const API = 'http://127.0.0.1:5000/application_predict/';


class App extends Component{
	constructor(props) {
		super(props);	
		  
	  }
	
	  	

   render(){
	
	
	
      return(
         <div className={styles.back}>
            
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
            <Form/>
			<br />
			<br />
            

         </div>
      );
   }
}
class Form extends Component{
	constructor(props) {
		super(props);
		this.state = {
		  values: [
			{ name: 'ART_AND_DESIGN', id: 1 },
			{ name: 'AUTO_AND_VEHICLES', id: 2},
			{ name: 'BEAUTY', id: 3,genre: ['BEAUTY'] },
			{ name: 'BOOKS_AND_REFERENCE', id: 4},
			{ name: 'BUSINESS', id: 5 },
			{ name: 'COMICS', id: 6},
			{ name: 'COMMUNICATION', id: 7 },
			{ name: 'DATING', id: 8},
			{ name: 'EDUCATION', id: 9},
			{ name: 'ENTERTAINMENT', id: 10},
			{ name: 'EVENTS', id: 11 },
			{ name: 'FAMILY', id: 12},
			{ name: 'FINANCE', id: 13},
			{ name: 'FOOD_AND_DRINK', id: 14},
			{ name: 'GAME', id: 15},
			{ name: 'HEALTH_AND_FITNESS', id: 16 },
			{ name: 'HOUSE_AND_HOME', id: 17 },
			{ name: 'LIBRARIES_AND_DEMO', id: 18},
			{ name: 'LIFESTYLE', id: 19},
			{ name: 'MAPS_AND_NAVIGATION', id: 20 },
			{ name: 'MEDICINE', id: 21},
			{ name: 'NEWS_AND_MAGAZINES', id: 22},
			{ name: 'PARENTING', id: 23},
			{ name: 'PERSONALIZATION', id: 24},
			{ name: 'PHOTOGRAPHY', id: 25},
			{ name: 'PRODUCTIVITY', id: 26},
			{ name: 'SHOPPING', id: 27},
			{ name: 'SOCIAL', id: 28},
			{ name: 'SPORTS', id: 29},
			{ name: 'TOOLS', id: 30},
			{ name: 'TRAVEL_AND_LOCAL', id: 31},
			{ name: 'VIDEO_PLAYERS', id: 32},
			{ name: 'WEATHER', id: 33}			
		  ],
		  genre_values:[
			{ name:'Art & Design', id: 0},
{ name: 'Art & Design;Pretend Play', id: 1},
{ name: 'Art & Design;Creativity', id: 2},
{ name: 'Art & Design;Action & Adventure', id: 3},
{ name: 'Auto & Vehicles', id: 4},
{ name: 'Beauty', id: 5},
{ name: 'Books & Reference', id: 6},
{ name: 'Business', id: 7},
{ name: 'Comics', id: 8},
{ name: 'Comics;Creativity', id: 9},
{ name: 'Communication', id: 10},
{ name: 'Dating', id: 11},
{ name: 'Education;Education', id: 12},
{ name: 'Education', id: 13},
{ name: 'Education;Creativity', id: 14},
{ name: 'Education;Music & Video', id: 15},
{ name: 'Education;Action & Adventure', id: 16},
{ name: 'Education;Pretend Play', id: 17},
{ name: 'Education;Brain Games', id: 18},
{ name: 'Entertainment', id: 19},
{ name: 'Entertainment;Music & Video', id: 20},
{ name: 'Entertainment;Brain Games', id: 21},
{ name: 'Entertainment;Creativity', id: 22},
{ name: 'Events', id: 23},
{ name: 'Finance', id: 24},
{ name: 'Food & Drink', id: 25},
{ name: 'Health & Fitness', id: 26},
{ name: 'House & Home', id: 27},
{ name: 'Libraries & Demo', id: 28},
{ name: 'Lifestyle', id: 29},
{ name: 'Lifestyle;Pretend Play', id: 30},
{ name: 'Adventure;Action & Adventure', id: 31},
{ name: 'Arcade', id: 32},
{ name: 'Casual', id: 33},
{ name: 'Card', id: 34},
{ name: 'Casual;Pretend Play', id: 35},
{ name: 'Action', id: 36},
{ name: 'Strategy', id: 37},
{ name: 'Puzzle', id: 38},
{ name: 'Sports', id: 39},
{ name: 'Music', id: 40},
{ name: 'Word', id: 41},
{ name: 'Racing', id: 42},
{ name: 'Casual;Creativity', id: 43},
{ name: 'Casual;Action & Adventure', id: 44},
{ name: 'Simulation', id: 45},
{ name: 'Adventure', id: 46},
{ name: 'Board', id: 47},
{ name: 'Trivia', id: 48},
{ name: 'Role Playing', id: 49},
{ name: 'Simulation;Education', id: 50},
{ name: 'Action;Action & Adventure', id: 51},
{ name: 'Casual;Brain Games', id: 52},
{ name: 'Simulation;Action & Adventure', id: 53},
{ name: 'Educational;Creativity', id: 54},
{ name: 'Puzzle;Brain Games', id: 55},
{ name: 'Educational;Education', id: 56},
{ name: 'Card;Brain Games', id: 57},
{ name: 'Educational;Brain Games', id: 58},
{ name: 'Educational;Pretend Play', id: 59},
{ name: 'Entertainment;Education', id: 60},
{ name: 'Casual;Education', id: 61},
{ name: 'Music;Music & Video', id: 62},
{ name: 'Racing;Action & Adventure', id: 63},
{ name: 'Arcade;Pretend Play', id: 64},
{ name: 'Role Playing;Action & Adventure', id: 65},
{ name: 'Simulation;Pretend Play', id: 66},
{ name: 'Puzzle;Creativity', id: 67},
{ name: 'Sports;Action & Adventure', id: 68},
{ name: 'Educational;Action & Adventure', id: 69},
{ name: 'Arcade;Action & Adventure', id: 70},
{ name: 'Entertainment;Action & Adventure', id: 71},
{ name: 'Puzzle;Action & Adventure', id: 72},
{ name: 'Strategy;Action & Adventure', id: 73},
{ name: 'Music & Audio;Music & Video', id: 74},
{ name: 'Health & Fitness;Education', id: 75},
{ name: 'Adventure;Education', id: 76},
{ name: 'Board;Brain Games', id: 77},
{ name: 'Board;Action & Adventure', id: 78},
{ name: 'Board;Pretend Play', id: 79},
{ name: 'Casual;Music & Video', id: 80},
{ name: 'Role Playing;Pretend Play', id: 81},
{ name: 'Entertainment;Pretend Play', id: 82},
{ name: 'Video Players & Editors;Creativity', id: 83},
{ name: 'Card;Action & Adventure', id: 84},
{ name: 'Medical', id: 85},
{ name: 'Social', id: 86},
{ name: 'Shopping', id: 87},
{ name: 'Photography', id: 88},
{ name: 'Travel & Local', id: 89},
{ name: 'Travel & Local;Action & Adventure', id: 90},
{ name: 'Tools', id: 91},
{ name: 'Tools;Education', id: 92},
{ name: 'Personalization', id: 93},
{ name: 'Productivity', id: 94},
{ name: 'Parenting', id: 95},
{ name: 'Parenting;Music & Video', id: 96},
{ name: 'Parenting;Education', id: 97},
{ name: 'Parenting;Brain Games', id: 98},
{ name: 'Weather', id: 99},
{ name: 'Video Players & Editors', id: 100},
{ name: 'Video Players & Editors;Music & Video', id: 101},
{ name: 'News & Magazines', id: 102},
{ name: 'Maps & Navigation', id: 103},
{ name: 'Health & Fitness;Action & Adventure', id: 104},
{ name: 'Educational', id: 105},
{ name: 'Casino', id: 106},
{ name: 'Adventure;Brain Games', id: 107},
{ name: 'Trivia;Education', id: 108},
{ name: 'Lifestyle;Education', id: 109},
{ name: 'Books & Reference;Creativity', id: 110},
{ name: 'Books & Reference;Education', id: 111},
{ name: 'Puzzle;Education', id: 112},
{ name: 'Role Playing;Education', id: 113},
{ name: 'Role Playing;Brain Games', id: 114},
{ name: 'Strategy;Education', id: 115},
{ name: 'Racing;Pretend Play', id: 116},
{ name: 'Communication;Creativity', id: 117},
{ name: 'February 11; 2018', id: 118},
{ name: 'Strategy;Creativity', id: 119},

			


		  ],
		  content_values: [
			{ name: 'Everyone', id: 1 },
			{ name: 'Everyone 10+', id: 2 },
			{ name: 'Teen', id: 3 },
			{ name: 'Mature 17+', id: 4},	
			
			],
			type_values: [
				{ name: 'Free', id: 0 },
				{ name: 'Paid', id: 1 }
			
				
				],
				predict_install: [],
				result_sim_app:[],
				
		  
		
		};
		this.handleSubmit = this.handleSubmit.bind(this);
		}
		handleSubmit(event) {
			event.preventDefault();
			const data = new FormData(event.target);
			//console.log(event.target.Content.value);
			const DEFAULT_QUERY=event.target.Category.value+'/'+event.target.Genres.value+'?content='+event.target.Content.value+'&'+'price='+event.target.Price.value+'&size='+event.target.Size.value;
      //console.log(DEFAULT_QUERY);
			fetch(API + DEFAULT_QUERY)
		  .then(response => response.json())
			.then(data => this.setState({ predict_install: data.predict_install,
				result_sim_app: data.result_sim_app}));
			console.log(this.state.predict_install);
			
			
			
		}
	  
	render(){
		const { predict_install } = this.state;
		const { result_sim_app } = this.state;

		let optionTemplate = this.state.values.map(v => (
			<option value={v.name}>{v.name}</option>
		  ));
		let content_optionTemplate = this.state.content_values.map(v => (
			<option value={v.id}>{v.name}</option>
		  ));
		  let genre_optionTemplate = this.state.genre_values.map(v => (
			<option value={v.name}>{v.name}</option>
			));
			let type_optionTemplate = this.state.type_values.map(v => (
				<option value={v.name}>{v.name}</option>
				));
		

		
		
		return(
		<div style={{textAlign:"center"}}>
		<div className={styles.container}>
  <div className={styles.signup}>
     <form onSubmit={this.handleSubmit}>
	 Category:<select id="Category" value={this.state.value}>{optionTemplate}</select><br/><br/>
	 Genres:<select id="Genres">{genre_optionTemplate}</select><br /><br />
	 Content Rating:<select id="Content" name="Content" value={this.state.content_value}>{content_optionTemplate}</select><br /><br />
	 Type:<select id="Type" name="Type" value={this.state.type_value}>{type_optionTemplate}</select><br /><br />
	 Price:<input id="Price" name="Price" type="text"/>
	 <br /><br />
	 Size:<input id="Size" name="Size" type="text"/><br /><br />
       
       <input type='submit' placeholder='SUBMIT' />
     </form>
  </div>
  <div class='whysign'>
    <h1>Downloads Prediction</h1>
    <p>Your App Will Have {predict_install} Downloads<br/>
	   Similar Apps {result_sim_app}
	</p>
    
  </div>
</div>

		
			
			
			
			
	  </div>
			

			);
	}
}




export default App;