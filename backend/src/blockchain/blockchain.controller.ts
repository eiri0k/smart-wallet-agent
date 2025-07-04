import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { BlockchainService } from './blockchain.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@ApiTags('Blockchain')
@Controller('blockchain')
export class BlockchainController {
  constructor(private readonly blockchainService: BlockchainService) {}

  @Get('balance/:walletAddress')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get wallet balance' })
  @ApiResponse({ status: 200, description: 'Balance retrieved successfully' })
  async getBalance(@Param('walletAddress') walletAddress: string) {
    const balance = await this.blockchainService.getBalance(walletAddress);
    return { walletAddress, balance };
  }

  @Get('account/:walletAddress')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get account information' })
  @ApiResponse({ status: 200, description: 'Account info retrieved successfully' })
  async getAccountInfo(@Param('walletAddress') walletAddress: string) {
    return await this.blockchainService.getAccountInfo(walletAddress);
  }

  @Get('recent-blockhash')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get recent blockhash' })
  @ApiResponse({ status: 200, description: 'Blockhash retrieved successfully' })
  async getRecentBlockhash() {
    const blockhash = await this.blockchainService.getRecentBlockhash();
    return { blockhash };
  }
} 