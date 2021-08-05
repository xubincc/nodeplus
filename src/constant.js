const env=process.env;
const REACT_APP_ENV=env.REACT_APP_ENV;
console.log("env,REACT_APP_ENV",env,REACT_APP_ENV)
let baseUrl;
switch (REACT_APP_ENV){
  case "prod":
    baseUrl= env.REACT_APP_PROD_BASE_URL
    break;
  case "test":
    baseUrl= env.REACT_APP_TEST_BASE_URL
    break;
  default:
    baseUrl=env.REACT_APP_DEV_BASE_URL
}


console.log("baseURl",baseUrl)
export default baseUrl