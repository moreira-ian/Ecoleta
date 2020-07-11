import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string,

        colors: {
            primary: string,
            secundary: string,

            background: string,
            title: string,
            text: string,
            content: string,
            input: string,
        },
    }
}