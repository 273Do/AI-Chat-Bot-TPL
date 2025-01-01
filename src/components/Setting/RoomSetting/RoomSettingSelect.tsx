import React from "react";

const RoomSettingSelect = () => {
  return (
    <>
      <p className="text-md mt-4 font-bold">ルームモードの設定</p>
      <div className="grid-row-3 my-2 grid h-52 gap-3">
        <div className="flex cursor-pointer flex-col items-center justify-center rounded-lg border border-border hover:bg-muted ">
          01
        </div>
        <div className="flex cursor-pointer flex-col items-center justify-center rounded-lg border border-border hover:bg-muted ">
          02
        </div>
        <div className="flex cursor-pointer flex-col items-center justify-center rounded-lg border border-border hover:bg-muted ">
          03
        </div>
      </div>
    </>
  );
};

export default RoomSettingSelect;
