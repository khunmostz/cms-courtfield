"use client";
import dayjs from "dayjs";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
type Props = {};

type TimeSlot = {
  startTime: Date;
  endTime: Date;
};

export default function ProductId({}: Props) {
  const router = useRouter();

  const [date, setDate] = useState<Date>(new Date());
  const [showCalendar, setShowCalendar] = useState<boolean>(false);
  const [timeSlotsData, setTimeSlotsData] = useState<TimeSlot[]>([]);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<TimeSlot>();

  const toggleCalendar = () => {
    setShowCalendar(!showCalendar);
  };

  const handleCalendarChange = (newDate: any) => {
    console.log(newDate);
    setDate(newDate);
    setShowCalendar(false);
  };

  const generateTimeSlots = () => {
    let reverseDate = new Date(date);
    const startHour = 8;
    const endHour = 22;
    const interval = 2; // ชั่วโมง

    const timeSlots = [];

    for (let hour = startHour; hour <= endHour; hour += interval) {
      const startTime = new Date(reverseDate);
      startTime.setHours(hour, 0, 0, 0).toLocaleString("th-TH");

      const endTime = new Date(reverseDate);
      endTime.setHours(hour + interval, 0, 0, 0).toLocaleString("th-TH");

      timeSlots.push({
        startTime,
        endTime,
      });
    }

    // console.log(timeSlots);
    return timeSlots;
  };

  const handlePayment = () => {
    if (!selectedTimeSlot) {
      toast.error("กรุณาเลือกเวลาที่ต้องการจอง");
      return;
    }
    router.push(`/payment/test`);
  };

  useEffect(() => {
    setTimeSlotsData(generateTimeSlots());
  }, [date]);

  return (
    <div className="container mx-auto">
      <ToastContainer />
      <label>วันที่จอง:</label>
      <input
        type="text"
        value={date.toLocaleDateString()}
        readOnly={true}
        onClick={toggleCalendar}
        className="w-full p-2 border border-gray-300 rounded"
      />

      {showCalendar && (
        <Calendar
          minDate={new Date()}
          onChange={(e) => {
            let day = dayjs(e?.toString()).format("YYYY-MM-DD");
            console.log(day);
            handleCalendarChange(e);
          }}
          locale="th-TH"
          value={date}
          className="absolute bg-white p-4 border border-gray-900 shadow-lg"
        />
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4 justify-center">
        {timeSlotsData.map((item: TimeSlot, index: number) => (
          <div
            key={index}
            onClick={() => {
              setSelectedTimeSlot(item);
            }}
            className={` p-4 shadow-md flex flex-col cursor-pointer transition-all duration-300 ease-in-out hover:scale-105 ${
              selectedTimeSlot?.startTime === item.startTime
                ? "bg-green-500 text-white"
                : "bg-white"
            }`}
          >
            <h2 className="text-xl font-bold p-2 ">
              {item.startTime.toLocaleTimeString()} -{" "}
              {item.endTime.toLocaleTimeString()}
            </h2>
          </div>
        ))}
      </div>

      <div className="flex justify-end">
        <div
          onClick={handlePayment}
          className="cursor-pointer bg-green-500 text-white py-2 px-4 rounded-md mt-4 transition-all hover:scale-105"
        >
          Payment
        </div>
      </div>
    </div>
  );
}
