import React, { Component } from 'react';
import Select from 'react-select';

const options = [
    {value: 'dog', label: 'Dog'},
    {value: 'cat', label: 'Cat'},
    {value: 'horse', label: 'Horse'},
    {value: 'snake', label: 'Snake'},
];

class SelectItem extends Component {
    state = {
        selectedOptions: [],
    }

    handleChange = (selectedOptions) => {
        this.setState({selectedOptions});
    }

    render() {
        const { selectedOptions } = this.state;

        return (
            <React.Fragment>
                <Select 
                    isMulti
                    value={selectedOptions}
                    onChange={this.handleChange}
                    options={options}
                />
                {/* {selectedOptions.map(o => <p>{o.value}</p>)} */}
            </React.Fragment>
        );
    }
}

export default SelectItem;