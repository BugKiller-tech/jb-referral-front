import axios from 'axios';

const header = {
  'Content-type': 'application/x-www-form-urlencoded' 
}
const multipartHeader = {
  'Content-type': 'multipart/form-data'
}
const BASE_URL = 'http://35.235.91.149:5000';

export default {
  // login and other common component
  createUserWithEmailAndPassword: (data) => axios.post(`${BASE_URL}/signup`, data, header),
  signInWithEmailAndPassword: (data) => axios.post(`${BASE_URL}/login`, data, header),
  sendForgotPasswordEmail: (data) => axios.post(`${BASE_URL}/forgot_password`, data, header),
  confirmEmail: (token) => axios.get(`${BASE_URL}/confirm/${token}`),
  getAccountInfo: () => axios.get(`${BASE_URL}/account_info`),
  changePassword: (data) => axios.post(`${BASE_URL}/change_password`, data, header),
  signOut: () => axios.get(`${BASE_URL}/logout`),


  // Job seeker component
  getSeekerHomeData: () => axios.get(`${BASE_URL}/api/getSeekerHomeData`),
  getCompanies: () => axios.get(`${BASE_URL}/api/getCompanies`),
  getCompanyDetail: (companyName) => axios.get(`${BASE_URL}/api/companyInfo/${companyName}`),
  updateProfile: (data) => axios.post(`${BASE_URL}/api/createOrUpdateProfile`, data),
  uploadResume: (data) => axios.post(`${BASE_URL}/api/uploadResume`, data, multipartHeader),
  applyJob: (data) => axios.post(`${BASE_URL}/api/jobseekerview/apply_job`, data),
  
  // employee component
  getJobs: (companyName) => axios.get(`${BASE_URL}/api/employerview/get_joblist/${companyName}`),
  getApplicantsOfJob: (companyName, jobId) => axios.get(`${BASE_URL}/api/employerview/get_applicants/${companyName}/${jobId}`),
  getApplicantInfo: (userName) => axios.get(`${BASE_URL}/api/employerview/view_applicant_info/${userName}`),
  getResume: (userId) => axios.get(`${BASE_URL}/api/view_resume/${userId}`),
  getDashboardInfo: (userId) => axios.get(`${BASE_URL}/api/employerview/get_dashboard/${userId}`),
  referralHandler: (companyName, data) => axios.post(`${BASE_URL}/api/employerview/referral_handler/${companyName}`, data, header),
  

}