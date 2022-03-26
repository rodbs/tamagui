import { ThemeManager } from '../ThemeManager';
import { ThemeObject } from '../types';
export declare const useTheme: (themeName?: string | null | undefined, componentName?: string | undefined) => ThemeObject;
export declare const getThemeManager: (theme: any) => any;
export declare const useThemeName: (opts?: {
    parent?: true | undefined;
} | undefined) => string;
export declare const useDefaultThemeName: () => import("../types").ThemeName | undefined;
export declare const useChangeThemeEffect: (shortName?: string | null | undefined, componentName?: string | undefined) => {
    didChangeTheme: boolean | null;
    themes: {
        [key: string]: Partial<import("../types").TamaguiBaseTheme> & {
            [key: string]: import("../types").VariableVal;
        };
    };
    themeManager: ThemeManager | null;
    name?: string | null | undefined;
    theme?: (Partial<import("../types").TamaguiBaseTheme> & {
        [key: string]: import("../types").VariableVal;
    }) | null | undefined;
    className?: string | undefined;
};
//# sourceMappingURL=useTheme.d.ts.map