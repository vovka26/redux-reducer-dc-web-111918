export function manageFriends(state, action){
   switch(action.type){
        case 'ADD_FRIEND':
            return {friends: [...state.friends, action.friend]}
        case 'REMOVE_FRIEND':
            const index = state.friends.findIndex(friend => friend.id === action.id)
            const newFriends = state.friends.slice()
            newFriends.splice(index, 1)
            return {friends: newFriends}
        default: 
            return state;
   }
}
