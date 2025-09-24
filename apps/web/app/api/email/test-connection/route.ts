import { NextRequest, NextResponse } from 'next/server';
import { verifySelfHostedEmailConfig } from '../../../../lib/self-hosted-email';

export async function GET() {
  try {
    const result = await verifySelfHostedEmailConfig();
    
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to test email connection' },
      { status: 500 }
    );
  }
}