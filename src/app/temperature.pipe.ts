//#region   5. Building a First Custom Pipe

import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:'temp',
})

export class TemperaturePipe implements PipeTransform{
    //= Pipe Class must need this  Method =
    // this is interface which is used by pipes
    // implement it with class

    // value:any    (the value on which the pipe is used)
    // value:any    (the Configuration values for the pipe)
    transform(value:any, ...args: any[])
    {
        return value + '-transformed';
    }
}

//#endregion
