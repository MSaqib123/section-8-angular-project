//#region   5. Building a First Custom Pipe

// import { Pipe, PipeTransform } from "@angular/core";

// @Pipe({
//     name:'temp',
// })

// export class TemperaturePipe implements PipeTransform{
//     //= Pipe Class must need this  Method =
//     // this is interface which is used by pipes
//     // implement it with class

//     // value:any    (the value on which the pipe is used)
//     // value:any    (the Configuration values for the pipe)
//     transform(value:any, ...args: any[])
//     {
//         return value + '-transformed';
//     }
// }

//#endregion



//#region   6. Using Custom Pipes to Perform Custom Transformations 

import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:'temp',
})

export class TemperaturePipe implements PipeTransform{
    
    transform(value:string | number)
    {
        let val:number;
        if(typeof value === 'string'){
            val = parseFloat(value)
        }
        else{
            val = value;
        }
        const outputTmep = val * (9/5) + 32;
        return `${outputTmep} *F`;
    }
}

//#endregion
