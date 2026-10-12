import Stripe from "stripe";
import { NextResponse } from "next/server";
import { calculateDepositAmount } from "../../bookingPricing";

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid checkout request." }, { status: 400 });
  }

  if (!body || typeof body !== "object" || Array.isArray(body)) {
    return NextResponse.json({ error: "Invalid checkout request." }, { status: 400 });
  }

  const { vehicleName, distanceKm, customerEmail, pickup, dropoff, date, time } = body;
  if (
    typeof vehicleName !== "string" ||
    typeof customerEmail !== "string" ||
    typeof pickup !== "string" ||
    typeof dropoff !== "string" ||
    typeof date !== "string" ||
    typeof time !== "string" ||
    (distanceKm !== null &&
      (typeof distanceKm !== "number" || !Number.isFinite(distanceKm) || distanceKm < 0))
  ) {
    return NextResponse.json({ error: "Booking details are invalid." }, { status: 400 });
  }

  let depositAmount;
  try {
    depositAmount = calculateDepositAmount(vehicleName, distanceKm);
  } catch {
    return NextResponse.json({ error: "The selected vehicle is not available." }, { status: 400 });
  }

  const secretKey = process.env.STRIPE_SECRET_KEY;
  if (!secretKey || !/^sk_(test|live)_/.test(secretKey)) {
    return NextResponse.json(
      {
        error:
          "Stripe is not configured with a secret API key. Set STRIPE_SECRET_KEY to your Stripe secret key (starts with sk_live_ or sk_test_) and redeploy.",
      },
      { status: 500 }
    );
  }

  try {
    const stripe = new Stripe(secretKey);
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
            unit_amount: depositAmount,
          },
          quantity: 1,
        },
      ],
      success_url: `${request.nextUrl.origin}/thank-you`,
      cancel_url: `${request.nextUrl.origin}/contact`,
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Stripe error:", error);
    return NextResponse.json(
      { error: "Unable to create a Stripe Checkout session. Please try again or contact us." },
      { status: 500 }
    );
  }
}