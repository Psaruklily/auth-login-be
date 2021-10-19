module.exports = {
    userAuth: (req, res) => {
        const { email, password } = req.body;
        res.json('Hello from auth controller');
    },
}