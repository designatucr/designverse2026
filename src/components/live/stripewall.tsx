import Stripe from "@/components/live/stripe";

const StripeWall = () => {
  return (
    <div className="flex w-full justify-between gap-10">
      <Stripe />
      <Stripe />
      <Stripe />
      <Stripe />
      <Stripe />
    </div>
  );
};

export default StripeWall;
