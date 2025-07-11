import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate required fields
    const requiredFields = [
      'sourceLanguage',
      'targetLanguage', 
      'documentType',
      'wordCount',
      'deadline',
      'contactInfo'
    ];
    
    for (const field of requiredFields) {
      if (!body[field]) {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }

    // Validate contact info
    const { contactInfo } = body;
    const contactFields = ['name', 'email', 'phone', 'company'];
    for (const field of contactFields) {
      if (!contactInfo[field]) {
        return NextResponse.json(
          { error: `Missing required contact field: ${field}` },
          { status: 400 }
        );
      }
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(contactInfo.email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Validate word count
    if (body.wordCount < 1) {
      return NextResponse.json(
        { error: 'Word count must be at least 1' },
        { status: 400 }
      );
    }

    // Validate deadline is in the future
    const deadline = new Date(body.deadline);
    if (deadline <= new Date()) {
      return NextResponse.json(
        { error: 'Deadline must be in the future' },
        { status: 400 }
      );
    }

    // Calculate estimated price (example pricing logic)
    const baseRate = 0.12; // $0.12 per word
    const estimatedPrice = body.wordCount * baseRate;

    // Here you would typically:
    // 1. Save the order to a database
    // 2. Send confirmation emails
    // 3. Create a project in your project management system
    // 4. Notify the translation team

    console.log('Order submission:', body);
    console.log('Estimated price:', estimatedPrice);

    // Simulate processing delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    return NextResponse.json({
      success: true,
      message: 'Your order has been received. We will send you a detailed quote within 2 hours.',
      orderDetails: {
        estimatedPrice: estimatedPrice.toFixed(2),
        estimatedDelivery: body.deadline,
        orderReference: `ORD-${Date.now()}`
      }
    });

  } catch (error) {
    console.error('Order form error:', error);
    return NextResponse.json(
      { error: 'An error occurred while processing your order' },
      { status: 500 }
    );
  }
}