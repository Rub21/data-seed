import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import amber from '@material-ui/core/colors/amber';

const theme = createMuiTheme({
  palette: {
    primary: amber,
    secondary: {
      main: '#f44336'
    }
  }
});

class App extends Component {
  render() {
    return <MuiThemeProvider theme={theme}>{this.props.children}</MuiThemeProvider>;
  }
}

export default App;
