
export type Props_li_todo = {
    li_todo: Props_todo_item[];
  };

  
//   export type Props_todo_item = {
//     item : Status_todo_item;
// }

  export type Props_todo_item = {
    id : number;
    title : string;
    contents : string;
    is_complete : boolean;

    deadline : Date;
}