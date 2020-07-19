import React from "react";
import Button from "./Button";
import "./ButtonPanel.css";

const ButtonPanel = () => (
  <div className="buttonPanel">
    <div className="buttonGroup">
      <Button buttonName="AC" color="#D3D3D5" />
      <Button buttonName="+/-" color="#D3D3D5" />
      <Button buttonName="%" color="#D3D3D5" />
      <Button buttonName="÷" />
    </div>
    <div className="buttonGroup">
      <Button buttonName="7" color="#D3D3D5" />
      <Button buttonName="8" color="#D3D3D5" />
      <Button buttonName="9" color="#D3D3D5" />
      <Button buttonName="X" />
    </div>
    <div className="buttonGroup">
      <Button buttonName="4" color="#D3D3D5" />
      <Button buttonName="5" color="#D3D3D5" />
      <Button buttonName="6" color="#D3D3D5" />
      <Button buttonName="-" />
    </div>
    <div className="buttonGroup">
      <Button buttonName="1" color="#D3D3D5" />
      <Button buttonName="2" color="#D3D3D5" />
      <Button buttonName="3" color="#D3D3D5" />
      <Button buttonName="+" />
    </div>
    <div className="buttonGroup">
      <Button buttonName="0" wide={true} color="#D3D3D5" />
      <Button buttonName="." color="#D3D3D5" />
      <Button buttonName="=" />
    </div>
  </div>
);

export default ButtonPanel;
