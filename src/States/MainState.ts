import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';
import { Props_todo_item } from '../Components/Todo/TodoType';

const { persistAtom } = recoilPersist();

export const HeaderSnbState = atom<boolean>({
  key: 'HeaderSnbState',
  default: false,
  effects_UNSTABLE: [persistAtom],
});