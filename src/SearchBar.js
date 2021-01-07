import { Component } from 'react';

class SearchBar extends Component {
    constructor() {
        super();
        this.state = {
            userSelection: '',
        };
    }

    handleInputChange = (e) => {
        this.setState({
            userSelection: e.target.value
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.functionAxiosCall(this.state.userSelection);
    }

    render() {
        return (
            <form>
                <label htmlFor="images-dropdown">Search</label>
                <div className="dropdown flex">
                    <select
                        name="images-dropdown"
                        id="images-dropdown"
                        onChange={this.handleInputChange}
                        value={this.state.userSelection}>
                        <option value="" disabled>Where to?</option>
                        <option value="travel">I hate Covid, take me anywhere</option>
                        <option value="vancouver">Vancouver</option>
                        <option value="new york">New York</option>
                        <option value="hawaii">Hawaii</option>
                        <option value="california">California!</option>
                        <option value="greece">Greece</option>
                        <option value="iceland">Iceland</option>
                        <option value="waves beach">I want to go surfing</option>
                        <option value="ski mountain">I want to go skiing</option>
                        <option value="festival">I just wanna party</option>
                    </select>
                    <button className="dropdown-btn"
                        onClick={this.handleSubmit}
                    >Take me there</button>
                </div>
            </form>
        )
    }
}


export default SearchBar;