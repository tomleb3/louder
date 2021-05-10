export const mediaService = {
  query,
  nextPage
}

async function query(filterTxt = '') {
  const res = await fetch(
    `https://api.soundcloud.com/tracks?format=json&linked_partitioning=1
    &client_id=${process.env.REACT_APP_CLIENT_ID}&q=${filterTxt}&limit=6`)
  return res.json()
}

async function nextPage(url) {
  const res = await fetch(url)
  return res.json()
}