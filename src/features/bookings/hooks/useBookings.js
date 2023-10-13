import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { RESULTS_PER_PAGE } from '../../../utils/constants'
import { getBookingsApi } from "../services/apiBookings";

export function useBookings() {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();

  // FILTER
  const filterValue = searchParams.get("status");
  const filter =
    !filterValue || filterValue === "all"
      ? null
      : { field: "status", value: filterValue };
  // { field: "totalPrice", value: 5000, method: "gte" };

  // SORT
  const sortByRaw = searchParams.get("sortBy") || "startDate-desc";
  const [field, direction] = sortByRaw.split("-");
  const sortBy = { field, direction };

  // PAGINATION
  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  // QUERY
  const {
    isLoading,
    data: { data: bookings, count } = {},
    error,
  } = useQuery({
    queryKey: ["bookings", filter, sortBy, page],
    queryFn: () => getBookingsApi({ filter, sortBy, page }),
  });

  // PRE-FETCHING
  // ONLY RUN PRE-FETCHING IF WE ARE NOT ON LAST PAGE
  const pageCount = Math.ceil(count / RESULTS_PER_PAGE);

  if (page < pageCount)
    queryClient.prefetchQuery({
      queryKey: ["bookings", filter, sortBy, page + 1],
      queryFn: () => getBookingsApi({ filter, sortBy, page: page + 1 }),
    });
  // PRE-FETCH PREVIOUS PAGE IF PAGE > 1
  if (page > 1)
    queryClient.prefetchQuery({
      queryKey: ["bookings", filter, sortBy, page - 1],
      queryFn: () => getBookingsApi({ filter, sortBy, page: page - 1 }),
    });

  return { isLoading, error, bookings, count };
}