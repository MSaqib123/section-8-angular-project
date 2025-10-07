//#region
// import { Pipe, PipeTransform } from '@angular/core';

// @Pipe({
//   name: 'sort'
// })
// export class SortPipe implements PipeTransform {

//   transform(value: string[] | number[], direction:'asc' | 'desc' = 'asc') {
//     const sorted = [...value] // seprad operator
//     sorted.sort((a,b)=>{
//       if(direction === 'asc'){
//         return a>b ? 1 : -1;
//       }
//       else{
//         return a>b ? -1 : 1;
//       }
//     });
//     return sorted;
//   }

// }

//#endregion




//#region  11. Pure & Impure Pipes

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  pure:false
})
export class SortPipe implements PipeTransform {

  transform(value: string[] | number[], direction:'asc' | 'desc' = 'asc') {
    const sorted = [...value] // seprad operator
    sorted.sort((a,b)=>{
      if(direction === 'asc'){
        return a>b ? 1 : -1;
      }
      else{
        return a>b ? -1 : 1;
      }
    });
    return sorted;
  }
}

//#endregion
