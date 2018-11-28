import React,{Component} from 'react'
import {withRouter} from 'react-router-dom'
import sxxImg from '../../images/sxxbanner.png'
import GZH from '../../images/publicNum.png'
class About extends Component{
    componentDidMount(){
        console.log(this.props)
    }
    render() {
        return(
            <div className='about-container'>
                <div className="about-banner">
                    <img src={sxxImg} alt=""/>
                </div>
                <div className="about-position">
                    <div className="about-content">
                        <div className="content-box">
                            <div className="content-title">
                                <div className="title-text">公司简介</div>
                                <div className="title-description">COMPANY INTRODUCTION</div>
                            </div>
                            <div className="desContent">
                                思学行教育科技有限公司是一家专注于新一代信息技术教育（包括：区块链、AI人工智能、大数据、智能物联网等）的培训机构，致力于培养当前企业和社会亟需的新一代信息技术应用型人才，是一家集人才培养、高校科研项目落地、企业专业人才定制培训为一体的教育培训机构。机构采用模块制课程教学，旨在帮助各行各业的求知者，追踪新一代信息技术应用与投资前沿，把握新时代的战略机遇。
                            </div>
                        </div>
                        <div className="content-box">
                            <div className="content-title">
                                <div className="title-text">平台背景</div>
                                <div className="title-description">CORPORATE BACKGROUND</div>
                            </div>
                            <div className="desContent">
                                思学行平台背景由“成都市大数据协会区块链专委会”指导，“电子科技大学网络空间安全中心”发起，清华大学、浙江大学、四川大学、西南财经大学等多家高校及顶尖企业提供教学资源支持。
                            </div>
                        </div>
                        <div className="banner-middle"></div>
                        <div className="bottom-content">
                            <div className="content-left">
                                <div className="list">
                                    <div className="title">联系地址</div>
                                    <div className="description">成都高新区吉泰五路88号香年广场3栋14楼2号</div>
                                </div>
                                <div className="list">
                                    <div className="title">报名咨询</div>
                                    <div className="description">客服：400-XXX-XXXX</div>
                                    <div className="description">邮箱：sxx@studytodo.com</div>
                                </div>
                                <div className="list">
                                    <div className="title">企业内训 / 商务合作</div>
                                    <div className="description">电话：028—85253153  </div>
                                    <div className="description">邮箱：sxx@studytodo.com</div>
                                </div>
                            </div>
                            <div className="content-right">
                                <div className="title">微信公众号</div>
                                <img src={GZH} alt=""/>
                                <div className="text">思学行教育公众号</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(About)