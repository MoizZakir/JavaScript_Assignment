import { addInDBById, signUp, uploadFile } from "../utils/functions.mjs"

const userName = document.querySelector('#name')
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const confirmPassword = document.querySelector('#confirm-password')
const profilepic = document.querySelector('#profilepic')


window.submitForm = async () => {
  let data = {
    username: userName.value,
    userEmail: email.value,
  }
  if (password.value != confirmPassword.value) {
    return alert('password did not match')

  }
  else if (password.value.length < 7) {
    return alert('password character must be greater than 7')
  }
  else if (userName.value==''||
    email.value==''||
    password.value==''||
    confirmPassword.value=='') {
    return alert('Empty Fileds')
  }
  else {
    const register = await signUp(email.value, password.value)
    if (register.status) {
      if(profilepic.files[0]){
      const profilePictureName = `${new Date().getTime()}-${profilepic.files[0].name}`

      const upload = await uploadFile(profilepic.files[0], profilePictureName)
      if (upload.status) {
        data.profilePicture = upload.downloadURL
        alert(upload.message)
      } else {
        alert(upload.message)
      }
    }

    


    const userAddInDB = await addInDBById(data, register.data.user.uid, "users")

    if (userAddInDB.status) {
      alert(userAddInDB.message)
      alert(register.message)
      window.location = "../Home/index.html"
    } else {
      alert(userAddInDB.message)
    }
  }
  else{
    alert(register.message)
  }

  }
}
