"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import InputField from "../InputField";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";

// ✅ Schema Fixes
const schema = z.object({
  username: z.string()
    .min(3, { message: "Username must be at least 3 characters long!" })
    .max(20, { message: "Username must be at most 20 characters long!" }),
  email: z.string().email({ message: "Invalid email address!" }),
  password: z.string().min(8, { message: "Password must be at least 8 characters long!" }),
  firstName: z.string().min(1, { message: "First name is required!" }),
  lastName: z.string().min(1, { message: "Last name is required!" }),
  phone: z.string().min(1, { message: "Phone number is required!" }),
  address: z.string().min(1, { message: "Address is required!" }),
  bloodType: z.string().min(1, { message: "Blood Type is required!" }),
  birthday: z.string().refine((val) => !isNaN(Date.parse(val)), { message: "Invalid date!" }),
  sex: z.enum(["male", "female"], { message: "Sex is required!" }),
  img: z.any(), // ✅ Fix for file input
});

type Inputs = z.infer<typeof schema>;

interface ParentFormProps {
  type: "create" | "update";
  data?: any;
  setOpen?: Dispatch<SetStateAction<boolean>>; // Optional prop fix
}

const ParentForm: React.FC<ParentFormProps> = ({ type, data, setOpen }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(schema),
    defaultValues: data, // ✅ Set default values properly
  });

  const onSubmit = handleSubmit((formData) => {
    console.log(formData);
    if (setOpen) setOpen(false); // Close modal if setOpen is provided
  });

  return (
    <form className="flex flex-col gap-8" onSubmit={onSubmit}>
      <h1 className="text-xl font-semibold">
        {type === "create" ? "Create a New Parent" : "Update Parent"}
      </h1>

      <span className="text-xs text-gray-400 font-medium">Authentication Information</span>
      <div className="flex justify-between flex-wrap gap-4">
        <InputField label="Username" name="username" register={register} error={errors.username} />
        <InputField label="Email" name="email" type="email" register={register} error={errors.email} />
        <InputField label="Password" name="password" type="password" register={register} error={errors.password} />
      </div>

      <span className="text-xs text-gray-400 font-medium">Personal Information</span>
      <div className="flex justify-between flex-wrap gap-4">
        <InputField label="First Name" name="firstName" register={register} error={errors.firstName} />
        <InputField label="Last Name" name="lastName" register={register} error={errors.lastName} />
        <InputField label="Phone" name="phone" register={register} error={errors.phone} />
        <InputField label="Address" name="address" register={register} error={errors.address} />
        <InputField label="Blood Type" name="bloodType" register={register} error={errors.bloodType} />
        <InputField label="Birthday" name="birthday" type="date" register={register} error={errors.birthday} />

        {/* ✅ Select Field Fix */}
        <div className="flex flex-col gap-2 w-full md:w-1/4">
          <label className="text-xs text-gray-500">Sex</label>
          <select
            className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full"
            {...register("sex")}
          >
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          {errors.sex && <p className="text-xs text-red-400">{errors.sex.message}</p>}
        </div>

        {/* ✅ File Upload Fix */}
        <div className="flex flex-col gap-2 w-full md:w-1/4">
          <label className="text-xs text-gray-500 flex items-center gap-2 cursor-pointer" htmlFor="img">
            <Image src="/upload.png" alt="" width={28} height={28} />
            <span>Upload a Photo</span>
          </label>
          <input type="file" id="img" {...register("img")} className="hidden" />
          {errors.img && <p className="text-xs text-red-400">{errors.img.message?.toString()}</p>}
        </div>
      </div>

      <button className="bg-blue-400 text-white p-2 rounded-md">
        {type === "create" ? "Create" : "Update"}
      </button>
    </form>
  );
};

export default ParentForm;
