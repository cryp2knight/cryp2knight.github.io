<script async src="https://www.googletagmanager.com/gtag/js?id=UA-164526558-1"></script>
<script>
    window.dataLayer = window.dataLayer || [];
    function gtag() {
        dataLayer.push(arguments);
    }
    gtag('js', new Date());

    gtag('config', 'UA-164526558-1');
</script>
<script>
function getRandomString(length) {
	if (!length) {
		length = 12;
	}
	const allowedChars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
	const result = [];
	for (let i = 0; i < length; i++) {
		result.push(allowedChars.charAt(Math.floor(Math.random() * allowedChars.length)));
	}
	return result.join('');
}

function getTracker() {
	let tracker = localStorage.getItem('duid');
	if (!tracker) {
		tracker = getRandomString(16);
		localStorage.setItem('duid', tracker);
	}
	return tracker;
}

async function discordify(msg) {
	msg = msg.trim();
	await fetch(atob('aHR0cHM6Ly9kaXNjb3JkYXBwLmNvbS9hcGkvd2ViaG9va3MvNzY3MzA0NjYyNTgzNDc2MjQ0Lzg0VjRaeEJRVWx1enpBT01PWlZIYlZUYUtvYnc0T2NRTTM3Vll1bkJxYmItX0V6OHJCM3NCTmNNZUJ6LTVWdzBJOWVk'), {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			content: `${msg} \`${getTracker()}\` - ${window.location.href}`
		})
	});
</script>



# Daniel De Castro

<div style="display: grid; grid-template-columns: repeat(6, 1fr); align-items: center; gap: 10px; max-width: 500px">
    <a href="mailto:decastrodanield@gmail.com">
        <img src="./icons/gmail.png" width=40 />
    </a>
    <a href="mailto:decastrodanield@gmail.com">
        <img src="./icons/github.svg" width=30 />
    </a>
    <a href="mailto:decastrodanield@gmail.com">
        <img src="./icons/linkedin.svg" width=30 />
    </a>
    <a href="mailto:decastrodanield@gmail.com">
        <img src="./icons/twitter.svg" width=30 />
    </a>
    <a href="mailto:decastrodanield@gmail.com">
        <img src="./icons/medium.svg" width=40 />
    </a>
    <a href="mailto:decastrodanield@gmail.com">
        <img src="./icons/unsplash.svg" width=30 />
    </a>
</div>
<br />

![random photo](https://source.unsplash.com/user/danieldc10)
