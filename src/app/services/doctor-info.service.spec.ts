import { DoctorInfoService as ReviewInfoService} from './doctor-info.service';
import { TestBed } from '@angular/core/testing';


describe('ReviewInfoService', () => {
  let service: ReviewInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReviewInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
