import { useGlobalContext } from "@/components/common/context";
import { Popover, Text, Button } from "@mantine/core";
import Image from "next/image";
import { useState, useEffect } from "react";

const url = "https://ats-admin-dashboard.onrender.com/api/job/job_notification";

function NotificationPop() {
  const [notification, setNotification] = useState(null);
  const { notifyNumber, setNotifyNumber } = useGlobalContext();
  const notificationFetch = async () => {
    const token = JSON.parse(localStorage.getItem("my-user"))?.tokens?.access;
    try {
      const res = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await res.json();
      console.log(data.results);
      setNotification(data.results);
      setNotifyNumber(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    notificationFetch();
  }, []);

  return (
    <Popover width={350} position="bottom" withArrow shadow="md">
      <Popover.Target>
        <div>
          <Image
            src={"/images/notification.png"}
            alt="notification"
            width={30}
            height={30}
          />
        </div>
      </Popover.Target>
      <Popover.Dropdown className="absolute right-[20px]">
        <section className="flex flex-col gap-3">
          <h2 className="text-base font-bold text-[#18181B]">Notification</h2>
          {notification?.map((items) => {
            return (
              <article
                key={items.id}
                className="flex items-center justify-between border-b border-[#ccc] pb-3"
              >
                <div className="flex items-center gap-3">
                  <Image
                    src={"/images/greencase.svg"}
                    alt=""
                    width={40}
                    height={40}
                  />
                  <div className="flex flex-col gap-1">
                    <h2 className="text-sm font-bold text-[#252735]">
                      {items.action_type}
                    </h2>
                    <p className="text-sm text-[#5E606A]">
                      by <span className="underline">{items.actor}</span>
                    </p>
                  </div>
                </div>
                <p className="text-sm text-[#5E606A]">{items.get_timesince}</p>
              </article>
            );
          })}
        </section>
      </Popover.Dropdown>
    </Popover>
  );
}

export default NotificationPop;
