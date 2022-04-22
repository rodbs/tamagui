/// <reference types="react" />
import { ViewStyle } from 'react-native';
import { PseudoStyles } from '../static';
import { TamaguiComponentState, UseAnimationHook } from '../types';
declare type FeatureUtils = {
    forceUpdate: Function;
    state: TamaguiComponentState;
    setStateShallow: (next: Partial<TamaguiComponentState>) => void;
    useAnimations?: UseAnimationHook;
    pseudos: PseudoStyles;
    style: ViewStyle | null | undefined;
};
export declare const useFeatures: (props: any, utils?: FeatureUtils | undefined) => JSX.Element[];
export {};
//# sourceMappingURL=useFeatures.d.ts.map