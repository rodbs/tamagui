import * as React from 'react';
import { Image, ImageProps, Text, TextInput, TextInputProps, View, ViewProps } from 'react-native';
import { MediaProps, PseudoProps, StackProps, StaticComponent, StaticConfig, TamaguiConfig, TextProps, ThemeValueByCategory, Themes, Tokens, WithShorthands } from './types';
declare type RNComponent = new (...args: any[]) => any;
declare type EmptyVariants = {
    __EMPTY_VARIANT__: string;
};
export declare function styled<Props, ParentComponent extends StaticComponent | React.Component<any> | RNComponent = React.Component<Partial<Props>>, Variants extends Object = {}>(Component: ParentComponent, options?: GetProps<ParentComponent> & {
    name?: string;
    variants?: Variants;
}, staticExtractionOptions?: StaticConfig): StaticComponent<keyof (Variants extends EmptyVariants ? {} : GetVariantProps<Variants>) | Exclude<keyof ((ParentComponent extends StaticComponent<void, infer V, any, import("./types").StaticConfigParsed> ? V : EmptyVariants) extends EmptyVariants ? {} : ParentComponent extends StaticComponent<void, infer V, any, import("./types").StaticConfigParsed> ? V : EmptyVariants), keyof (Variants extends EmptyVariants ? {} : GetVariantProps<Variants>)> extends never ? Props extends Object ? Props : GetProps<ParentComponent> : Omit<Props extends Object ? Props : GetProps<ParentComponent>, `$${string}` | keyof (Variants extends EmptyVariants ? {} : GetVariantProps<Variants>) | Exclude<keyof ((ParentComponent extends StaticComponent<void, infer V, any, import("./types").StaticConfigParsed> ? V : EmptyVariants) extends EmptyVariants ? {} : ParentComponent extends StaticComponent<void, infer V, any, import("./types").StaticConfigParsed> ? V : EmptyVariants), keyof (Variants extends EmptyVariants ? {} : GetVariantProps<Variants>)> | keyof PseudoProps<any>> & (Variants extends EmptyVariants ? {} : GetVariantProps<Variants>) & Omit<(ParentComponent extends StaticComponent<void, infer V, any, import("./types").StaticConfigParsed> ? V : EmptyVariants) extends EmptyVariants ? {} : ParentComponent extends StaticComponent<void, infer V, any, import("./types").StaticConfigParsed> ? V : EmptyVariants, keyof (Variants extends EmptyVariants ? {} : GetVariantProps<Variants>)> & MediaProps<(Props extends Object ? Props : GetProps<ParentComponent>) & (Variants extends EmptyVariants ? {} : GetVariantProps<Variants>) & Omit<(ParentComponent extends StaticComponent<void, infer V, any, import("./types").StaticConfigParsed> ? V : EmptyVariants) extends EmptyVariants ? {} : ParentComponent extends StaticComponent<void, infer V, any, import("./types").StaticConfigParsed> ? V : EmptyVariants, keyof (Variants extends EmptyVariants ? {} : GetVariantProps<Variants>)> & WithShorthands<(Props extends Object ? Props : GetProps<ParentComponent>) & (Variants extends EmptyVariants ? {} : GetVariantProps<Variants>) & Omit<(ParentComponent extends StaticComponent<void, infer V, any, import("./types").StaticConfigParsed> ? V : EmptyVariants) extends EmptyVariants ? {} : ParentComponent extends StaticComponent<void, infer V, any, import("./types").StaticConfigParsed> ? V : EmptyVariants, keyof (Variants extends EmptyVariants ? {} : GetVariantProps<Variants>)>>> & PseudoProps<(Props extends Object ? Props : GetProps<ParentComponent>) & (Variants extends EmptyVariants ? {} : GetVariantProps<Variants>) & Omit<(ParentComponent extends StaticComponent<void, infer V, any, import("./types").StaticConfigParsed> ? V : EmptyVariants) extends EmptyVariants ? {} : ParentComponent extends StaticComponent<void, infer V, any, import("./types").StaticConfigParsed> ? V : EmptyVariants, keyof (Variants extends EmptyVariants ? {} : GetVariantProps<Variants>)> & WithShorthands<(Props extends Object ? Props : GetProps<ParentComponent>) & (Variants extends EmptyVariants ? {} : GetVariantProps<Variants>) & Omit<(ParentComponent extends StaticComponent<void, infer V, any, import("./types").StaticConfigParsed> ? V : EmptyVariants) extends EmptyVariants ? {} : ParentComponent extends StaticComponent<void, infer V, any, import("./types").StaticConfigParsed> ? V : EmptyVariants, keyof (Variants extends EmptyVariants ? {} : GetVariantProps<Variants>)>>>, (Variants extends EmptyVariants ? {} : GetVariantProps<Variants>) & Omit<(ParentComponent extends StaticComponent<void, infer V, any, import("./types").StaticConfigParsed> ? V : EmptyVariants) extends EmptyVariants ? {} : ParentComponent extends StaticComponent<void, infer V, any, import("./types").StaticConfigParsed> ? V : EmptyVariants, keyof (Variants extends EmptyVariants ? {} : GetVariantProps<Variants>)>, any, import("./types").StaticConfigParsed>;
export declare type GetProps<A> = A extends StaticComponent<infer Props> ? Props : A extends React.Component<infer Props> ? Props & StackProps : A extends new (props: infer Props) => any ? Props & StackProps : A extends typeof View ? ViewProps : A extends typeof Text ? TextProps : A extends typeof TextInput ? Partial<TextInputProps> & TextProps : A extends typeof Image ? Partial<ImageProps> & StackProps : A extends typeof Image ? Partial<ImageProps> & StackProps : {};
export declare type VariantSpreadExtras<Props> = {
    tokens: TamaguiConfig['tokens'];
    theme: Themes extends {
        [key: string]: infer B;
    } ? B : unknown;
    props: Props;
};
export declare type VariantSpreadFunction<Props, Val = any> = (val: Val, config: VariantSpreadExtras<Props>) => Partial<Props>;
export declare type GetVariants<Props> = void | {
    [key: string]: {
        [key: string]: Partial<Props> | VariantSpreadFunction<Props>;
    };
};
export declare type GetVariantProps<Variants> = Variants extends void ? {} : {
    [Key in keyof Variants]?: keyof Variants[Key] extends `...${infer VariantSpread}` ? VariantSpread extends keyof Tokens ? ThemeValueByCategory<VariantSpread> | null : unknown : keyof Variants[Key] extends 'true' | 'false' ? boolean : keyof Variants[Key] extends ':string' ? string : keyof Variants[Key] extends ':boolean' ? boolean : keyof Variants[Key] extends ':number' ? number : keyof Variants[Key];
};
export {};
//# sourceMappingURL=styled.d.ts.map