export interface CredoInterface {
    data: {
    id: number,
    img: string,
    description: string}[]
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
        img: string,
    }[]
        

}