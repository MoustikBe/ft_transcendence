const app = document.getElementById('app');

if(app)
{
    const message = document.createElement('h1');
    message.textContent = "Hello from TypeScript SPA, transcendece";
    message.style.textAlign = 'center';
    message.style.marginTop = '100vh';
    app.appendChild(message);
}