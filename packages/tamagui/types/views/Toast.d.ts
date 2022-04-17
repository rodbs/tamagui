/// <reference types="react" />
import { AnimationKeys } from '@tamagui/core';
export declare type ToastOptions = {
    duration?: number;
    type?: 'info' | 'success' | 'error';
};
export declare const Toast: {
    clear: () => void;
    show: (content: any, options?: ToastOptions | undefined) => void;
    error: (content: any, options?: Omit<ToastOptions, "type"> | undefined) => void;
    success: (content: any, options?: Omit<ToastOptions, "type"> | undefined) => void;
};
export declare const ToastRoot: import("react").NamedExoticComponent<{
    animation?: AnimationKeys | undefined;
}>;
//# sourceMappingURL=Toast.d.ts.map