import Taro, { Component } from '@tarojs/taro'
import { View, Text, Icon } from '@tarojs/components'
import './index.less'

export default class Index extends Component {
    config = {
        navigationBarTitleText: '首页'
    }

    componentWillMount() { }

    componentDidMount() { }

    componentWillUnmount() { }

    componentDidShow() { }

    componentDidHide() { }

    render() {
        return (
            <View className='cmr-box'>
                <View className="cmr-titleBox">
                    <Text className="cmr-title">每天听本书</Text>
                    <a className="cmr-moreBox" href="http://wap.cmread.com/r/p/ycindex.jsp;jsessionid=E3CA3B9BE228139F1784082BA08FBF82.8ngFwny86.2.0?ln=11_483964__19_1_&purl=%2Fr%2Fp%2Findex.jsp%3Bjsessionid%3DE3CA3B9BE228139F1784082BA08FBF82.8ngFwny86.2.0&vt=3">更多 ></a>
                </View>
                <View className="cmr-bookBox">
                    <figure className="cmr-imgBox">
                        <img src="http://cdn.cmread.com/coverFile/454025485/5527c1c8ae93e08405538b49b1bb84059905b64a6da2/cover180240.jpg" />
                    </figure>
                    <View className="cmr-bookInfos">
                        <View className="cmr-bookName">人民的名义书名最大字符数展现人民的名义书名最大字符数展现</View>
                        <Text className="cmr-bookDesc" style={{'-webkit-box-orient': 'vertical'}}>
                        一位国家部委的项目处长呗人举报受贿千万，党最高人民检察院反贪总局侦一位国家部委的项目处长呗人举报受贿千万，党最高人民检察院反贪总局侦一位国家部委的项目处长呗人举报受贿千万，党最高人民检察院反贪总局侦
                        </Text>
                    </View>
                </View>
            </View>
        )
    }
}

