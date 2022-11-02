import { ref } from 'vue'
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'

const useUsers = () => {
    const auth = getAuth();
    const email = ref('');
    const password = ref('')
    const user = ref(null)

    const logIn = () => {
        signInWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {
            user.value = userCredential.user 
            console.log("userInfo", user.value.email)
            localStorage.setItem("userLoginInfoFirebase", user.value.email)
            console.log(localStorage.getItem("userLoginInfoFirebase"))
        })
        .catch((error) => {
            const errorCode = error.code
            const errorMessage = error.message
            if (errorCode === 'auth/wrong-password') {
                alert ("Wrong Password")
            } else {
                alert (errorMessage)
            }
        })
    }

    const logOut = () => {
        signOut(auth).then(() => {
            console.log("User logged out", user.value)
            localStorage.removeItem("userLoginInfoFirebase")
        }).catch((error) => {
            console.log(error)
        })
    }

   
    const isLoggedin = ref(false)
    const isLoggedInTest = () => {
        let auth
        auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if(user) {
                isLoggedin.value = true
            }
            else {
                isLoggedin.value = false
            }
        })
    }


    return {
        logIn,
        logOut,
        isLoggedin,
        isLoggedInTest,
        email,
        password,
        user,
        auth,
    }
}

export default useUsers