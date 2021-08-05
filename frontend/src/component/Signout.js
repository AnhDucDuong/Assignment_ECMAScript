const Signout = {
    render() {
        localStorage.clear()
        window.location.hash = '/'
    }
}

export default Signout;