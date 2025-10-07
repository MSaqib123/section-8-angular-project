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

// import { Pipe, PipeTransform } from "@angular/core";

// @Pipe({
//     name:'temp',
// })

// export class TemperaturePipe implements PipeTransform{
    
//     transform(value:string | number)
//     {
//         let val:number;
//         if(typeof value === 'string'){
//             val = parseFloat(value)
//         }
//         else{
//             val = value;
//         }
//         const outputTmep = val * (9/5) + 32;
//         return `${outputTmep} *F`;
//     }
// }

//#endregion



//#region  7. Accepting Parameters in Custom Pipes

// import { Pipe, PipeTransform } from "@angular/core";

// @Pipe({
//     name:'temp',
// })

// export class TemperaturePipe implements PipeTransform{
//     transform(value:string | number, inputType: 'cel' | 'fah', outputType?: 'cel' | 'fah')
//     {
//         let val:number;
//         if(typeof value === 'string'){
//             val = parseFloat(value)
//         }
//         else{
//             val = value;
//         }

//         let outputTmep:number;
//         if(inputType === 'cel' && outputType === 'fah'){
//             outputTmep = val * (9/5) + 32; // cel to f
//         }else if(inputType === 'fah' && outputType ==='cel'){
//             outputTmep = (val-32) * (5/9);  // f to  cel
//         }
//         else{
//             outputTmep = val;
//         }


//         let symbol : 'C' | 'F';
//         if(!outputType){
//             symbol = inputType === 'cel' ? 'C' : 'F';
//         }
//         else{
//             symbol = inputType === 'cel' ? 'C' : 'F';
//         }
//         return `${outputTmep} ${symbol}`;
//     }
// }

//#endregion



//#region  8. Chaining Pipes & Being Aware of Limitations

import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:'temp',
})

export class TemperaturePipe implements PipeTransform{
    transform(value:string | number | null, inputType: 'cel' | 'fah', outputType?: 'cel' | 'fah')
    {
        if(!value){
            return value;
        }

        let val:number;
        if(typeof value === 'string'){
            val = parseFloat(value)
        }
        else{
            val = value;
        }

        let outputTmep:number;
        if(inputType === 'cel' && outputType === 'fah'){
            outputTmep = val * (9/5) + 32; // cel to f
        }else if(inputType === 'fah' && outputType ==='cel'){
            outputTmep = (val-32) * (5/9);  // f to  cel
        }
        else{
            outputTmep = val;
        }


        let symbol : 'C' | 'F';
        if(!outputType){
            symbol = inputType === 'cel' ? 'C' : 'F';
        }
        else{
            symbol = inputType === 'cel' ? 'C' : 'F';
        }
        return `${outputTmep.toFixed(2)} ${symbol}`;
    }
}

//#endregion


