const register = async (username, password) => {
   
    try {
     const promise = await fetch('http://localhost:3003/api/user/register', {
       method: 'POST',
       body: JSON.stringify({
           username,
           password
       }),
       headers: {
         'Content-Type': 'application/json'
       }
     })
     const authToken = promise.headers.get('Authorization')
     document.cookie = `x-auth-token=${authToken}`
     
    } catch (e) {
      
    }
     
     
 };
 export default register;