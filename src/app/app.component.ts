import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgxXml2jsonService } from 'ngx-xml2json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  duration: string;
  encodedDuration: string;
  encodedUrl: string;
  height: number;
  width: number;
  initTag: string;
  // tslint:disable-next-line:max-line-length
  xml = `<VAST xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="vast_2.0.1-creativeView.xsd" version="2.0"><Ad id="moat_ad"><InLine><AdSystem>2.0</AdSystem><AdTitle>Vick_-_PG1_Vick_Winter_Janeiro_2018_Brazil-23562901</AdTitle><Impression/><Creatives><Creative><Linear><Duration>00:00:15</Duration><MediaFiles><MediaFile type="application/javascript" apiFramework="VPAID" height="360" width="640" delivery="progressive"><![CDATA[https://svastx.moatads.com/iprospectpgbrazilsizmekvideo327190469710/moatwrapper.js#vast=https%3a%2f%2fbs.serving-sys.com%2fServing%3fcn%3ddisplay%26c%3d23%26pl%3dVAST%26pli%3d23562901%26PluID%3d0%26pos%3d5815%26ord%3d88178920%26cim%3d1&level1=851181&level2=MediaMath%20BR%20-%20ROS-Video&level3=23562901&level4=vpaid&slicer1=undefined&slicer2=undefined&pcode=iprospectpgbrazilsizmekvideo327190469710&spvb=1]]></MediaFile></MediaFiles></Linear></Creative></Creatives></InLine></Ad></VAST>`;
  constructor(
    private ngxXml2jsonService: NgxXml2jsonService,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    // this.init();
    // tslint:disable-next-line:max-line-length
    this.initTag = 'https://svastx.moatads.com/iprospectpgbrazilsizmekvideo327190469710/Vick_-_PG1_Vick_Winter_Janeiro_2018_Brazil-23562901_js.xml';
  }

  getTag(value): void {
    this.encodedUrl = encodeURIComponent(value);
    this.getConfig(value).subscribe(data => {
      this.processTag(data);
    });
  }

  processTag(xml) {
    const obj = this.parseXml(xml);
    const mediaFile = obj.VAST.Ad.InLine.Creatives.Creative.Linear.MediaFiles.MediaFile;
    let attributes = null;
    this.duration = obj.VAST.Ad.InLine.Creatives.Creative.Linear.Duration;
    console.log(obj.VAST.Ad.InLine.Creatives.Creative.Linear.MediaFiles.MediaFile);

    if (mediaFile.length !== undefined) {
      attributes = mediaFile.find(x => x['@attributes'].type === 'application/javascript');
    } else {
      attributes = mediaFile;
    }

    this.height = attributes.height;
    this.width = attributes.width;
    this.encodedDuration = encodeURIComponent(this.duration);
  }
  getConfig(url) {
    const headers = new HttpHeaders({ 'Content-Type': 'text/xml' }).set(
      'Accept',
      'text/xml'
    );
    return this.http.get(url, { responseType: 'text' });
  }

  private init() {
    const obj = this.parseXml(this.xml);
    this.duration = obj.VAST.Ad.InLine.Creatives.Creative.Linear.Duration;
    this.height =
      obj.VAST.Ad.InLine.Creatives.Creative.Linear.MediaFiles.MediaFile[
        '@attributes'
      ].height;
    this.width =
      obj.VAST.Ad.InLine.Creatives.Creative.Linear.MediaFiles.MediaFile[
        '@attributes'
      ].width;
    this.encodedDuration = encodeURIComponent(this.duration);
  }

  private parseXml(xml: string) {
    const parser = new DOMParser();
    const parsedXml = parser.parseFromString(xml, 'text/xml');
    const obj = <any>this.ngxXml2jsonService.xmlToJson(parsedXml);
    return obj;
  }
}
