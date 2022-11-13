export const setJwtTokenApi = (user) => {
    const currentUser = {
        email: user.email
    }
    /* get or request JWT token from server */
    fetch('https://dr-shihan-mostafizur-server-mostafizurhh.vercel.app/jwt', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(currentUser)
    })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            localStorage.setItem('jwtToken', data.token);
        })
        .catch(e => console.error(e))
}