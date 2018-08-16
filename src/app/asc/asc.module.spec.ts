import { AscModule } from './asc.module';

describe('AscModule', () => {
  let ascModule: AscModule;

  beforeEach(() => {
    ascModule = new AscModule();
  });

  it('should create an instance', () => {
    expect(ascModule).toBeTruthy();
  });
});
