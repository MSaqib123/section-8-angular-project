//#region  2. Making Sense of Pipes
// import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';

// @Component({
//   selector: 'app-root',
//   imports: [RouterOutlet],
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.css'
// })
// export class AppComponent {
//   currentDate = new Date();
//   currentTemperaturs = {
//     berlin: 4.2749812,
//     newYork: 18.1214,
//     paris: 72.1209001,
//     chicago: 65.0775238,
//   };

//   historicTemperatures = [
//     25, 37, 19, -4, 28, 21, 19, 28, 33, 31, 9, 11, 5, -12, -5,
//   ];

//   onReset(index: number) {
//     this.historicTemperatures[index] = 18;
//   }
// }

//#endregion


//#region  3. Using Built-in Pipes

// import { DatePipe, DecimalPipe } from '@angular/common';
// import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';

// @Component({
//   selector: 'app-root',
//   imports: [RouterOutlet,DatePipe,DecimalPipe],
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.css'
// })
// export class AppComponent {
//   currentDate = new Date();
//   currentTemperaturs = {
//     berlin: 4.2749812,
//     newYork: 18.1214,
//     paris: 72.1209001,
//     chicago: 65.0775238,
//   };

//   historicTemperatures = [
//     25, 37, 19, -4, 28, 21, 19, 28, 33, 31, 9, 11, 5, -12, -5,
//   ];

//   onReset(index: number) {
//     this.historicTemperatures[index] = 18;
//   }
// }

//#endregion


//#region  5,6,7,8,9

// import { DatePipe, DecimalPipe } from '@angular/common';
// import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
// import { TemperaturePipe } from './temperature.pipe';
// import { SortPipe } from './sort.pipe';

// @Component({
//   selector: 'app-root',
//   imports: [RouterOutlet,DatePipe,DecimalPipe,TemperaturePipe,SortPipe],
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.css'
// })
// export class AppComponent {
//   currentDate = new Date();
//   currentTemperaturs = {
//     berlin: 4.2749812,
//     newYork: 18.1214,
//     paris: 72.1209001,
//     chicago: 65.0775238,
//   };

//   historicTemperatures = [
//     25, 37, 19, -4, 28, 21, 19, 28, 33, 31, 9, 11, 5, -12, -5,
//   ];

//   onReset(index: number) {
//     this.historicTemperatures[index] = 18;
//   }
// }

//#endregion



//#region  10. Understanding How Pipes Are Executed

// import { DatePipe, DecimalPipe } from '@angular/common';
// import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
// import { TemperaturePipe } from './temperature.pipe';
// import { SortPipe } from './sort.pipe';

// @Component({
//   selector: 'app-root',
//   imports: [RouterOutlet,DatePipe,DecimalPipe,TemperaturePipe,SortPipe],
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.css'
// })
// export class AppComponent {
//   currentDate = new Date();
//   currentTemperaturs = {
//     berlin: 4.2749812,
//     newYork: 18.1214,
//     paris: 72.1209001,
//     chicago: 65.0775238,
//   };

//   historicTemperatures = [
//     25, 37, 19, -4, 28, 21, 19, 28, 33, 31, 9, 11, 5, -12, -5,
//   ];

//   onReset(index: number) {
//     //this.historicTemperatures[index] = 18;
//     const newTemps = [...this.historicTemperatures]
//     newTemps[index] =18;
//     this.historicTemperatures = newTemps;
//   }
// }

//#endregion





//#region  11. Pure & Impure Pipes

// import { DatePipe, DecimalPipe } from '@angular/common';
// import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
// import { TemperaturePipe } from './temperature.pipe';
// import { SortPipe } from './sort.pipe';

// @Component({
//   selector: 'app-root',
//   imports: [RouterOutlet,DatePipe,DecimalPipe,TemperaturePipe,SortPipe],
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.css'
// })
// export class AppComponent {
//   currentDate = new Date();
//   currentTemperaturs = {
//     berlin: 4.2749812,
//     newYork: 18.1214,
//     paris: 72.1209001,
//     chicago: 65.0775238,
//   };

//   historicTemperatures = [
//     25, 37, 19, -4, 28, 21, 19, 28, 33, 31, 9, 11, 5, -12, -5,
//   ];

//   onReset(index: number) {
//     this.historicTemperatures[index] = 18;
//     // const newTemps = [...this.historicTemperatures]
//     // newTemps[index] =18;
//     // this.historicTemperatures = newTemps;
//   }
// }

//#endregion





//#region  12. Pipe Limitations & When Not To Use Them

import { DatePipe, DecimalPipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TemperaturePipe } from './temperature.pipe';
import { SortPipe } from './sort.pipe';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,DatePipe,DecimalPipe,TemperaturePipe,SortPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  currentDate = new Date();
  currentTemperaturs = {
    berlin: 4.2749812,
    newYork: 18.1214,
    paris: 72.1209001,
    chicago: 65.0775238,
  };

  historicTemperatures = [
    25, 37, 19, -4, 28, 21, 19, 28, 33, 31, 9, 11, 5, -12, -5,
  ];
  
  constructor() {
    this.historicTemperatures.sort((a,b) => a>b? 1: -1);  
  }

  onReset(index: number) {
    this.historicTemperatures[index] = 18;
  }
}

//#endregion