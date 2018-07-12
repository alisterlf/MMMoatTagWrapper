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
    console.log('this.tagsForm.valid', this.tagsForm.valid);
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
    const baseTags: string[] = value.split('\n');
    this.newTags = [];
    baseTags.forEach(tag => {
      this.getConfig(tag)
        .pipe(
          catchError(() => {
            return of(null);
          })
        )
        .subscribe(data => {
          const precessedTag = this.processTag(data);
          const index = baseTags.indexOf(tag);
          this.newTags[index] = {
            originalTag: tag,
            url: encodeURIComponent(tag),
            height: precessedTag.height,
            width: precessedTag.width,
            duration: precessedTag.duration
          };
        });
    });
  }

  processTag(xml) {
    console.log('processTag', xml);
    if (!xml) {
      return {
        height: null,
        width: null,
        duration: null
      };
    }
    const obj = this.parseXml(xml);
    const mediaFile = obj.VAST.Ad.InLine.Creatives.Creative.Linear.MediaFiles.MediaFile;
    let attributes = null;
    this.duration = obj.VAST.Ad.InLine.Creatives.Creative.Linear.Duration;

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
