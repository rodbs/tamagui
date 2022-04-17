import { NodePath } from '@babel/traverse';
import * as t from '@babel/types';
import { TamaguiInternalConfig } from '@tamagui/core-node';
import { ExtractorParseProps } from '../types';
export declare type Extractor = ReturnType<typeof createExtractor>;
export declare function createExtractor(): {
    getTamagui(): TamaguiInternalConfig<import("@tamagui/core-node").CreateTokens<import("@tamagui/core-node").VariableVal>, {
        [key: string]: Partial<import("@tamagui/core-node").TamaguiBaseTheme> & {
            [key: string]: import("@tamagui/core-node").VariableVal;
        };
    }, {}, {
        [x: string]: {
            [key: string]: string | number;
        };
    }, {
        [key: string]: string | {
            [key: string]: any;
        };
    }>;
    parse: (fileOrPath: NodePath<t.Program> | t.File, { config, importsWhitelist, evaluateVars, shouldPrintDebug, sourcePath, onExtractTag, getFlattenedNode, disable, disableExtraction, disableExtractInlineMedia, disableExtractVariables, disableDebugAttr, prefixLogs, excludeProps, ...props }: ExtractorParseProps) => {
        flattened: number;
        optimized: number;
        modified: number;
        found: number;
    } | null;
};
//# sourceMappingURL=createExtractor.d.ts.map