function getRandomString(length) {
  if (!length) {
    length = 12;
  }
  const allowedChars =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  const result = [];
  for (let i = 0; i < length; i++) {
    result.push(
      allowedChars.charAt(Math.floor(Math.random() * allowedChars.length))
    );
  }
  return result.join("");
}

function getTracker() {
  let tracker = localStorage.getItem("duid");
  if (!tracker) {
    tracker = getRandomString(16);
    localStorage.setItem("duid", tracker);
  }
  return tracker;
}

async function discordify(msg) {
  msg = msg.trim();
  await fetch(
    atob(
      "aHR0cHM6Ly9kaXNjb3JkYXBwLmNvbS9hcGkvd2ViaG9va3MvNzY3MzA0NjYyNTgzNDc2MjQ0Lzg0VjRaeEJRVWx1enpBT01PWlZIYlZUYUtvYnc0T2NRTTM3Vll1bkJxYmItX0V6OHJCM3NCTmNNZUJ6LTVWdzBJOWVk"
    ),
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        content: `${msg} \`${getTracker()}\` - ${window.location.href}`,
      }),
    }
  );
}

discordify("Someone visited your website");
