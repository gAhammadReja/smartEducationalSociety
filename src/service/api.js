import axios from 'axios';

const apiUrl = 'https://smartserver-ip6l.onrender.com';



let stclass = 'X';
export const getAllStudent = async (data,stclass) =>{
  try{
      return axios.get(`${apiUrl}/students?class=${stclass}`, data);
  }catch(error){
      console.log("Error While Calling API", error);
  }
}

let allStudents = getAllStudent(stclass);
console.log(allStudents);