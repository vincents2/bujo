import { Component, OnInit } from '@angular/core';
import { GoallistService } from './../goallist.service';
import { GoalsService } from './../services/goals.service';
import { HttpClient } from '@angular/common/http';
import { Variables, TodoItem, Scope } from './../common/common';
import { Injectable } from '@angular/core';
@Component({
  selector: 'app-goallist',
  templateUrl: './goallist.component.html',
  styleUrls: ['./goallist.component.sass']
})
export class GoallistComponent implements OnInit {
  goals;
  goalname = " ";
  constructor(service:GoallistService) {
    this.goals = service.getGoallist()
  }

  ngOnInit(): void {
  }

  Add(){
    this.goals.push(this.goalname)
    
  }
  onKeyUp(){
    alert(this.goalname);
  }

}
