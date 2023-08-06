import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';
import { Props_todo_item } from '../Components/Todo/TodoType';

const { persistAtom } = recoilPersist();

export const TodoState = atom<Props_todo_item[]>({
  key: 'TodoState',
  default: [],
  effects_UNSTABLE: [persistAtom],
});