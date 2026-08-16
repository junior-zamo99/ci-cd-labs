import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });

  describe('project-info', () => {
    it('should return the project information', () => {
      expect(appController.getProjectInfo()).toEqual({
        name: 'ci-cd-labs',
        module: 'Módulo 4 - CI/CD',
        framework: 'NestJS',
        version: '1.0.0',
        status: 'active',
      });
    });
  });
});
