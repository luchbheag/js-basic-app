function clickDemo() {
    document.getElementById('loadPosts').addEventListener('click', async () => {
        const response = await fetch('http://localhost:8080/api/posts');
        alert("HERE IS FINE");
        response.text() // 1
            .then(json => {                    // 2
                document.getElementById('demo').innerHTML = json;
            });
    });
}