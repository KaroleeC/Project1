export const changeBio = (text) => {
  console.log('BIO CHange', text);

  return {
    type: "EDIT_BIO",
    payload: text
  }

}