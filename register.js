function register(event)
{
    event.preventDefault();
    alert("Registration successfully completed! You may now close this window.");
    return false;
}
function goToHome()
{
    window.location.href='index.html';
}