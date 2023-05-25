import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [cost, setCost] = useState(0);
  const [intrest, setIntrest] = useState(10);
  const [fee, setFee] = useState(1);
  const [downpayment, setDownPayment] = useState(0);
  const [tenure, setTenure] = useState(12);
  const [emi, setEmi] = useState(10);

  const updateEMI = (e) => {
    if (!cost) return;

    const dp = Number(e.target.value);
    setDownPayment(dp.toFixed(0));
  };
  const updateDownPayement = (e) => {
    if (!cost) return;

    const dp = Number(e.target.value);
    setEmi(dp.toFixed(0));
  };
  const CalculateEmi = () => {};
  return (
    <div className="App">
      <div>Emi Calculator</div>

      <span className="title">Total Cost of asset</span>
      <input
        type="number"
        value={cost}
        onChange={(e) => setCost(e.target.value)}
        placeholder="total cost asset"
      />

      <div>
        <span className="title">intrest rate(in %)</span>
        <input
          type="number"
          value={intrest}
          onChange={(e) => setIntrest(e.target.value)}
          placeholder="intrest rate"
        />
      </div>
      <div>
        {" "}
        <span className="title">Processing fee in(%)</span>
        <input
          type="number"
          value={fee}
          onChange={(e) => setFee(e.target.value)}
          placeholder="fee "
        />
      </div>

      <div>
        <span className="title">DownPayent</span>
        <input
          type="range"
          min={0}
          max={cost}
          className="slider"
          value={downpayment}
          onChange={updateEMI}
        />
        <div className="labels">
          <label>0%</label>
          <b>{downpayment}</b>
          <label>100%</label>
        </div>
      </div>
      <div>
        {" "}
        <span className="title">Loan Per Month</span>
        <input
          type="range"
          min={CalculateEmi(cost)}
          max={CalculateEmi(0)}
          className="slider"
          value={emi}
          onChange={updateDownPayement}
        />
      </div>
      <div className="labels">
        <label>{CalculateEmi(cost)}</label>
        <b>{downpayment}</b>
        <label>{CalculateEmi(0)}</label>
      </div>
      <div>
        {" "}
        <span className="title">Tenure</span>
        <input
          type="range"
          min={0}
          max={cost}
          className="slider"
          value={downpayment}
          onChange={updateEMI}
        />
      </div>
    </div>
  );
}
