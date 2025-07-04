import { Module } from '@nestjs/common';
import { AiAgentController } from './ai-agent.controller';
import { AiAgentService } from './ai-agent.service';
import { AiAgentProcessor } from './ai-agent.processor';

@Module({
  controllers: [AiAgentController],
  providers: [AiAgentService, AiAgentProcessor],
  exports: [AiAgentService],
})
export class AiAgentModule {} 