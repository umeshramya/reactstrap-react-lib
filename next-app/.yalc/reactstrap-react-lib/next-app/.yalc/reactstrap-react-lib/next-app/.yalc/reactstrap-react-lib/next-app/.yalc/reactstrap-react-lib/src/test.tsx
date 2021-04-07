const submit = async(onSuccess:()=>Promise<string>)=>{
 let u =   await onSuccess()
 console.log(u)
}


const  onSuccess = async()=>"umesh";

submit(onSuccess)