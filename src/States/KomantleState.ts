import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';
import { Props_komantle_item } from '../Components/Komantle/KomantleType';

const { persistAtom } = recoilPersist();

export const KomantleState = atom<Props_komantle_item[]>({
  key: 'KomantleState',
  default: [],
  effects_UNSTABLE: [persistAtom],
});


export const KomantleSqeuenceState = atom<number>({
  key: 'KomantleSqeuenceState',
  default: 0,
  effects_UNSTABLE: [persistAtom],
});

