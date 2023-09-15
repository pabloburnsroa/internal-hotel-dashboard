import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  createEditRoomApi,
  deleteRoomApi,
  getRoomsApi,
} from "../services/apiRooms";
import toast from "react-hot-toast";

// GET ROOMS STORED IN REACT-QUERY
export function useGetRooms() {
  const {
    isLoading,
    data: rooms,
    error,
  } = useQuery({
    queryKey: ["rooms"],
    queryFn: getRoomsApi,
  });
  return { isLoading, rooms, error };
}

// DELETE ROOM STORED IN REACT-QUERY
export function useDeleteRoom() {
  const queryClient = useQueryClient();
  const { isLoading: isDeleting, mutate: deleteRoom } = useMutation({
    mutationFn: deleteRoomApi,
    onSuccess: () => {
      toast.success("Room has been deleted");
      queryClient.invalidateQueries({ queryKey: ["rooms"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isDeleting, deleteRoom };
}


// CREATE ROOM
export function useCreateRoom() {
  const queryClient = useQueryClient();

  const { mutate: createRoom, isLoading: isCreating } = useMutation({
    mutationFn: createEditRoomApi,
    onSuccess: () => {
      toast.success("New room successfully created");
      queryClient.invalidateQueries({ queryKey: ["rooms"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isCreating, createRoom };
}

// EDIT ROOM
export function useEditRoom() {
  const queryClient = useQueryClient();

  const { mutate: editRoom, isLoading: isEditing } = useMutation({
    mutationFn: ({ newRoomData, id }) => createEditRoomApi(newRoomData, id),
    onSuccess: () => {
      toast.success("Room successfully edited");
      queryClient.invalidateQueries({ queryKey: ["rooms"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { editRoom, isEditing };
}
