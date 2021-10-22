function getGitHubProfileInfos(){
  const url = `https://api.github.com/users/tiburciohugo`

  fetch(url)
  .then(response => response.json())
  // .then(data => {
  //   userBio.textContent = data.bio 
  // })
}

getGitHubProfileInfos()



