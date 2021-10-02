import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, selectCount } from "./counterSlice";
import ourData from "../../ourData";

export function Counter() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  const [detailScreenFlag, detailScreenFlagChange] = useState(false);
  const [currentData, currentDataChange] = useState({});

  function viewAlgoClick(data) {
    currentDataChange(data);
    detailScreenFlagChange(true);
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div
          className="navbar-brand"
          onClick={() => {
            detailScreenFlagChange(false);
          }}
        >
          Dashboard
        </div>
        <div className="nav-link disabled">Cart - {count}</div>
      </nav>
      {detailScreenFlag ? (
        <>
          <div className="row">
            <div className="col-1">
              <label>{currentData.bot}</label>
            </div>
          </div>
          <div className="row">
            <div className="col-5">
              {currentData.description}
              <br />
              <button>MODERATE RISK</button>
              <button onClick={() => dispatch(increment())}>Buy</button>
            </div>
            <div className="col-1">index-value {currentData.index_value}</div>
            <div className="col-1">
              CAGR <br />
              {currentData.cagr}%
            </div>
          </div>
        </>
      ) : (
        <div>
          <div>Select the best algo suited for your needs</div>
          <br />
          <br />
          {ourData.map((data) => {
            return (
              <article>
                <div className="row">
                  <label className="col-2">{data.bot}</label>
                  <div className="col-1">index-value {data.index_value}</div>
                  <div className="col-1">CAGR {data.cagr}%</div>
                  <div className="col-1">
                    <button
                      onClick={() => {
                        viewAlgoClick(data);
                      }}
                    >
                      View Algo
                    </button>
                    <button onClick={() => dispatch(increment())}>Buy</button>
                  </div>
                </div>
                <br />
                <br />
              </article>
            );
          })}
        </div>
      )}
    </div>
  );
}
