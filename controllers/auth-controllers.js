const loginForm = (req, res) => {
    res.render('auth/login');
}

const signUpForm = (req, res) => {
    res.render('auth/register');
}

const handleSignUpForm = (req, res) => {
    res.send({ msg: "Done" });
}

module.exports = {
    loginForm,
    signUpForm,
    handleSignUpForm,
}