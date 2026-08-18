import { AppService } from './app.service';

describe('AppService', () => {
  let appService: AppService;

  beforeEach(() => {
    appService = new AppService();
  });

  describe('getHello', () => {
    it('should return the welcome message', () => {
      expect(appService.getHello()).toBe('Hello World!');
    });
  });

  describe('getProjectInfo', () => {
    it('should return the complete project information', () => {
      expect(appService.getProjectInfo()).toEqual({
        name: 'ci-cd-labs',
        module: 'Módulo 4 - CI/CD',
        framework: 'NestJS',
        version: '1.0.0',
        status: 'active',
      });
    });

    it('should identify the project as active', () => {
      expect(appService.getProjectInfo().status).toBe('active');
    });
  });
});
