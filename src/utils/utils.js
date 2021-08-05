import zh_CN from "../locales/zh-CN"
import en_US from "../locales/en-US"

export function Random(min, max) {
  return Math.round(Math.random() * (max - min)) + min;
}

export function randomDrawing(arr,ranNum){
  let result=[]
  for (var i = 0; i < ranNum; i++) {
    var ran = Math.floor(Math.random() * arr.length);
    result.push(arr.splice(ran, 1)[0]);
  }
  return result
}

export function randomDrawingObj(obj,ranNum){
  let result=[]
  for (var i = 0; i < ranNum; i++) {
    var keys = Object.keys(obj)
    result.push( obj[keys[ keys.length * Math.random() << 0]])
    delete (obj[keys[ keys.length * Math.random() << 0]])
  }
  return result
}

  /**
 @description 页面垂直平滑滚动到指定滚动高度
 @author louis
*/
export function scrollSmoothTo (position) {
  //移动端增加40header
  if(isMobile()){
    position=position-40
  }
  if (!window.requestAnimationFrame) {
      window.requestAnimationFrame = function(callback, element) {
          return setTimeout(callback, 17);
      };
  }
  // 当前滚动高度
  var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  // 滚动step方法
  var step = function () {
      // 距离目标滚动距离
      var distance = position - scrollTop;
      // 目标滚动位置
      scrollTop = scrollTop + distance / 5;
      if (Math.abs(distance) < 1) {
          window.scrollTo(0, position);
      } else {
          window.scrollTo(0, scrollTop);
          requestAnimationFrame(step);
      }
  };
  step();
};

export function scrollToElementById(id){
  let elm= window.document.getElementById(id)
  if(elm){
    let height=elm.offsetTop
    scrollSmoothTo(height)
    setTimeout(()=>{
    let height=elm.offsetTop
    scrollSmoothTo(height)
    },300)
  }
}

export function isMobile(){
  const clientWidth=document.body.clientWidth
  if(clientWidth<=768){
    return true
  }
  return false
}

export function isElmInView(id){
  let elm= window.document.getElementById(id)
  if(elm){
    let height=elm.offsetTop
    const clientHeight=document.body.clientHeight

    const vt=elm.getBoundingClientRect().top
    if(vt>=0&&vt<=clientHeight-120){
      return true
    }else{
      return false
    }
  }else{
    return false
  }
}


export function formateNumber(number,unitType="en"){
  const unitEn=[
    {
      name:"Billion",
      value:100000000
    },
    {
      name:"Million",
      value:1000000
    },
    {
      name:"Thousand",
      value:1000
    }
  ]
  const unitCn=[
    {
      name:"亿",
      value:100000000
    },
    {
      name:"万",
      value:10000
    },
  ]
  if(isNaN(number)){
    return ''
  }else {

    const unit=unitType==="en"?unitEn:unitCn
    let data={
      unit:"",
      value:number
    }
    for(let i=0;i<unit.length;i++){
      const current=unit[i]
      if(number>=current.value){
        data={unit:current.name,value: parseInt(number*10/current.value)/10}
        break;
      }
    }
    return data
  }
}

export function browserLanguage(){
  let  lang;
  if (navigator.language) {
    lang = navigator.language;
  }
  else {
    lang= navigator.browserLanguage;
  }
  lang = lang.substr(0, 2)
  if(lang==='zh'){
    return 'zh'
  }else{
    return 'en'
  }
}

export function intlText(id,lang='en'){
   switch (lang) {
    case 'en':
      return en_US[id]||id;
    case 'zh':
      return zh_CN[id]||id;
    default:
      return en_US[id]||id;
  }
}



