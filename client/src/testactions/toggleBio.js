export const toggleBio = (editBio) => {
  console.log('edit button clicked', editBio);

  return {
    type: "TOGGLE_BIO_EDIT",
    payload: editBio
  }

}