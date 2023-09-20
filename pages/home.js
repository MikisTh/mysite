
class Foo extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    console.log('Clicado');
  }
  render() {
    return <button onClick={this.handleClick}>Clique em mim!</button>;
  }
}
