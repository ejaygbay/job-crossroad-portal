const loginForm = (req, res) => {
    res.render('auth/login');
}

const signUpForm = (req, res) => {
    res.render('auth/register');
}

module.exports = {
    loginForm,
    signUpForm
}