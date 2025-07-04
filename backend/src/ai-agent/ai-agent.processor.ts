import { Injectable } from '@nestjs/common';
import { Process, Processor } from '@nestjs/bull';
import { Job } from 'bull';

@Injectable()
@Processor('ai-agent')
export class AiAgentProcessor {
  @Process('process-message')
  async handleProcessMessage(job: Job) {
    console.log('Processing message:', job.data);
    // Process the message with AI agent
    return { processed: true, message: job.data.message };
  }

  @Process('create-goal')
  async handleCreateGoal(job: Job) {
    console.log('Creating goal:', job.data);
    // Create goal logic
    return { created: true, goal: job.data.goal };
  }

  @Process('execute-task')
  async handleExecuteTask(job: Job) {
    console.log('Executing task:', job.data);
    // Execute task logic
    return { executed: true, taskId: job.data.taskId };
  }
} 