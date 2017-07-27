import React, {Component}  from 'react';
import Header from '../Header';
import PhotoList from '../PhotoList';

class App extends Component {
    render() {
        return (
            <div id="photo-container" className="container-fluid">
                <Header />
                <PhotoList />
            </div>
        )
    }

}

export default App;