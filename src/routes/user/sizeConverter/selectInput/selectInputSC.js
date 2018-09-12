import React, { Component } from 'react';
import { SearchBar, EntryBackground, DisplayBar, ItemList, } from './style';
import { SmartImg } from '../style';

import entryBackground from '../img/SizeConverterEntryField.png';
import SCDropdownArrow from '../img/SCDropdownArrow.png';

class SelectInput extends Component {
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
                <DisplayBar> {this.props.selectedItem || ""}</DisplayBar>
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
                    <SmartImg params={['13%', '34%', '82%']} src={SCDropdownArrow} />
                    <SearchBar 
                            value={this.props.selectedItem || ""}
                            onFocus={this.listToggler} 
                            onChange={(e) => this.filterItems(e.target.value)}>
                    </SearchBar>
                    <ItemList open={this.state.open}>
                        {list}
                    </ItemList>
                </div>
            );
        }
            

        return (
            <div>
                <div>{this.props.entryName || "BRAND YOUR KNOW"}</div>
                <EntryBackground src={entryBackground}/>
                {input}
            </div>
        );
    };
};

export default SelectInput;