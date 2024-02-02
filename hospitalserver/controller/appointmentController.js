import { AppointmentModel } from "../model/appointmentModel.js";

export const getUserAppointment = async (req, res) => {
  const { sort, specialization, search } = req.query;

  let query = {};
  let sortOptions = { date: 1 };

  if (specialization) {
    query.specialization = specialization;
  }

  if (search) {
    query.name = { $regex: new RegExp(search, "i") };
  }

  if (sort === "desc") {
    sortOptions = { date: -1 };
  }
  try {
    const user = await AppointmentModel.find(query).sort(sortOptions);
    res.status(200).json({ user });
  } catch (error) {
    res
      .status(500)
      .json({ message: "error while calling the getUserAppointment function" });
  }
};

export const createUserAppointment = async (req, res) => {
  const {
    name,
    image,
    specialization,
    experience,
    location,
    date,
    slots,
    fee,
  } = req.body;
  try {
    const user = new AppointmentModel({
      name,
      image,
      specialization,
      experience,
      location,
      date,
      slots,
      fee,
    });
    await user.save();
    res.status(201).json({ message: "added successfully", user });
  } catch (error) {
    res.status(500).json({ message: "error" });
  }
};
export const updateUserAppointment = async (req, res) => {
  try {
    const { id } = req.params;
    const userExist = await AppointmentModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json({ message: "updated successfully", userExist });
  } catch (error) {
    res.status(500).json({ message: "error" });
  }
};
export const deleteUserAppointment = async (req, res) => {
  try {
    const { id } = req.params;
    await AppointmentModel.findByIdAndDelete(id);
    res.status(200).json({ message: "deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "error while deleting" });
  }
};
