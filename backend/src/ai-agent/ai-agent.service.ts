import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { 
  defaultCharacter, 
  Consciousness, 
  GoalManager, 
  RoomManager, 
  TaskScheduler,
  BaseProcessor,
  LLMClient,
  ChromaVectorDB
} from '@daydreamsai/core';

@Injectable()
export class AiAgentService {
  private consciousness: Consciousness;
  private goalManager: GoalManager;
  private roomManager: RoomManager;
  private taskScheduler: TaskScheduler<any>;
  private llmClient: LLMClient;
  private vectorDB: ChromaVectorDB;

  constructor(private configService: ConfigService) {
    this.initializeAiAgent();
  }

  private async initializeAiAgent() {
    // Initialize the AI agent components from the core package
    this.llmClient = new LLMClient({
      apiKey: this.configService.get('LLM_API_KEY'),
      model: this.configService.get('LLM_MODEL', 'gpt-4'),
    });

    this.vectorDB = new ChromaVectorDB({
      url: this.configService.get('VECTOR_DB_URL', 'http://localhost:8000'),
    });

    this.consciousness = new Consciousness({
      character: defaultCharacter,
      llmClient: this.llmClient,
    });

    this.goalManager = new GoalManager({
      consciousness: this.consciousness,
    });

    this.roomManager = new RoomManager({
      consciousness: this.consciousness,
    });

    this.taskScheduler = new TaskScheduler(async (task) => {
      // Task execution logic
      console.log('Executing task:', task);
    });
  }

  async processMessage(message: string, userId: string): Promise<string> {
    // Process user message through the AI agent
    try {
      const response = await this.consciousness.processMessage(message);
      return response;
    } catch (error) {
      console.error('Error processing message:', error);
      return 'Sorry, I encountered an error processing your message.';
    }
  }

  async createGoal(goal: string, userId: string): Promise<any> {
    // Create a new goal for the AI agent
    try {
      const newGoal = await this.goalManager.createGoal(goal);
      return newGoal;
    } catch (error) {
      console.error('Error creating goal:', error);
      throw error;
    }
  }

  async getGoals(userId: string): Promise<any[]> {
    // Get all goals for a user
    try {
      const goals = await this.goalManager.getGoals();
      return goals;
    } catch (error) {
      console.error('Error getting goals:', error);
      return [];
    }
  }

  async executeTask(taskId: string): Promise<any> {
    // Execute a specific task
    try {
      const result = await this.taskScheduler.executeTask(taskId);
      return result;
    } catch (error) {
      console.error('Error executing task:', error);
      throw error;
    }
  }
} 