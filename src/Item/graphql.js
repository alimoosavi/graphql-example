import {gql} from "@apollo/client";

export const ADD_ORDER = gql`
  mutation AddOrder($user: String! , $selectedItem_ids: [Int]!) {
    createOrder(user: $user , selectedItem_ids: $selectedItem_ids) {
      id
      user
      selectedItem_ids
    }
  }
`;
export const GET_ITEMS = gql`
     {
        allItems{
            id
            title
            price
        }
    }`;
export const user = 'Harry Potter';