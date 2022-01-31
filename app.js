const btnSignUp = document.querySelector('.btn-signUp');
const btnSignIn = document.querySelector('.btn-signIn');
const btnSignOut = document.querySelector('.btn-signOut');

const h1 = document.querySelector('h1');
const info = document.querySelector('.info');

const signUpForm = document.querySelector('.signUp-form');
const signUpEmail = document.querySelector('.signUp-email');
const signUpPwd = document.querySelector('.signUp-pwd');

const signInForm = document.querySelector('.signIn-form');

//Display\Hide Registration Button
btnSignUp.addEventListener('click', () => {

    if(signInForm.classList.contains('display')) {
        signInForm.classList.remove('display');
    }

    signUpForm.classList.toggle('display');

})

//Display\Hide Connection Button
btnSignIn.addEventListener('click', () => {

    if(signUpForm.classList.contains('display')) {
        signUpForm.classList.remove('display');
    }

    signInForm.classList.toggle('display');

})

//Registration
signUpForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const mailSignUpValue = signUpEmail.value;
    const pwdSignUpValue = signUpPwd.value;

    auth.createUserWithEmailAndPassword(mailSignUpValue, pwdSignUpValue).then(cred => {
        console.log(cred);
        signUpForm.reset();
        signUpForm.classList.toggle('display');
    })
})

//Disconnection
btnSignOut.addEventListener('click', (e) => {
    e.preventDefault();
    auth.signOut().then(() => {
        console.log('Deconnected');
    })
})

//Connection
signInForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const mailSignInValue = signInEmail.value;
    const pwdSignInValue = signInPwd.value;

    auth.signInWithEmailAndPassword(mailSignInValue, pwdSignInValue).then(cred => {
        console.log("Connection!", cred.user);
        signInForm.reset();
        signInForm.classList.toggle('display');
    })
})

//Manage the content
auth.onAuthStateChanged(user => {
    if(user){
        info.innerText = "Here the private content!";
        h1.innerText = "You are back! :)";
    } else {
        console.log('User disconnected');
        info.innerText = "Public content."
        h1.innerText = "Welcome, sign in or sign up!";
    }
})