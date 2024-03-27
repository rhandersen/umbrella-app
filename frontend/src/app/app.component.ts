import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

interface FactResponse {
  fact: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  response$: Observable<FactResponse>;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getFact();
  }

  private getFact() {
    this.response$ = this.http.get<FactResponse>('/api/fact');
  }
}
