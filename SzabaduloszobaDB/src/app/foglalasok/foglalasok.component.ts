import { Component, OnInit } from '@angular/core';
import { ApiService } from 'path-to-your-api-service'; // Adja hozzá az API szolgáltatás elérését

@Component({
  selector: 'app-foglalasok',
  templateUrl: './foglalasok.component.html',
  styleUrls: ['./foglalasok.component.css']
})
export class FoglalasokComponent implements OnInit {
  foglalasok: any[] = []; // Az API által visszaadott foglalások tömbje

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    // Amikor a komponens betöltődik, lekéri a foglalásokat az API-tól
    this.apiService.getFoglalasok().subscribe(data => {
      this.foglalasok = data;
    });
  }
}