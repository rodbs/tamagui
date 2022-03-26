/// <reference types="react" />
import { ThemeObject } from './types';
declare type ThemeListener = (name: string | null, themeManager: ThemeManager) => void;
export declare type SetActiveThemeProps = {
    parentManager?: ThemeManager | null;
    name: string | null;
    theme?: any;
};
export declare class ThemeManager {
    name: string | null;
    keys: Map<any, Set<string>>;
    listeners: Map<any, Function>;
    themeListeners: Set<ThemeListener>;
    parentManager: ThemeManager | null;
    theme: ThemeObject | null;
    get parentName(): string | null;
    get fullName(): string;
    update({ name, theme, parentManager }: SetActiveThemeProps): void;
    track(uuid: any, keys: Set<string>): void;
    notifyListeners(): void;
    onChangeTheme(cb: ThemeListener): () => void;
    onUpdate(uuid: any, cb: Function): () => void;
}
export declare const ThemeManagerContext: import("react").Context<ThemeManager | null>;
export {};
//# sourceMappingURL=ThemeManager.d.ts.map