import { StaticImageData } from "next/image";

export type ServiceType = {
    tittle : string;
    img : StaticImageData;
    description? : string;
}

export type CommentType = {
    name : string;
    comment : string;
    service : string;
}