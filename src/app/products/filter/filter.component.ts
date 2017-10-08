import { Component, OnInit, Input } from '@angular/core';

import { CategoryService } from '../../category.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  categories$;
  @Input('activeCategory') activeCategory;

  constructor(private categoryService: CategoryService) {
    this.categories$ = this.categoryService.getCategories();
  }

  ngOnInit() {
  }

}
