import React, {Component} from 'react';
import Datalist from '../components/datalist';
import axios from 'axios';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import '../style/search_panel.css';
// import Input from 'react-input-datalist';


const url = 'http://localhost:5000/sizeConvertorTest';

export default class SearchPanel extends Component{

  constructor(props){
    super(props);
    this.state={
      brand:'', brandOptions:'', gender:'',
      size:'',  sizeOptions:'', targetBrand:'', targetBrandOptions:'',
      targetSize:''};


    this.brandHandler = this.brandHandler.bind(this);
    this.brandOptionsHandler = this.brandOptionsHandler.bind(this);
    this.sizeHandler = this.sizeHandler.bind(this);
    this.sizeOptionsHandler = this.sizeOptionsHandler.bind(this);
    this.genderHandler = this.genderHandler.bind(this);
    this.targetBrandHandler = this.targetBrandHandler.bind(this);
    this.targetBrandOptionsHandler = this.targetBrandOptionsHandler.bind(this);
    this.convertHandler = this.convertHandler.bind(this);
  }


  brandHandler(brand){
    this.setState({brand});
    this.brandOptionsHandler();
  };

  brandOptionsHandler(){
    axios.post(url, {
      type: 'brand',
      term: this.state.brand
    }).then((response) => {return response.data.map((option) => {
      return {value: option.brand};
    })}).then((options) => this.setState({brandOptions: options}));
  }

  genderHandler(gender){
    console.log("genderHandler is called");
    this.setState({gender});
  };

  sizeHandler(size){
    this.setState({size: size});
    this.sizeOptionsHandler();
  };

  sizeOptionsHandler(){
    axios.post(url, {
      type: 'size',
      brand: this.state.brand,
      gender:this.state.gender
    }).then((response) => {
      return response.data.map((option) => {
        if(this.state.gender == 'M'){
          return {value: option.bsize};
        }else{
          return {value: option.gsize};
        }

    })}).then((options) => this.setState({sizeOptions: options}));
  }

  targetBrandHandler(targetBrand){
    this.setState({targetBrand});
    this.targetBrandOptionsHandler();
  };

  targetBrandOptionsHandler(){
    axios.post(url, {
      type: 'brand',
      term: this.state.targetBrand
    }).then((response) => {return response.data.map((option) => {
      return {value: option.brand};
    })}).then((options) => this.setState({targetBrandOptions: options}));
  }

  convertHandler(){
    console.log('convertHandler is called');
    if(this.state.brand == ''){
      alert('Brand should not be null');
      return;
    }else if(this.state.gender == ''){
      alert('Gender should not be null');
      return;
    }else if(this.state.size == ''){
      alert('Size should not be null');
      return;
    }else if(this.state.targetBrand == ''){
      alert('Target brand should not be null');
      return;
    }
    axios.post('http://localhost:5000/sizeConvertor/', {
      brand: this.state.brand,
      size: this.state.size,
      gender: this.state.gender,
      targetBrand: this.state.targetBrand
    }).then((response)=>{
      console.log(response);
      if(response.data.length == 0){
        this.setState({targetSize: 'No size in this brand is found'});
      }else{
        if(this.state.gender == 'M'){
          this.setState({targetSize: response.data[0].bsize});
        }else{
          this.setState({targetSize: response.data[0].gsize});
        }
      }

    })
  }

  render(){
    return (
      <div className="search-panel">
        <h3>Search Panel</h3>
        <br />
        <div className="search-input">
          <h4>Brand:</h4>
          <Datalist className="search-input-datalist"
            listName="Brand"
            options= {this.state.brandOptions}
            inputHandler = {this.brandHandler}
            optionsHandler = {this.brandOptionsHandler}
            value={this.state.brand}
          />
        </div>
        <br />
        <div className="select">
          <h4>Gender:</h4>
          <Select className="select-select"
            name="Gender" value={this.state.gender}
            onChange={this.genderHandler}
            options={[
              {value: 'F', label: 'F'},
              {value: 'M', label: 'M'}
            ]} />
        </div>
        <br />
        <div className="search-input">
          <h4>Size:</h4>
          <Datalist className="search-input-datalist"
            listName="Size"
            options={this.state.sizeOptions}
            inputHandler = {this.sizeHandler}
            optionsHandler = {this.sizeOptionsHandler}
            value={this.state.size}
          />
        </div>
        <br />
        <div className="search-input">
          <h4>Target Brand:</h4>
          <Datalist className="search-input-datalist"
            listName="target-brand"
            options= {this.state.targetBrandOptions}
            inputHandler = {this.targetBrandHandler}
            optionsHandler = {this.targetBrandOptionsHandler}
            value={this.state.targetBrand}
          />
        </div>
        <div>
        <br />
        <div className="search-button">
          <input type="submit" value="Convert!" onClick = {this.convertHandler}/>
        </div>
        <br />
        <div className = "search-output">
        <Datalist className="search-output-datalist"
          listName="Target-Size" options={[{value: 'Addidas'}, { value: 'A076'}]}
          inputHandler = {this.sizeHandler} value={this.state.targetSize}/>
        </div>
        </div>
      </div>
    );
  }
}
