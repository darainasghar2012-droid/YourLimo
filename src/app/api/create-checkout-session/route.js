import Stripe from "stripe";
import { NextResponse } from "next/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(request) {
  try {
    const body = await request.json();
    const { vehicleName, depositAmount, customerEmail, pickup, dropoff, date, time } = body;

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      customer_email: customerEmail,
      line_items: [
        {
          price_data: {
            currency: "cad",
            product_data: {
              name: `20% Deposit - ${vehicleName}`,
              description: `${pickup} to ${dropoff} on ${date} at ${time}`,
            },
            unit_amount: Math.round(depositAmount * 100),
          },
          quantity: 1,
        },
      ],
      success_url: `${request.headers.get("origin")}/thank-you`,
      cancel_url: `${request.headers.get("origin")}/contact`,
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Stripe error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}