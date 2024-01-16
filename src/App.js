import './App.css';
import React, { Component} from 'react';
import Hero from './components/Hero';
import ErrorBoundary from './components/ErrorBoundary';




class App extends Component {
  render() {
    return (
      <div className='App'>
        <ErrorBoundary>
        <Hero heroName="Batman"></Hero>
        </ErrorBoundary>
        <ErrorBoundary>
    <Hero heroName="Superman"></Hero>
    </ErrorBoundary>
    <ErrorBoundary>
    <Hero heroName="Joker"></Hero>
      </ErrorBoundary>
    
    
      </div>
    )
  }
}

export default App
