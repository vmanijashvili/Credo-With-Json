export interface credoHome {
    help?: {
        id: number;
        img: string;
        description: string;
    }[];
      
}
export interface CredoInterface extends credoHome {
    
    data?: {
        id: number;
        img?: string;
        description: string}[];
}













export interface RightContainerInterface{
    rightContainer: {
        id: number,
        description: string,
        img: string,
    }[],
    
    rightContainerSecond:{
        id: number,
        description: string,
        img?: string,
    }[]

}


/*
 interface credo {
    data: {
        id: number,
        img?: string,
        description: string}[],
}
 interface helps {
    help: {
        id: number,
        description: string,
        img: string }[]
}


interface info extends helps {
    help: credo[]
}
*/

