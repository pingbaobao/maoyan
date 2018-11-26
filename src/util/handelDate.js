//去除星期几
export const removeWeek=(date)=>{
    return date.replace(/\s周.*/,'')
}
//相同上映日期去重
export const dateClassify =(_list)=>{
    let _info=JSON.parse(JSON.stringify(_list))
    for(let i=1;i<_list.length;i++){
        if(_info[i].comingTitle===_list[i-1].comingTitle){
            _info[i].comingTitle=""
        }
    };
    return _info;
}