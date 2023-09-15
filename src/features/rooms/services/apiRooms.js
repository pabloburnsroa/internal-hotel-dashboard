import supabase, { supabaseUrl } from "../../../services/supabase";

export async function getRoomsApi() {
  let { data: rooms, error } = await supabase.from("rooms").select("*");
  if (error) {
    console.error(error);
    throw new Error("Rooms could not be loaded");
  }
  return rooms;
}

export async function deleteRoomApi(id) {
  let { data, error } = await supabase.from("rooms").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Room could not be deleted");
  }

  return data;
}

export async function createEditRoomApi(newRoom, id) {
  // Check if newRoom.image already passes the path to image
  const hasImagePath = newRoom.image?.startsWith?.(supabaseUrl);

  // create imageName for upload
  const imageName = `${Math.random()}-${newRoom.image.name}`.replaceAll(
    "/",
    ""
  );

  // imagePath will either be path already stored in room or new path for new room/new image
  const imagePath = hasImagePath ? newRoom.image :`${supabaseUrl}/storage/v1/object/public/rooms/${imageName}`;

  let query = supabase.from("rooms");

  // Create room if no id of room passed into createEditRoom function
  if (!id) {
    query.from("rooms").insert([{ ...newRoom, image: imagePath }]);
  }

  if (id) {
    query
      .from("rooms")
      .update({ ...newRoom, image: imagePath })
      .eq("id", id);
  }

  const { data, error } = await query.select();

  if (error) {
    console.error(error);
    throw new Error("Room could not be created");
  }

  // Upload image

  const { error: storageError } = await supabase.storage
    .from("rooms")
    .upload(imageName, newRoom.image);

  if (storageError) {
    await supabase.from("rooms").delete().eq("id", data.id);
    console.error(storageError);
    throw new Error(
      "Room image could not be uploaded and the room was not created"
    );
  }

  return data;
}
