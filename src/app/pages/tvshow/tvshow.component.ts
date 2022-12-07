import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Item } from 'src/app/components/item/item';
import { mapTvShowToItem, ShowReview, TvShow, TvShowCredits, TvShowImages, TvShowVideo } from 'src/app/models/show';
import { TvShowsService } from 'src/app/services/tvshows.service';
import { IMAGE_SIZES } from '../../constants/image-sizes';
import ISO6391 from 'iso-639-1';

@Component({
  selector: 'tvShow',
  templateUrl: './tvshow.component.html',
  styleUrls: ['./tvshow.component.scss']
})
export class TvShowComponent implements OnInit, OnDestroy {
  tvShow: TvShow | null = null;
  tvShowBanner: Item | null = null;
  tvShowVideos: TvShowVideo[] = [];
  tvShowImages: TvShowImages | null = null;
  tvShowCredits: TvShowCredits | null = null;
  showReviews: ShowReview[] = [];
  imagesSizes = IMAGE_SIZES;

  constructor(private route: ActivatedRoute, private tvShowsService: TvShowsService) {}

  ngOnInit(): void {
    this.route.params.pipe().subscribe(({ id }) => {
      this.getTvShow(id);
      this.getTvShowVideos(id);
      this.getTvShowImages(id);
      this.getTvShowCredits(id);
      this.getShowReviews(id);
    });
  }

  ngOnDestroy() {}

  getTvShow(id: string) {
    this.tvShowsService.getTvShow(id).subscribe((tvShowData) => {
      this.tvShowBanner = mapTvShowToItem(tvShowData);
      this.tvShow = tvShowData;
      this.tvShow.original_language = ISO6391.getName(this.tvShow.original_language);
    });
  }

  getTvShowVideos(id: string) {
    this.tvShowsService.getTvShowVideos(id).subscribe((tvShowVideosData) => {
      this.tvShowVideos = tvShowVideosData;
    });
  }

  getTvShowImages(id: string) {
    this.tvShowsService.getTvShowImages(id).subscribe((tvShowImagesData) => {
      this.tvShowImages = tvShowImagesData;
    });
  }

  getTvShowCredits(id: string) {
    this.tvShowsService.getTvShowCredits(id).subscribe((tvShowCreditsData) => {
      this.tvShowCredits = tvShowCreditsData;
    });
  }
  getShowReviews(id: string) {
    this.tvShowsService.getShowReviews(id).subscribe((showReviewData) => {
      this.showReviews = showReviewData;
    });
  }
}
