import { useForm } from "react-hook-form";
import Button from "../../../components/ui/Button";
import FileInput from "../../../components/ui/FileInput";
import Form from "../../../components/ui/Form";
import FormRow from "../../../components/ui/FormRow";
import Input from "../../../components/ui/Input";
import { Textarea } from "../../../components/ui/Textarea";
import { useCreateRoom, useEditRoom } from "../hooks/useRooms";

function CreateRoomForm({ roomToEdit = {} }) {
  const { id: editId, ...editValues } = roomToEdit;
  const isEdit = Boolean(editId);
  const {
    register,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: isEdit ? editValues : {},
  });

  const { isCreating, createRoom } = useCreateRoom();
  const { isEditing, editRoom } = useEditRoom();
  const isLoading = isCreating || isEditing

  function onSubmit(data) {
    // console.log(data)
    createRoom({ ...data, image: data.image[0] });
  }

  function onError(err) {
    console.error(err);
  }
  return (
    <Form onSubmit={handleSubmit(onSubmit, onError)}>
      <FormRow label="Room name" error={errors?.name?.message}>
        <Input
          type="text"
          id="name"
          //   disabled={isCreating}
          {...register("name", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow label="Maximum capacity" error={errors?.maxCapacity?.message}>
        <Input
          type="number"
          id="max_capacity"
            disabled={isLoading}
          {...register("max_capacity", {
            required: "This field is required",
            min: {
              value: 1,
              message: "Capacity should be at least 1",
            },
          })}
        />
      </FormRow>

      <FormRow label="Regular price" error={errors?.regularPrice?.message}>
        <Input
          type="number"
          id="price"
            disabled={isLoading}
          {...register("price", {
            required: "This field is required",
            min: {
              value: 1,
              message: "Capacity should be at least 1",
            },
          })}
        />
      </FormRow>

      <FormRow label="Discount" error={errors?.discount?.message}>
        <Input
          type="number"
          id="discount"
            disabled={isLoading}
          defaultValue={0}
          {...register("discount", {
            required: "This field is required",
            validate: (value) =>
              value <= getValues().regularPrice ||
              "Discount should be less than regular price",
          })}
        />
      </FormRow>

      <FormRow
        label="Description for website"
        disabled={isLoading}
        error={errors?.description?.message}
      >
        <Textarea
          type="number"
          id="description"
          defaultValue=""
            disabled={isLoading}
          {...register("description", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow label="Room photo">
        <FileInput
          id="image"
          accept="image/*"
          {...register("image", {
            required: isEdit ? false : "This field is required",
          })}
        />
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button
          variation="secondary"
          type="reset"
          onClick={() => {
            () => isEdit(false);
          }}
        >
          Cancel
        </Button>
        <Button>{isEdit ? `Edit room` : `Add room`}</Button>
      </FormRow>
    </Form>
  );
}
export default CreateRoomForm;
