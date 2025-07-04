import { Controller, Post, Get, Body, Param, UseGuards, Request } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { AiAgentService } from './ai-agent.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@ApiTags('AI Agent')
@Controller('ai-agent')
export class AiAgentController {
  constructor(private readonly aiAgentService: AiAgentService) {}

  @Post('message')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Process a message with the AI agent' })
  @ApiResponse({ status: 200, description: 'Message processed successfully' })
  async processMessage(
    @Body() body: { message: string },
    @Request() req: any,
  ): Promise<{ response: string }> {
    const response = await this.aiAgentService.processMessage(body.message, req.user.userId);
    return { response };
  }

  @Post('goals')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Create a new goal' })
  @ApiResponse({ status: 201, description: 'Goal created successfully' })
  async createGoal(
    @Body() body: { goal: string },
    @Request() req: any,
  ): Promise<any> {
    return await this.aiAgentService.createGoal(body.goal, req.user.userId);
  }

  @Get('goals')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get all goals for the user' })
  @ApiResponse({ status: 200, description: 'Goals retrieved successfully' })
  async getGoals(@Request() req: any): Promise<any[]> {
    return await this.aiAgentService.getGoals(req.user.userId);
  }

  @Post('tasks/:taskId/execute')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Execute a specific task' })
  @ApiResponse({ status: 200, description: 'Task executed successfully' })
  async executeTask(@Param('taskId') taskId: string): Promise<any> {
    return await this.aiAgentService.executeTask(taskId);
  }
} 