export const mediaService = {
  query,
  nextPage,
  getById
}

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID

async function query(filterTxt = '') {
  const res = await fetch(
    `https://api.soundcloud.com/tracks?format=json&linked_partitioning=1
    &client_id=${CLIENT_ID}&q=${filterTxt}&limit=6`)
  return res.json()
}

async function getById(trackId) {
  const res = await fetch(
    `http://api.soundcloud.com/tracks/${trackId}.json?client_id=${CLIENT_ID}`)
  return res.json()
}

async function nextPage(url) {
  const res = await fetch(url)
  return res.json()
}