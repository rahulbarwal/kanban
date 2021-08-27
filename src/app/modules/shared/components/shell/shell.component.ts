import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { map, shareReplay } from "rxjs/operators";
@Component({
  selector: 'kanban-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit {

  isMobileScreen$ = this._bpObserver.observe([Breakpoints.Handset])
    .pipe(
      map(result => result.matches),
      shareReplay());
  constructor(private _bpObserver: BreakpointObserver) { }

  ngOnInit(): void {
  }

}
