import React,{Component,Fragment} from 'react'
import Swiper from 'react-id-swiper';
import connect from "react-redux/es/connect/connect";
import {withRouter} from 'react-router-dom'
import * as actionCreators from './store/actionCreators'
import Self from './self.js'
import University from './university.js'
import Enterprise from './enterprise.js'
import Data1 from '../../images/largeData/data1.png'
import Data2 from '../../images/largeData/data2.png'
import Data3 from '../../images/largeData/data3.png'
import DataTitle from '../../images/largeData/datatitle.png'
import { CSSTransition } from 'react-transition-group';
import baomingImg from '../../images/home/baoming.png'
const titleList=[0,1,2,3,4,5,6,7]
let timer;
    class Home extends Component{
    constructor(props){
        super(props)
        this.state={
            menuLeftShow: this.props.menuLeftShow,
            menuRightList: false,
            newsLeft: 1,
            pages:'',
            active:'Data1',
            list: ['Data1','Data2','Data3']
        }
        this.showMenuRight=this.showMenuRight.bind(this)
        this.hideMenuRight=this.hideMenuRight.bind(this)
    }

    showMenuRight(e){
        this.setState({
            menuRightList:true,
        })
    }
    hideMenuRight(){
        this.setState({
            menuRightList:null
        })
    }

    componentDidMount(){}

    render() {
        const params = {
            effect: 'cube',
            grabCursor: true,
            loop: true,
            autoplay: {
                delay: 2500,
                disableOnInteraction: false
            },
            cubeEffect: {
                shadow: true,
                slideShadows: true,
                shadowOffset: 20,
                shadowScale: 0.94
            },
            pagination: {
                el: '.swiper-pagination'
            }
        }
        let {menuLeftShow,menuRightList,newsLeft,pages,active} = this.state
        return(
            <Fragment>
                <div className="nav-menuDown-box">
                    <div className="inner-box" onMouseLeave={this.hideMenuRight}>
                        {/*{menuRightList?
                            <ul className="menu-popup" onMouseLeave={this.hideMenuRight}>
                                <li>
                                    <span></span><div className="popup-text">课程介绍</div>
                                </li>
                                <li>
                                    <span></span><div className="popup-text">就业薪资</div>
                                </li>
                                <li>
                                    <span></span><div className="popup-text">师资介绍</div>
                                </li>
                                <li>
                                    <span></span><div className="popup-text">视频资料</div>
                                </li>
                            </ul>
                        :null}*/}
                        {menuLeftShow?
                            <CSSTransition
                                in={true}
                                timeout={300}
                                appear={true}
                                classNames="bannerList"
                                unmountOnExit
                            >
                            <ul className="nav-menuDown">
                                <li onMouseOver={this.showMenuRight}>
                                    <h1 className='course-listbox'>
                                        区块链工程师
                                        <svg className='icon-svg'>
                                            <use xlinkHref='#icon-arrow-right-copy'></use>
                                        </svg>
                                    </h1>
                                    <span></span>
                                </li>
                                <li onMouseOver={this.showMenuRight}>
                                    <h1 className='course-listbox'>
                                        大数据
                                        <svg className='icon-svg'>
                                            <use xlinkHref='#icon-arrow-right-copy'></use>
                                        </svg>
                                    </h1>
                                    <span></span>
                                </li>
                                <li onMouseOver={this.showMenuRight}>
                                    <h1 className='course-listbox'>
                                        AI人工智能
                                        <svg className='icon-svg'>
                                            <use xlinkHref='#icon-arrow-right-copy'></use>
                                        </svg>
                                    </h1>
                                    <span></span>
                                </li>
                                <li onMouseOver={this.showMenuRight}>
                                    <h1 className='course-listbox'>
                                        新一代网络安全
                                        <svg className='icon-svg'>
                                            <use xlinkHref='#icon-arrow-right-copy'></use>
                                        </svg>
                                    </h1>
                                    <span></span>
                                </li>
                                <li onMouseOver={this.showMenuRight}>
                                    <h1 className='course-listbox'>
                                        云计算
                                        <svg className='icon-svg'>
                                            <use xlinkHref='#icon-arrow-right-copy'></use>
                                        </svg>
                                    </h1>
                                    <span></span>
                                </li>
                                <li onMouseOver={this.showMenuRight}>
                                    <h1 className='course-listbox'>
                                        智能物联网
                                        <svg className='icon-svg'>
                                            <use xlinkHref='#icon-arrow-right-copy'></use>
                                        </svg>
                                    </h1>
                                    <span></span>
                                </li>
                                <li onMouseOver={this.showMenuRight}>
                                    <h1 className='course-listbox'>
                                        全栈软件测试
                                        <svg className='icon-svg'>
                                            <use xlinkHref='#icon-arrow-right-copy'></use>
                                        </svg>
                                    </h1>
                                    <span></span>
                                </li>
                            </ul></CSSTransition>:null
                        }
                    </div>
                </div>
                <Swiper {...params}>
                    <div><img src={require("../../images/banner.png")} alt="区块链"/></div>
                    <div><img src={require("../../images/banner.png")} alt="区块链"/></div>
                    <div><img src={require("../../images/banner.png")} alt="区块链"/></div>
                    <div><img src={require("../../images/banner.png")} alt="区块链"/></div>
                </Swiper>
                <div className="home-container">
                    <div className="item1">
                        <div className="item1-position">
                            <div className="item1-list" onClick={()=>{this.handleBoxChange('self')}}>
                                <span className='span1'></span>
                                <div className="list-title">个人</div>
                                <div className="list-text">人才培养</div>
                            </div>
                            <div className="item1-list" onClick={()=>{this.handleBoxChange('university')}}>
                                <span className='span2'></span>
                                <div className="list-title">高校</div>
                                <div className="list-text">技术赋能</div>
                            </div>
                            <div className="item1-list" onClick={()=>{this.handleBoxChange('enterprise')}}>
                                <span className='span3'></span>
                                <div className="list-title">政企</div>
                                <div className="list-text">产业研发</div>
                            </div>
                            <div className="item1-list item-list">
                                <div className="item1-list-box">
                                    <i className='img1'></i>来校路线
                                </div>
                                <div className="item1-list-box fr">
                                    <i className='img2'></i>报名流程
                                </div>
                                <div className="item1-list-box" style={{marginTop:'4px'}}>
                                    <i className='img3'></i>学费价格
                                </div>
                                <div className="item1-list-box fr" style={{marginTop:'4px'}}>
                                    <i className='img4'></i>学员故事
                                </div>
                            </div>
                        </div>
                    </div>
                    {pages==''?
                    <div>
                        <div className="course">
                            <div className="course-position">
                                <div className="title" style={{width:'360px'}}>
                                    <span className='span'><span></span></span>
                                    <h1 className='text'>0元免费课程</h1>
                                    <span className='span'><span></span></span>
                                </div>
                                <s style={{height:'0',clear:'both',display:'block',overflow:'hidden'}}></s>
                                <div className="title-description">知识共享，做真正实用的公开课</div>
                                <div className="course-list">
                                    <div className="list-box">
                                        <div className="span-box">
                                            <span className='span1'></span>
                                        </div>
                                        <div className="content">
                                            <title className="course-title">私有区块链，我们一起GO</title>
                                            <div className="course-text">用Go语言实现一个区块链私有链</div>
                                            <div className="price"><span>￥0.00</span><s>原价￥99.00</s></div>
                                        </div>
                                    </div>
                                    <div className="list-box">
                                        <div className="span-box">
                                            <span className='span2'></span>
                                        </div>
                                        <div className="content">
                                            <title className="course-title">玩转数据结构 从入门到进阶</title>
                                            <div className="course-text">就看你会不会玩！</div>
                                            <div className="price"><span>￥0.00</span><s>原价￥99.00</s></div>
                                        </div>
                                    </div>
                                    <div className="list-box">
                                        <div className="span-box">
                                            <span className='span3'></span>
                                        </div>
                                        <div className="content">
                                            <title className="course-title">Spring Cloud微服务实战</title>
                                            <div className="course-text">来吧！我们试试实战</div>
                                            <div className="price"><span>￥0.00</span><s>原价￥99.00</s></div>
                                        </div>
                                    </div>
                                    <div className="list-box">
                                        <div className="span-box">
                                            <span className='span4'></span>
                                        </div>
                                        <div className="content">
                                            <title className="course-title">Go语言实战流媒体视频网站</title>
                                            <div className="course-text">用Go语言实践应用</div>
                                            <div className="price"><span>￥0.00</span><s>原价￥99.00</s></div>
                                        </div>
                                    </div>
                                    <div className="list-box">
                                        <div className="span-box">
                                            <span className='span5'></span>
                                        </div>
                                        <div className="content">
                                            <title className="course-title">SVN从入门到放弃</title>
                                            <div className="course-text">入门级课程你敢不敢来</div>
                                            <div className="price"><span>￥0.00</span><s>原价￥99.00</s></div>
                                        </div>
                                    </div>
                                </div>
                                <s style={{height:'0',clear:'both',display:'block',overflow:'hidden'}}></s>
                            </div>
                        </div>
                        <div className="largeData">
                            <div className="largeData-position">
                                <div className="title">
                                    <span className='span'><span></span></span>
                                    <h1 className='text'>就业薪资大数据</h1>
                                    <span className='span'><span></span></span>
                                </div>
                                <div className="imgTitle">
                                    <img src={DataTitle} alt="区块链"/>
                                </div>
                                <div className="data-content">
                                    <div className="img-box" onMouseOver={()=>{clearInterval(timer)}} onMouseLeave={()=>{this.timerMethod()}}>
                                        {/*{
                                            this.state.list.map((item,index)=>{
                                                return <img src={item} key={index} alt=""/>
                                            })
                                        }*/}
                                        <img className={active=='Data1'?'active':''} src={Data1} alt="区块链" onClick={()=>{this.handleImgChange('Data1')}}/>
                                        <img className={active=='Data2'?'active':''} src={Data2} alt="区块链" onClick={()=>{this.handleImgChange('Data2')}}/>
                                        <img className={active=='Data3'?'active':''} src={Data3} alt="区块链" onClick={()=>{this.handleImgChange('Data3')}}/>
                                    </div>
                                    <div className="data-description">
                                        中国互联网行业已具规模，并且发展迅猛，行业平均就业薪资高，但专业技术人才供需严重失衡，未来行业的发展亟待复合型及国际化人才的出现。
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="teacher">
                            <div className="teacher-position">
                                <div className="title" style={{width:'320px'}}>
                                    <span className='span'><span></span></span>
                                    <h1 className='text'>师资介绍</h1>
                                    <span className='span'><span></span></span>
                                </div>
                                <div className="title-description">顶尖高校教授研发课程，实名行业实战大牛授课</div>
                                <div className="teacher-introduce">
                                    <div className="introduce-list">
                                        <div className="avatar active1"></div>
                                        <div className="name">张小松</div>
                                        <div className="position">长江学者特聘教授</div>
                                        <div className="content">
                                            电子科技大学博士生导师，国家重点研发计划网络空间安全专项首席科学家，2017国家十大网络安全优秀人才，电子科技大学网络空间安全研究中心主任，政府治理大数据应用技术国家工程实验室技术专家委员会副主任，国防科技工业网络安全创新中心专家委员会委员，教育部科技委国防学部委员，四川省学术技术带头人。
                                        </div>
                                    </div>
                                    <div className="introduce-list">
                                        <div className="avatar active2"></div>
                                        <div className="name">桂勋</div>
                                        <div className="position">思学行教务总监</div>
                                        <div className="content">
                                            美国田纳西大学CURENT实验室博士后，电子科技大学教授，思学行教育科技合伙人，国际电气工程师协会IEEE 2418.2 区块链数据格式标准制定委员会成员。
                                            目前参与科技部重大专项《面向新型城镇的能源互联网关键技术及应用》，负责高性能能源区块链的研制工作。
                                        </div>
                                    </div>
                                    <div className="introduce-list">
                                        <div className="avatar active3"></div>
                                        <div className="name">姚兰</div>
                                        <div className="position">成都信息工程大学副教授</div>
                                        <div className="content">
                                            西南交通大学博士，美国西北理工大学访问学者，成都软件外包业务首批赴美培训专家，长期在成都信息工程大学开设《面向对象程序设计》，《C++程序设计》等课程。研究领域：区块链+人工智能，在区块链+人工智能领域发表论文10多篇检索论文。
                                        </div>
                                    </div>
                                    <div className="introduce-list">
                                        <div className="avatar active4"></div>
                                        <div className="name">李维江</div>
                                        <div className="position">斯蒂文斯网络信息工程硕士</div>
                                        <div className="content">
                                            美国斯蒂文斯理工学院网络信息工程硕士，曾就职于美国华尔街大都会通信有限公司，从事金融、数据软件产品开发和运营。曾在通信与信息系统国际会议上成功发表论文《多小区认知无线网络中基于免疫算法的资源分配》。长期参与美国公司实验室区块链应用的研究和实践，熟悉比特币和以太坊的源代码设计及技术开发。
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="news">
                            <div className="news-position">
                                <div className="title" style={{width:'420px'}}>
                                    <span className='span'><span></span></span>
                                    <h1 className='text'>新闻资讯-区块链</h1>
                                    <span className='span'><span></span></span>
                                </div>
                                <h2 className="title-description">一键了解最新区块链大数据行业讯息</h2>
                                <div className="news-box">
                                    <ul className="news-left">
                                        <li className={newsLeft==1?'active':''} onClick={()=>this.handleNewsChange(1)}>新闻资讯</li>
                                        <li className={newsLeft==2?'active':''} onClick={()=>this.handleNewsChange(2)}>行业动态</li>
                                        <li className={newsLeft==3?'active':''} onClick={()=>this.handleNewsChange(3)}>学员动态</li>
                                    </ul>
                                    {newsLeft==1?
                                        <ul className="news-right">
                                            <li><a><span></span><div className='news-title'>第三期成都区块链企业沙龙成功举办</div><div className='time'>2018-11-08</div></a></li>
                                            <li><a><span></span><div className='news-title'>第三期成都区块链企业沙龙成功举办</div><div className='time'>2018-11-08</div></a></li>
                                            <li><a><span></span><div className='news-title'>第三期成都区块链企业沙龙成功举办</div><div className='time'>2018-11-08</div></a></li>
                                            <li><a><span></span><div className='news-title'>第三期成都区块链企业沙龙成功举办</div><div className='time'>2018-11-08</div></a></li>
                                            <li><a><span></span><div className='news-title'>第三期成都区块链企业沙龙成功举办</div><div className='time'>2018-11-08</div></a></li>
                                            <li><a><span></span><div className='news-title'>第三期成都区块链企业沙龙成功举办</div><div className='time'>2018-11-08</div></a></li>
                                        </ul>
                                        :newsLeft==2?
                                            <ul className="news-right">行业动态</ul>
                                            :newsLeft==3?
                                                <ul className="news-right">学员动态</ul>:null
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="baoming">
                            <div className="baoming-position">
                                <div className="title" style={{width:'320px'}}>
                                    <span className='span'><span></span></span>
                                    <div className='text'>报名流程</div>
                                    <span className='span'><span></span></span>
                                </div>
                                <div className="baoming-box" style={{marginTop:'40px'}}>
                                    <img src={baomingImg} alt="区块链"/>
                                </div>
                                <h1 className="baoming-btn">
                                    我要报名
                                </h1>
                            </div>
                        </div>
                    </div>
                    : pages=='self'?<Self />
                    : pages=='university'?<University />
                    : <Enterprise />
                    }

                </div>
            </Fragment>

        )
    }

    timerMethod=()=>{
        let {list}=this.state
        this.setState({list:list.unshift(list.pop())})
    }

    componentDidMount(){

    }
    componentWillUnmount(){
        clearInterval(timer)
    }

    handleBoxChange=(value)=>{
        this.setState({pages:value})
    }

    handleNewsChange=(value)=>{
        this.setState({newsLeft:value})
    }

    handleImgChange=(value)=>{
        this.setState({active:value})
    }
}
const mapStateToProps=(state)=>({
    menuList:state.home.menuLeftList,
    menuLeftShow:state.header.menuLeftShow
})

const mapDispatchToProps=(dispatch)=>({
    getMenuList(){
        dispatch(actionCreators.getMenuLeftList())
    }
})

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Home))