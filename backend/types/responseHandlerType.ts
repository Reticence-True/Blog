import type { Response } from 'express';

export interface CustomResponse extends Response {
  success: (data?: any) => this; // 返回当前 Response 实例
  fail: (code?: number, message?: string | string[]) => this;
}
