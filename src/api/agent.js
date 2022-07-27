import axios from "axios";

const envUrl = process.env.REACT_APP_API_URL;
axios.defaults.baseURL = `${envUrl}`;

const responseBody = (response) => response?.data;
const requests = {
  get: (url) => axios.get(url).then(responseBody),
  get: (url, request) => axios.get(url, request).then(responseBody),
  post: (url, body) => axios.post(url, body).then(responseBody),
  put: (url, body) => axios.put(url, body).then(responseBody),
  del: (url) => axios.delete(url).then(responseBody),

};
const Login = {
  loginAdmin: (info) => requests.post(`/loginAdmin`, info),
};
const Register = {
  verificationSendCode: (info) => requests.post(`/verificationSendCode`, info),
  VerifyCode: (info) => requests.post(`/VerifyCode`, info),
  signupFirstPhase: (info) => requests.post(`/signupFirstPhase`, info),
  signupSubscription: (info) => requests.post(`/signupSubscription`, info),
  signupLocationAdd: (info) => requests.post(`/signupLocationAdd`, info),
};
const Manager = {
  createManager: (info) => requests.post(`/createManager`, info),
  editManager: (info) => requests.post(`/editManager`, info),
  deleteManager: (info) => requests.post(`/deleteManager`, info),
  getAllManager: (params) => requests.post(`/getAllManager`, params),
  getAllManagerForDrop: () => requests.get(`/getAllManagerForDrop`),
};
const Staff = {
  createStaff: (info) => requests.post(`/createStaff`, info),
  editStaff: (info) => requests.post(`/editStaff`, info),
  deleteStaff: (info) => requests.post(`/deleteStaff`, info),
  getAllStaff: (params) => requests.post(`/getAllStaff`, params),
};
const Package = {
  createPackage: (info) => requests.post(`/createPackage`, info),
  editPackage: (info) => requests.post(`/editPackage`, info),
  deletePackage: (info) => requests.post(`/deletePackage`, info),
  getAllPackage: (params) => requests.post(`/getAllPackage`, params),
  getAllPackageForDrop: () => requests.get(`/getAllPackageForDrop`),
};
const PromoCode = {
  createPromoCode: (info) => requests.post(`/createPromoCode`, info),
  editPromoCode: (info) => requests.post(`/editPromoCode`, info),
  deletePromo: (info) => requests.post(`/deletePromo`, info),
  getAllPromo: (params) => requests.post(`/getAllPromo`, params),
};
const Number = {
  searchTwilioMobileNo: (info) => requests.post(`/searchTwilioMobileNo`, info),
  buyNumberFromTwilio: (info) => requests.post(`/buyNumberFromTwilio`, info),
  getAllActiveNumbers: (values) => requests.post(`/getAllActiveNumbers`, values),
  loadAllUnassignNumber: () => requests.get(`/loadAllUnassignNumber`),
  loadAllAssignedNumber: () => requests.get(`/loadAllAssignedNumber`),
  loadAllNumberAssignInfo: () => requests.get(`/loadAllNumberAssignInfo`),
  releaseTwilioNumber: (info) => requests.post(`/releaseTwilioNumber`, info),
  AssignNumberToManager: (info) => requests.post(`/AssignNumberToManager`, info),
  editAssignNumberToManager: (info) => requests.post(`/editAssignNumberToManager`, info),
};
const Location = {
  getActivePhoneNumberForLocation: (values) => requests.post(`/getActivePhoneNumberForLocation`, values),
  applyPromoCode: (values) => requests.post(`/applyPromoCode`, values),
  createNewLocation: (values) => requests.post(`/createNewLocation`, values),
  getAllLocation: (values) => requests.post(`/getAllLocation`, values),
  getAllLocationByStaff: (values) => requests.post(`/getAllLocationByStaff`, values),
  addNumberToLocation: (values) => requests.post(`/addNumberToLocation`, values),

}
const Payment = {
  pay: (values) => requests.post(`/pay`, values),
  signupPay: (values) => requests.post(`/signupPay`, values),
  saveStripePaymentInfo: (values) => requests.post(`/saveStripePaymentInfo`, values),
  getPaymentCredentails: (values) => requests.post(`/getPaymentCredentails`, values),
  deletePaymentCredentials: (values) => requests.post(`/deletePaymentCredentials`, values),
  PayPalPayment: (values) => requests.post(`/PayPalPayment`, values),
  linkPaymentPayPal: (values) => requests.post(`/linkPaymentPayPal`, values),
  linkPaymentStripe: (values) => requests.post(`/linkPaymentStripe`, values),
}
const FoodMenu = {
  saveFoodOrderMenu: (values) => requests.post(`/saveFoodOrderMenu`, values),
  editSaveFoodOrderMenu: (values) => requests.post(`/editSaveFoodOrderMenu`, values),
  getFoodMenuList: (values) => requests.post(`/getFoodMenuList`, values),
}
const Chat = {
  getAllLocationByManager: (values) => requests.post(`/getAllLocationByManager`, values),
  getAllCustomerByLocation: (values) => requests.post(`/getAllCustomerByLocation`, values),
}
const Home = {
  totalDataCountForAdmin: () => requests.get(`/totalDataCountForAdmin`),
  totalDataCountForManager: (value) => requests.post(`/totalDataCountForManager`, value),
}
export default {
  Login,
  Manager,
  Staff,
  Package,
  PromoCode,
  Number,
  Location,
  Payment,
  Register,
  Chat,
  Home,
  FoodMenu,
};
