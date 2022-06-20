import './App.css';
import Title from './components/Title';
import Button from './components/Button';
import Contener from './components/Contener';
function App() {
  return (
    <div className="App">
      <h1>Bài 1 and Bài 2</h1>
      {/* bài 1 and bài 2 */}
      <Title title='save' />
      <Button button='save' />
      <Title title='cancel' />
      <Button button='cancel' />
      <Title title='renting' />
      <Button button='renting' />
      <Title title='buy' />
      <Button button='buy' />
      <Title title='set auction' />
      <Button button='set auction' />
      {/* bài 3 */}
      <h1>Bài 3</h1>
      <Contener
        h4='A Simple Component'

        p='React components implement a render() method that takes input data and returns what to display. 
      This example uses an XML-like syntax called JSX. 
      Input data that is passed into the component can be accessed by render() via this.props.'

        h4right='LIVE JSX EDITOR'

        pright='class HelloMessage extends React.Component {
              render() { 
                return <div>Hello {this.props.name}</div>;
              }
            }
            
            root.render(<HelloMessage name="Taylor" />);'
      />
      <Contener
        h4='A Simple Component'

        p='React components implement a render() method that takes input data and returns what to display. 
      This example uses an XML-like syntax called JSX. 
      Input data that is passed into the component can be accessed by render() via this.props.'

        h4right='LIVE JSX EDITOR'

        pright='class HelloMessage extends React.Component {
              render() { 
                return <div>Hello {this.props.name}</div>;
              }
            }
            
            root.render(<HelloMessage name="Taylor" />);'
      />
      <Contener
        h4='A Simple Component'

        p='React components implement a render() method that takes input data and returns what to display. 
      This example uses an XML-like syntax called JSX. 
      Input data that is passed into the component can be accessed by render() via this.props.'

        h4right='LIVE JSX EDITOR'

        pright='class HelloMessage extends React.Component {
              render() { 
                return <div>Hello {this.props.name}</div>;
              }
            }
            
            root.render(<HelloMessage name="Taylor" />);'
      />
      <Contener
        h4='A Simple Component'

        p='React components implement a render() method that takes input data and returns what to display. 
      This example uses an XML-like syntax called JSX. 
      Input data that is passed into the component can be accessed by render() via this.props.'

        h4right='LIVE JSX EDITOR'

        pright='class HelloMessage extends React.Component {
              render() { 
                return <div>Hello {this.props.name}</div>;
              }
            }
            
            root.render(<HelloMessage name="Taylor" />);'
      />
      <Contener
        h4='A Simple Component'

        p='React components implement a render() method that takes input data and returns what to display. 
      This example uses an XML-like syntax called JSX. 
      Input data that is passed into the component can be accessed by render() via this.props.'

        h4right='LIVE JSX EDITOR'

        pright='class HelloMessage extends React.Component {
              render() { 
                return <div>Hello {this.props.name}</div>;
              }
            }
            
            root.render(<HelloMessage name="Taylor" />);'
      />
    </div>
  );
}

export default App;
