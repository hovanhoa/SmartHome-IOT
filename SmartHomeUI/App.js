import AppNavigator from "./app.navigator.js";
import React, { useState } from "react";
import AppContext from "./screens/AppContext.js";

export default function App() {
  //Global Data
  const [temperature, setTemperature] = useState(28);
  const [humidity, setHumidity] = useState(60);
  const [gasWarning, setGasWarning] = useState(0);
  const [door1Alert, setDoor1Alert] = useState(0);
  const [numLightOn, setNumLightOn] = useState(0);

  const [lightButtonValue1, setLightButtonValue1] = useState(false);
  const [lightButtonValue2, setLightButtonValue2] = useState(false);
  const [lightButtonValue3, setLightButtonValue3] = useState(false);
  const [lightButtonValue4, setLightButtonValue4] = useState(false);

  const [lightSwitchValue1, setLightSwitchValue1] = useState(false);
  const [lightSwitchValue2, setLightSwitchValue2] = useState(false);
  const [lightSwitchValue3, setLightSwitchValue3] = useState(false);
  const [lightSwitchValue4, setLightSwitchValue4] = useState(false);

  const [numDoorOn, setNumDoorOn] = useState(0);

  const [doorSwitchValue1, setDoorSwitchValue1] = useState(false);
  const [doorSwitchValue2, setDoorSwitchValue2] = useState(false);
  const [doorSwitchValue3, setDoorSwitchValue3] = useState(false);
  const [doorSwitchValue4, setDoorSwitchValue4] = useState(false);

  const SetTemperature = (value) => {
    setTemperature(value);
  };
  const SetHumidity = (value) => {
    setHumidity(value);
  };
  const SetGasWarning = (value) => {
    setGasWarning(value);
  };
  const SetNumLightOn = (value) => {
    setNumLightOn(value);
  };
  const SetDoor1Alert = (value) => {
    setDoor1Alert(value);
  };
  const lightButtonClick1 = () => {
    if (lightButtonValue1 == true) {
      setLightButtonValue1(false);
      SetNumLightOn(numLightOn - 1);
    } else {
      setLightButtonValue1(true);
      SetNumLightOn(numLightOn + 1);
    }
    setLightSwitchValue1(false);
  };
  const lightButtonClick2 = () => {
    if (lightButtonValue2 == true) {
      setLightButtonValue2(false);
      SetNumLightOn(numLightOn - 1);
    } else {
      setLightButtonValue2(true);
      SetNumLightOn(numLightOn + 1);
    }
    setLightSwitchValue2(false);
  };
  const lightButtonClick3 = () => {
    if (lightButtonValue3 == true) {
      setLightButtonValue3(false);
      SetNumLightOn(numLightOn - 1);
    } else {
      setLightButtonValue3(true);
      SetNumLightOn(numLightOn + 1);
    }
    setLightSwitchValue3(false);
  };
  const lightButtonClick4 = () => {
    if (lightButtonValue4 == true) {
      setLightButtonValue4(false);
      SetNumLightOn(numLightOn - 1);
    } else {
      setLightButtonValue4(true);
      SetNumLightOn(numLightOn + 1);
    }
    setLightSwitchValue4(false);
  };
  const lightToggleSwitch1 = (value) => {
    setLightSwitchValue1(value);
  };
  const lightToggleSwitch2 = (value) => {
    setLightSwitchValue2(value);
  };
  const lightToggleSwitch3 = (value) => {
    setLightSwitchValue3(value);
  };
  const lightToggleSwitch4 = (value) => {
    setLightSwitchValue4(value);
  };
  const SetNumDoorOn = (value) => {
    setNumDoorOn(value);
  };
  const doorToggleSwitch1 = () => {
    if (doorSwitchValue1 == true) {
      setDoorSwitchValue1(false);
      SetNumDoorOn(numDoorOn - 1);
    } else {
      setDoorSwitchValue1(true);
      SetNumDoorOn(numDoorOn + 1);
    }
  };
  const doorToggleSwitch2 = () => {
    if (doorSwitchValue2 == true) {
      setDoorSwitchValue2(false);
      SetNumDoorOn(numDoorOn - 1);
    } else {
      setDoorSwitchValue2(true);
      SetNumDoorOn(numDoorOn + 1);
    }
  };
  const doorToggleSwitch3 = () => {
    if (doorSwitchValue3 == true) {
      setDoorSwitchValue3(false);
      SetNumDoorOn(numDoorOn - 1);
    } else {
      setDoorSwitchValue3(true);
      SetNumDoorOn(numDoorOn + 1);
    }
  };
  const doorToggleSwitch4 = () => {
    if (doorSwitchValue4 == true) {
      setDoorSwitchValue4(false);
      SetNumDoorOn(numDoorOn - 1);
    } else {
      setDoorSwitchValue4(true);
      SetNumDoorOn(numDoorOn + 1);
    }
  };
  const globalData = {
    temperature: temperature,
    humidity: humidity,
    gasWarning: gasWarning,
    door1Alert: door1Alert,
    numLightOn: numLightOn,
    lightButtonValue1: lightButtonValue1,
    lightButtonValue2: lightButtonValue2,
    lightButtonValue3: lightButtonValue3,
    lightButtonValue4: lightButtonValue4,
    lightSwitchValue1: lightSwitchValue1,
    lightSwitchValue2: lightSwitchValue2,
    lightSwitchValue3: lightSwitchValue3,
    lightSwitchValue4: lightSwitchValue4,
    numDoorOn: numDoorOn,
    doorSwitchValue1: doorSwitchValue1,
    doorSwitchValue2: doorSwitchValue2,
    doorSwitchValue3: doorSwitchValue3,
    doorSwitchValue4: doorSwitchValue4,
    SetTemperature,
    SetHumidity,
    SetGasWarning,
    SetDoor1Alert,
    SetNumLightOn,
    lightButtonClick1,
    lightButtonClick2,
    lightButtonClick3,
    lightButtonClick4,
    lightToggleSwitch1,
    lightToggleSwitch2,
    lightToggleSwitch3,
    lightToggleSwitch4,
    SetNumDoorOn,
    doorToggleSwitch1,
    doorToggleSwitch2,
    doorToggleSwitch3,
    doorToggleSwitch4,
  };
  return (
    <AppContext.Provider value={globalData}>
      <AppNavigator />
    </AppContext.Provider>
  );
}
