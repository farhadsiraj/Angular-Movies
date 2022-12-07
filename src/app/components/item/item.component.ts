import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../../models/movie';
import { IMAGE_SIZES } from '../../constants/image-sizes';
import { TvShow } from 'src/app/models/show';
import { Item } from './item';
@Component({
  selector: 'item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() itemData: Item | null = null;

  imageSizes = IMAGE_SIZES;

  constructor() {}

  ngOnInit(): void {}
}
