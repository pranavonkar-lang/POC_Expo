import React from "react";
import HomeScreen from "./View";
import screensPath from "@/app/screensPath";
import NavigationService from "@/app/services/navigationServices";

export default function Container(props: any) {
  const goNext = () => {
    NavigationService.navigateWithOrigin(
      screensPath.settings2,
      screensPath.tabs
    );
  };

  return <HomeScreen goNext={goNext} props={props}/>;
}
