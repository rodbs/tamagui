/// <reference types="react" />
import { ModalBaseProps, ModalPropsAndroid, ModalPropsIOS } from 'react-native';
import { StackProps } from './Stacks';
declare type ModalPropsReact = ModalBaseProps & ModalPropsIOS & ModalPropsAndroid;
export declare type ModalProps = Omit<ModalPropsReact, 'children'> & StackProps & {
    visible?: boolean;
    overlayBackground?: string;
    overlayDismisses?: boolean;
    children?: any | ((isOpen?: boolean) => any);
};
export declare const Modal: (props: ModalProps) => JSX.Element;
export declare const ModalYStack: import("@tamagui/core").StaticComponent<Omit<import("@tamagui/core").StackProps, `$${string}` | "elevation" | "fullscreen" | keyof import("@tamagui/core").PseudoProps<any>> & {
    fullscreen?: boolean | undefined;
    elevation?: import("@tamagui/core").SizeTokens | null | undefined;
} & import("@tamagui/core").MediaProps<Omit<import("react-native").ViewProps, "display" | "children"> & import("@tamagui/core/types/types-rnw").RNWViewProps & import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase>> & import("@tamagui/core").PseudoProps<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase>>> & import("@tamagui/core").MediaProps<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase>> & import("@tamagui/core").PseudoProps<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase>>>> & {
    animation?: import("@tamagui/core").AnimationKeys | undefined;
} & {
    disabled?: boolean | undefined;
    className?: string | undefined;
    id?: string | undefined;
    tag?: string | undefined;
    animated?: boolean | undefined;
    theme?: import("@tamagui/core").ThemeName | null | undefined;
    onHoverIn?: ((e: MouseEvent) => any) | undefined;
    onHoverOut?: ((e: MouseEvent) => any) | undefined;
    onPress?: ((e: import("react-native").GestureResponderEvent) => any) | undefined;
    onPressIn?: ((e: import("react-native").GestureResponderEvent) => any) | undefined;
    onPressOut?: ((e: import("react-native").GestureResponderEvent) => any) | undefined;
    onMouseEnter?: ((e: import("react-native").GestureResponderEvent) => any) | undefined;
    onMouseLeave?: ((e: import("react-native").GestureResponderEvent) => any) | undefined;
    space?: boolean | import("@tamagui/core").VariableVal | undefined;
} & {
    children?: any;
} & {
    fullscreen?: boolean | undefined;
    elevation?: import("@tamagui/core").SizeTokens | null | undefined;
} & import("@tamagui/core").WithShorthands<Omit<import("react-native").ViewProps, "display" | "children"> & import("@tamagui/core/types/types-rnw").RNWViewProps & import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase>> & import("@tamagui/core").PseudoProps<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase>>> & import("@tamagui/core").MediaProps<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase>> & import("@tamagui/core").PseudoProps<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase>>>> & {
    animation?: import("@tamagui/core").AnimationKeys | undefined;
} & {
    disabled?: boolean | undefined;
    className?: string | undefined;
    id?: string | undefined;
    tag?: string | undefined;
    animated?: boolean | undefined;
    theme?: import("@tamagui/core").ThemeName | null | undefined;
    onHoverIn?: ((e: MouseEvent) => any) | undefined;
    onHoverOut?: ((e: MouseEvent) => any) | undefined;
    onPress?: ((e: import("react-native").GestureResponderEvent) => any) | undefined;
    onPressIn?: ((e: import("react-native").GestureResponderEvent) => any) | undefined;
    onPressOut?: ((e: import("react-native").GestureResponderEvent) => any) | undefined;
    onMouseEnter?: ((e: import("react-native").GestureResponderEvent) => any) | undefined;
    onMouseLeave?: ((e: import("react-native").GestureResponderEvent) => any) | undefined;
    space?: boolean | import("@tamagui/core").VariableVal | undefined;
} & {
    children?: any;
} & {
    fullscreen?: boolean | undefined;
    elevation?: import("@tamagui/core").SizeTokens | null | undefined;
}>> & import("@tamagui/core").PseudoProps<Omit<import("react-native").ViewProps, "display" | "children"> & import("@tamagui/core/types/types-rnw").RNWViewProps & import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase>> & import("@tamagui/core").PseudoProps<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase>>> & import("@tamagui/core").MediaProps<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase>> & import("@tamagui/core").PseudoProps<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase>>>> & {
    animation?: import("@tamagui/core").AnimationKeys | undefined;
} & {
    disabled?: boolean | undefined;
    className?: string | undefined;
    id?: string | undefined;
    tag?: string | undefined;
    animated?: boolean | undefined;
    theme?: import("@tamagui/core").ThemeName | null | undefined;
    onHoverIn?: ((e: MouseEvent) => any) | undefined;
    onHoverOut?: ((e: MouseEvent) => any) | undefined;
    onPress?: ((e: import("react-native").GestureResponderEvent) => any) | undefined;
    onPressIn?: ((e: import("react-native").GestureResponderEvent) => any) | undefined;
    onPressOut?: ((e: import("react-native").GestureResponderEvent) => any) | undefined;
    onMouseEnter?: ((e: import("react-native").GestureResponderEvent) => any) | undefined;
    onMouseLeave?: ((e: import("react-native").GestureResponderEvent) => any) | undefined;
    space?: boolean | import("@tamagui/core").VariableVal | undefined;
} & {
    children?: any;
} & {
    fullscreen?: boolean | undefined;
    elevation?: import("@tamagui/core").SizeTokens | null | undefined;
} & import("@tamagui/core").WithShorthands<Omit<import("react-native").ViewProps, "display" | "children"> & import("@tamagui/core/types/types-rnw").RNWViewProps & import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase>> & import("@tamagui/core").PseudoProps<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase>>> & import("@tamagui/core").MediaProps<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase>> & import("@tamagui/core").PseudoProps<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase>>>> & {
    animation?: import("@tamagui/core").AnimationKeys | undefined;
} & {
    disabled?: boolean | undefined;
    className?: string | undefined;
    id?: string | undefined;
    tag?: string | undefined;
    animated?: boolean | undefined;
    theme?: import("@tamagui/core").ThemeName | null | undefined;
    onHoverIn?: ((e: MouseEvent) => any) | undefined;
    onHoverOut?: ((e: MouseEvent) => any) | undefined;
    onPress?: ((e: import("react-native").GestureResponderEvent) => any) | undefined;
    onPressIn?: ((e: import("react-native").GestureResponderEvent) => any) | undefined;
    onPressOut?: ((e: import("react-native").GestureResponderEvent) => any) | undefined;
    onMouseEnter?: ((e: import("react-native").GestureResponderEvent) => any) | undefined;
    onMouseLeave?: ((e: import("react-native").GestureResponderEvent) => any) | undefined;
    space?: boolean | import("@tamagui/core").VariableVal | undefined;
} & {
    children?: any;
} & {
    fullscreen?: boolean | undefined;
    elevation?: import("@tamagui/core").SizeTokens | null | undefined;
}>>, void, any, import("@tamagui/core").StaticConfigParsed>;
export {};
//# sourceMappingURL=Modal.d.ts.map