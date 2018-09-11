import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgxXml2jsonService } from 'ngx-xml2json';
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators } from '../../node_modules/@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public tagsForm: FormGroup;
  duration: string;
  encodedDuration: string;
  encodedUrl: string;
  height: number;
  width: number;
  initTag: string;
  newTags: any[];
  clipboard: string;
  oldTags: string[];
  constructor(
    private ngxXml2jsonService: NgxXml2jsonService,
    private http: HttpClient,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.tagsForm = this.fb.group({
      moatTags: ['', Validators.required]
    });
  }
  onSubmit(): void {
    if (this.tagsForm.valid) {
      this.getTag(this.tagsForm.get('moatTags').value);
    }
  }
  reset(): void {
    this.newTags = null;
  }

  getTag(value): void {
    if (value === '') {
      return;
    }
    this.oldTags = value.split('\n');
    this.newTags = [];
    this.oldTags.forEach(tag => {
      this.getConfig(tag)
        .pipe(
          catchError((err, caught) => {
            console.error('Could not fetch data!:', err, caught);
            return of(null);
          })
        )
        .subscribe(data => {
          const precessedTag = data ? this.processTag(data) : null;
          const index = this.oldTags.indexOf(tag);
          const newTag = precessedTag
            ? 'https://svastx.moatads.com/mediamathvpaid176399725163/template.xml?' +
              'level1=[AD_ATTR.advertiser]&level2=[AD_ATTR.campaign]&level3=[AD_ATTR.strategy]&level4=[AD_ATTR.creative]&' +
              'slicer1=[BID_ATTR.site]&ad_width=' +
              precessedTag.width +
              '&ad_height=' +
              precessedTag.height +
              '&ad_title=MEDIAMATH_VPAID_Template_Title_Asset&ad_duration=' +
              precessedTag.duration +
              '&zMoatBidId=[BID_ATTR.bid_id]&zMoatOrgID=[AD_ATTR.organization]&tmode=2&vast_url=' +
              encodeURIComponent(tag)
            : 'ERROR!';
          this.newTags[index] = {
            originalTag: tag,
            newTag: newTag
          };
          this.clipboard = '';
          this.newTags.forEach(curTag => {
            this.clipboard += curTag && curTag.newTag ? curTag.newTag + '\n' : 'ERROR! \n';
          });
        });
    });
  }

  processTag(xml) {
    if (!xml) {
      return {
        height: null,
        width: null,
        duration: null
      };
    }
    const obj = this.parseXml(xml);
    const creative = obj.VAST.Ad.InLine.Creatives.Creative.Linear
      ? obj.VAST.Ad.InLine.Creatives.Creative
      : obj.VAST.Ad.InLine.Creatives.Creative[0];
    const mediaFile = creative.Linear.MediaFiles.MediaFile;
    let attributes = null;
    this.duration = creative.Linear.Duration;

    if (mediaFile.length !== undefined) {
      attributes = mediaFile.find(x => x['@attributes'].type === 'application/javascript')[
        '@attributes'
      ];
    } else {
      attributes = mediaFile['@attributes'];
    }

    this.height = attributes.height;
    this.width = attributes.width;
    this.encodedDuration = encodeURIComponent(this.duration);
    return {
      height: attributes.height,
      width: attributes.width,
      duration: encodeURIComponent(this.duration)
    };
  }
  getConfig(url) {
    return this.http.get(url, { responseType: 'text' });
  }

  private parseXml(xml: string) {
    const parser = new DOMParser();
    const parsedXml = parser.parseFromString(xml, 'text/xml');
    const obj = <any>this.ngxXml2jsonService.xmlToJson(parsedXml);
    return obj;
  }
}
