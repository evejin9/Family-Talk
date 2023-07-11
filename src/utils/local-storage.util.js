export const getPhotoItem = (id) => {
  const photoListString = window.localStorage.getItem('photoList')
  const photoList = JSON.parse(photoListString)

  return photoList.find(photo => photo.id === id)
}

export const getPhotoList = () => {
  const photoListString = window.localStorage.getItem('photoList')
  return photoListString ? JSON.parse(photoListString) : []
}

export const registPhotoItem = (data) => {
  let photoListString = window.localStorage.getItem('photoList')

  if(!photoListString) photoListString = JSON.stringify([])

  const photoList = JSON.parse(photoListString)
  const newPhotoList = JSON.stringify([data,...photoList])
  window.localStorage.setItem('photoList', newPhotoList)
}
export const initPhotoList = (photoList) => {
  const newPhotoList = JSON.stringify(photoList)
  window.localStorage.setItem('photoList', newPhotoList)
}