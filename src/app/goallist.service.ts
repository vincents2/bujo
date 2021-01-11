import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GoallistService {

  constructor() { }
  
  getGoallist(){
    return["Sport", "Lernen"];
  }

  
}
