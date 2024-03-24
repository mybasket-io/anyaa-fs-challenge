import { useLoaderData } from "@remix-run/react";
import { prisma } from "~/utils/prisma.server";

export function loader() {
  return prisma.booking.findMany({});
}

export default function Bookings() {
  const bookings = useLoaderData<typeof loader>();

  return (
    <div>
      {bookings.map((booking) => (
        <div key={booking.id}>
          <p>{booking.id}</p>
          <p>{booking.name}</p>
          <p>{booking.email}</p>
        </div>
      ))}
    </div>
  );
}
