export default (state = {
  name: "Jimmy"
}, action) => {
  switch (action.type) {
    case 'CHANGE_NAME':
      return {
        name: action.payload
      }
    default:
      return state
  }
}