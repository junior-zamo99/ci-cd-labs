import { Injectable } from '@nestjs/common';

export interface ProjectInfo {
  name: string;
  module: string;
  framework: string;
  version: string;
  status: string;
}

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getProjectInfo(): ProjectInfo {
    return {
      name: 'ci-cd-labs',
      module: 'Módulo 4 - CI/CD',
      framework: 'NestJS',
      version: '1.0.0',
      status: 'active',
    };
  }
}
