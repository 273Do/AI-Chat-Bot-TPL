import React from "react";

import { Textarea } from "../ui/textarea";

const inputArea = () => {
  return (
    <div className="w-[400px]">
      <Textarea
        // placeholder="Tell us a little bit about yourself"
        className="resize-none"
        // {...field}
      />
    </div>
  );
};

export default inputArea;
