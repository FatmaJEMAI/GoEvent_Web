import { Component, OnInit } from '@angular/core';
import { Renderer2, Inject } from '@angular/core';
import { ScriptServiceService } from "../../services/services.service";

@Component({
  selector: 'app-back',
  templateUrl: './back.component.html',
  styleUrls: ['./back.component.css']
})
export class BackComponent implements OnInit {

  constructor(private renderer: Renderer2,
    private ScriptServiceService: ScriptServiceService) { }

  ngOnInit(): void {
  }

}
