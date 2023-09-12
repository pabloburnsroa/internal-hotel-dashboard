import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { deleteRoomApi, getRooms } from "../services/apiRooms";

export function useRooms() {
  const {
    isLoading,
    data: rooms,
    error,
  } = useQuery({
    queryKey: ["rooms"],
    queryFn: getRooms,
  });
  return { isLoading, rooms, error };
}

export function useDeleteRoom() {
  const queryClient = useQueryClient();
  const { isLoading: isDeleting, mutate: deleteRoom } = useMutation({
    mutationFn: deleteRoomApi,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["rooms"] });
    },
    onError: (err) => alert(err.message),
  });

  return { isDeleting, deleteRoom };
}
