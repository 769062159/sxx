import * as actionTypes from './actionTypes'

const defaultState={
    newsList:[],
    industryList:[],
    studentList:[],
}

const getNewsList=(state,action)=>{
    return Object.assign({},state,{
        newsList: action.result.newsList,
        industryList: action.result.industryList,
        studentList: action.result.studentList,
        detailInfo:action.result.detailInfo
    })
}
const getDetailInfo=(state,action)=>{
    return Object.assign({},state,{detailInfo:action.result})
}

export default (state = defaultState, action)=>{
    switch(action.type){
        case actionTypes.GET_NEWS_LIST:
            return getNewsList(state,action)
        case actionTypes.GET_DETAIL_INFO:
            return getDetailInfo(state,action)
        default:
            return state
    }
}