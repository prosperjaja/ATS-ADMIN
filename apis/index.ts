
// const url = "https://5f1c-102-88-36-56.ngrok-free.app/api/auth/login"

// import { LUser } from "@/interface";

// export default class API{
// BASE_URL = "https://ats-admin-dashboard.onrender.com/api/login"
// async login(data:LUser){
//   try {
//    const  path = this.BASE_URL 
//      const response = await fetch(path, {
//         method: "POST", // or 'PUT'
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(data),
//       });
//       const datas = await response.json();
//       console.log(datas)
//   } catch (error) {
//     return error.message
//   }
// }
// async register(){
// const data = await res.json();
//       if (data?.error) {
//         setError(data?.error);
//         return;
//       }
//       setUser(data);
//       localStorage.setItem("my-user", JSON.stringify(data))
//       push("/dashboard")
//     } catch (error) {
//       console.log("error-response", error);
//     }
// }
// }