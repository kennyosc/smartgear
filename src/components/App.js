import React,{Component} from 'react'
import {BrowserRouter,Route} from 'react-router-dom'

import Header from './Header.js'

class App extends Component{
    render(){
        return(
            <BrowserRouter>
            <div>
                <Header/>
                <div className="container">
                    <Route/>
                </div>
                
            </div>
            </BrowserRouter>
           
        )
    }
}

export default App