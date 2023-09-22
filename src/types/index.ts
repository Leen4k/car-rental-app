import { MouseEventHandler } from "react";

// export interface CustomButtonProps {
//     title: string;
//     containerStyles?: string;
//     handleClick?: MouseEventHandler<HTMLButtonElement>;
// }
export type CustomButtonProps = {
    title: string;
    containerStyles?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    btnType?: "button" | "submit";
}