


export interface Formdata {
    name:string,
	email:string,
	password:string,
	phone:string,

}


export interface logindata {

	email:string,
	password:string,

}

//********/ forget password **************
export interface emailinterface {
  email: string;


}
export interface codeinterface {
  resetCode: string;
}
export interface resetpassinterface {
  email: string;
  newPassword: string;
}