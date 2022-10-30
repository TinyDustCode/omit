export type OmitClickEvent<T = Element> =
    | React.MouseEvent<T>
    | React.KeyboardEvent<T>;