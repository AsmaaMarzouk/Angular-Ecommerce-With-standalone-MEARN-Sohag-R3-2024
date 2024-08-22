import { Component, OnDestroy, OnInit } from '@angular/core';
import { from, fromEvent, merge, Observable, of, Subscription, take } from 'rxjs';

@Component({
  selector: 'app-obs-and-operators',
  standalone: true,
  imports: [],
  templateUrl: './obs-and-operators.component.html',
  styleUrl: './obs-and-operators.component.scss',
})
export class ObsAndOperatorsComponent implements OnInit, OnDestroy {
  // ! => non null assertion operator
  //not need condition

  // sub!:Subscription;
  // // sub:string='';

  // // need condition
  // // safe navigation operator
  // // sub?:Subscription;
  // // sub:Subscription|undefined = undefined;
  // // sub:Subscription|null = null;
  // obs = new Observable((observer) => {
  //   console.log('Observable starts');
  //   setTimeout(() => {
  //     observer.next('AD1');
  //   }, 1000);

  //   setTimeout(() => {
  //     observer.next('AD2');
  //   }, 2000);
  //   setTimeout(() => {
  //     observer.next('AD3');
  //   }, 3000);
  //   // setTimeout(() => {
  //   //   observer.error("error in ads")
  //   // },3500)
  //   setTimeout(() => {
  //     observer.next('AD4');
  //   }, 4000);

  //   setTimeout(()=>{

  //     observer.complete();
  //   },4500)
  // });
  ngOnInit(): void {
    // success
    // next
    // this.obs.subscribe(data=>{
    //   console.log(data);

    // })

    // optional => rec as callback inside subscribe in object
    //  this.sub= this.obs.subscribe({
    //     next: (data) => {
    //       console.log(data);

    //     },
    //     error: (err) => {
    //       console.log(err);

    //     },
    //     complete: () => {
    //       console.log("compleeeeeeeeeeeeeteeeeed");

    //     },
    //   });

    // operators
    // merge
    // var obs1 = new Observable((obs) => {
    //   obs.next('observable one');
    // });
    // var obs2 = new Observable((obs) => {
    //   obs.next('observable two');
    // });

    // var obs3=merge(obs1,obs2);
    // obs3.subscribe({
    //   next:(items)=>{
    //     console.log(items);
    //   },
    //   error:(err)=>{
    //     console.log(err);

    //   }
    // })

    // create
    // of , from
    // of("ad1","ad2","ad3").subscribe(data=>{
    //   console.log(data);

    // })

    // from([1,2,3]).subscribe(data=>{
    //   console.log(data);

    // })

// var obs=fromEvent(document,'click');
// obs.subscribe(data=>{
//   console.log("hello you clicked in document");

// })

var obs=fromEvent(document,'click');
obs.pipe(take(3)).subscribe({
  next: (items)=>{
    console.log("hello you clicked in document");

  }
});



  }

  ngOnDestroy(): void {
    // if(this.sub){
    // this.sub.unsubscribe();
    // }
  }
}
