import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUrlComponent } from './create-url.component';
import { UrlService } from '../../services/url.service';
import { of } from 'rxjs';

describe('CreateUrlComponent', () => {
  let component: CreateUrlComponent;
  let fixture: ComponentFixture<CreateUrlComponent>;
  let urlService: jasmine.SpyObj<UrlService>;

  beforeEach(async () => {
    const urlServiceSpy = jasmine.createSpyObj('UrlService', [
      'generateShortUrl',
    ]);

    await TestBed.configureTestingModule({
      declarations: [CreateUrlComponent],
      providers: [{ provide: UrlService, useValue: urlServiceSpy }],
    }).compileComponents();

    fixture = TestBed.createComponent(CreateUrlComponent);
    component = fixture.componentInstance;
    urlService = TestBed.inject(UrlService) as jasmine.SpyObj<UrlService>;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should generate short URL', () => {
    const mockResponse = { shortUrl: '38549skd' };
    urlService.generateShortUrl.and.returnValue(of(mockResponse));

    component.longUrl = 'http://long.url';
    component.createShortUrl();

    expect(urlService.generateShortUrl).toHaveBeenCalledWith('http://long.url');
    expect(component.shortUrl).toBe('38549skd');
  });
});
