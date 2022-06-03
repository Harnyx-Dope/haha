import axios from 'axios'
class HelloworldService
{
    execute()
    {
      return  axios.get('http://localhost:4200/api/student/get/hi')
       
    }

}
export default new HelloworldService()