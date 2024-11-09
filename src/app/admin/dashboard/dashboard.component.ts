import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit{

  Designation:string = "";
  Username:string = "";
  NoOfTeamMembers: number = 0;
  TotalCostOfAllProjects:number = 0;
  UpcomingProjects:number = 0;
  ProjectCost:number= 0;

  CurrentExpenditure:number = 0;
  AvailableFunds:number = 0;
  Clients:string[] = [];
  Projects:string[] = [];
  Years:number[] = [];
  TeamMemberSummary:any[] = [];
  TeamMembers:any[] = [];
  CurrentProject:string = "Project A";

  ngOnInit(): void {
    this.Designation="Team Lead";
    this.Username="John Smith";
    this.NoOfTeamMembers=54;
    this.TotalCostOfAllProjects=12;
    this.UpcomingProjects=6;
    this.ProjectCost=235656;
    this.CurrentExpenditure=98356;
    this.AvailableFunds=54466;
    this.Clients = ["ABC Tech Ltd.","DEF Soft Ltd.","XYZ Infotech Ltd."];
    this.Projects = ["Project A","Project B","Project C","Project D"];
    for (let year = 2024; year > 2015; year--) {
      this.Years.push(year);      
    }
    this.TeamMemberSummary = [
      {Region:"East", TeamMemberCount:20, TemporarilyUnAvailableMenbers:4},
      {Region:"West", TeamMemberCount:15, TemporarilyUnAvailableMenbers:1},
      {Region:"North", TeamMemberCount:17, TemporarilyUnAvailableMenbers:2},
      {Region:"South", TeamMemberCount:18, TemporarilyUnAvailableMenbers:6}
    ];
    this.TeamMembers = [
      {
        Region: "East", Members:[
          {Id:"1",Name:"Stan",Status:"Available"},
          {Id:"2",Name:"Nay",Status:"Available"},
          {Id:"3",Name:"Nepoleon",Status:"Busy"},
          {Id:"4",Name:"Naruto",Status:"Busy"},
        ]
      },
      {
        Region: "West", Members:[
          {Id:"5",Name:"Stan",Status:"Available"},
          {Id:"6",Name:"Nay",Status:"Available"},
          {Id:"7",Name:"Nepoleon",Status:"Busy"},
          {Id:"8",Name:"Naruto",Status:"Busy"},
        ]
      },
      {
        Region: "North", Members:[
          {Id:"9",Name:"Stan",Status:"Available"},
          {Id:"10",Name:"Nay",Status:"Available"},
          {Id:"11",Name:"Nepoleon",Status:"Busy"},
          {Id:"12",Name:"Naruto",Status:"Busy"},
        ]
      },
      {
        Region: "South", Members:[
          {Id:"13",Name:"Stan",Status:"Available"},
          {Id:"14",Name:"Nay",Status:"Available"},
          {Id:"15",Name:"Nepoleon",Status:"Busy"},
          {Id:"16",Name:"Naruto",Status:"Busy"},
        ]
      }
    ]
  }
  onProjectChange($event: any) {
    if ($event.target.innerHTML == "Project A") {
      this.ProjectCost=235656;
      this.CurrentExpenditure=98356;
      this.AvailableFunds=54466;
    } else if ($event.target.innerHTML == "Project B") {
      this.ProjectCost=299;
      this.CurrentExpenditure=100;
      this.AvailableFunds=120;
    } else if ($event.target.innerHTML == "Project C") {
      this.ProjectCost=988;
      this.CurrentExpenditure=948;
      this.AvailableFunds=202;
    } else if ($event.target.innerHTML == "Project D") {
      this.ProjectCost=9934;
      this.CurrentExpenditure=345;
      this.AvailableFunds=453;
    } 
    this.CurrentProject = $event.target.innerHTML;
  }
}
