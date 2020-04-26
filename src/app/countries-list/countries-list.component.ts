import { CountriesListService } from './countries-list-service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-countries-list',
  templateUrl: './countries-list.component.html',
  styleUrls: ['./countries-list.component.css']
})
export class CountriesListComponent implements OnInit {
  data:any[];
  countriesListResponse:any[];
  isLoading: boolean = true;
  error:string = "";
  selectedItem:any = null;
  constructor(private countriesListService: CountriesListService) { }

  ngOnInit(): void {
    this.countriesListService.getCountriesData().subscribe(
      response=>{
        this.countriesListResponse = response.reverse().sort(
          (a, b) => {return b.cases - a.cases} 
        );
        this.data = this.countriesListResponse;
        this.isLoading = false;
      },
      errorMessage => {
        console.log(errorMessage);
        this.error = errorMessage;
        this.isLoading = false;
      }
    )
  }

  onSearch(searchBar) {
    if (searchBar.value.length) {
      let updatedList = this.countriesListResponse.filter((item)=>{
        return item.country.toLowerCase().includes(searchBar.value.toLowerCase());
      });
      this.data = updatedList;
    } else {
      this.data = this.countriesListResponse;
    }
  }

  onClickItem(item) {
    this.selectedItem = item;
  }

  onHandleClose() {
    this.selectedItem = null;
  }

}
