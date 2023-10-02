import supabase from "../../../services/supabase";

export async function getBookingsApi() {
  let { data: bookings, error } = await supabase.from("bookings").select("*");
  if (error) {
    console.error(error);
    throw new Error("Rooms could not be loaded");
  }
  return bookings;
}