const getUsername =document.querySelector("#user") as HTMLInputElement;
const formSubmit=document.querySelector(".form") as HTMLFormElement;
const main_container= document.querySelector(".main-container") as HTMLElement;

//SCHEMA OF AN OBJECT
interface UserData{
    id:number;
    login:string;
    avatar_url:string;
    location:string;
    url:string;
}
//reusable fun
async function myCustomFetcher<T>(url:string, options?: RequestInit):Promise<T>{
 const response =await fetch(url,options);
 if(!response.ok){
    throw new Error(
        `network response not ok-status:${response.status}`
    );
 }
}

function fetchUserData(url: string){
    myCustomFetcher<UserData[]>(url,{});
}

//default fun call
fetchUserData("https://api.github.com/users");