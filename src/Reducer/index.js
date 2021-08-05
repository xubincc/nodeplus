import {
  SET_CURRENT_LOCAL

} from '../actions/types';
import {browserLanguage} from '../utils/utils'

const initialState = { 
  locale: localStorage.getItem('locale')||browserLanguage()||'en' ,
}
const reducer = (state = initialState, action) => {
 switch (action.type) { 
  case SET_CURRENT_LOCAL: 
    return {...state, locale:action.data }
   
  default:            
    return state;    
  }
 }

export default reducer;