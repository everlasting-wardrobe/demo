import React, { Component } from 'react';
import './selectInput.css';
import entryBackground from '../img/SizeConverterEntryField.png';
import SCDropdownArrow from '../img/SCDropdownArrow.png';

class selectInput extends Component {
    state = {
        open: false,
        brandList: this.props.listName,
    }

    listToggler = () => {
        this.setState({
            open: true,
        })
    }

    selectItem = (item) => {
        this.props.selector(item);
        this.setState({open: false});
    }

    filterItems = (keywords) => {
        this.props.selector(keywords);
    }

    render() {
        let input = null;
        if (this.props.displayOnly) {
            input = (
                <div className={"select-input-search-bar"}> {this.props.selectedItem || ""}</div>
            );
        } else {
            let filteredList = this.state.brandList;
            if (this.props.filterOn && this.props.selectedItem) {
                filteredList = this.state.brandList.filter(item => item.toLowerCase().indexOf(this.props.selectedItem.toLowerCase()) > -1);
            }
            const list = filteredList.map(
                item => (<div key={item} onClick={() => this.selectItem(item)}>{item}</div>)
            );
            input = (
                <div>
                    <img className={"select-input-dropdown-arrow"} src={SCDropdownArrow}/>
                    <input className={"select-input-search-bar"} 
                            value={this.props.selectedItem || ""}
                            onFocus={this.listToggler} 
                            onChange={(e) => this.filterItems(e.target.value)}>
                    </input>
                    <div className={["select-input-item-list", this.state.open? null: "select-input-hide-list"].join(" ")}>
                        {list}
                    </div>
                </div>
            );
        }
            

        return (
            <div className={"select-input-container"}>
                <div>{this.props.entryName || "BRAND YOUR KNOW"}</div>
                <img className={"select-input-entry-background"} src={entryBackground}/>
                {input}
            </div>
        );
    };
};

export default selectInput;