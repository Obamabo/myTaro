import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import Index from './pages/index'
import TodoList from './pages/nerv';

import './app.less'

class App extends Component {
  config = {
    pages: [
      'pages/index/index',
      'pages/nerv/index',
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    }
  }

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentCatchError () {}

  render () {
    return (
      <View>
        <Index />
        <TodoList />
      </View>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
