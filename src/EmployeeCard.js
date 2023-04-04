import React from "react";
import { Card } from "flowbite-react";

const EmployeeCard = () => {
  return (
    <div className="max-w-xs">
      <Card imgSrc="https://thumbs.dreamstime.com/b/fake-smile-businessman-face-business-man-71892900.jpg">
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Iwan Setiawan
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          5367 Hansen Viaduct, San Antonio, Alabama
        </p>
      </Card>
    </div>
  );
};

export default EmployeeCard;
