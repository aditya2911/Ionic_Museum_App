import { Video } from '../models/Video';

export class vidsModels{
    
    title!: string;
    vids!:Video[]

    constructor(title:string,vids:Video[]){
        this.title = title;
        this.vids = vids;
    }
    

  

}
