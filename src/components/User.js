function User({name,surname, isLoggedIn, age}){
   // console.log(props);
    //return(<h1>{props.name} {props.surname} Selam </h1>)
    return <h1> {isLoggedIn ? `${name} ${surname} (${age})` : `Giris yapmadiniz.` }</h1>
}


export default User;