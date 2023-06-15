import { Button } from "primereact/button";
import { Menu } from "primereact/menu";
import { InputSwitch } from "primereact/inputswitch";
import { Avatar } from "primereact/avatar";
import React, { useContext, useEffect, useRef, useState } from "react";
import { LayoutContext } from "../layout/context/layoutcontext";

const Dashboard = () => {
  const [switchValue, setSwitchValue] = useState(true);

  return (
    <>
      {/* mobile screen */}
      <div className="grid xs:flex lg:hidden">
        <div className="col-12 lg:col-6 xl:col-6">
          <div className="card mb-0">
            <div className="flex justify-content-between mb-3">
              <div>
                <span className="block text-500 font-medium mb-3">Revenue</span>
                <div className="text-900 font-medium text-4xl">$24,526</div>
              </div>
              <div className="flex align-items-center justify-content-center ">
                <Avatar
                  image={`https://invest.axact.ca/static/media/face15.736ec0d9.jpg`}
                  size="large"
                  shape="circle"
                ></Avatar>
              </div>
            </div>
            <span className="text-green-500 font-medium">$136,75 </span>
            <span className="text-500">made today</span>
          </div>
        </div>
        <div className="col-12 lg:col-6 xl:col-6 flex justify-content-between">
          <div className="card mb-0 ">
            <div className="justify-content-between mb-3">
              <div className="justify-content-center flex  border-round">
                <i
                  className="pi pi-car text-gray-500 text-5xl "
                  style={{ width: "3.5rem", height: "3.5rem" }}
                />
              </div>
              <div>
                <span className="block text-500 font-medium mb-3">
                  Current Prices{" "}
                </span>
                <div className="text-900 font-medium text-xl">$1024</div>
                <span className="text-green-500 font-medium">Buy</span>
              </div>
            </div>
            <div className="text-900 font-medium text-xl">$9.989</div>
            <span className="text-red-500 font-medium">Sell</span>
          </div>
          <div className="card mb-0">
            <div className="flex justify-content-between ">
              <div className="d-flex d-md-block   d-xl-flex justify-content-between">
                <h6>Enable</h6>
              </div>

              <div className="flex align-items-center justify-content-center ">
                <div class="custom-control custom-switch ">
                  <InputSwitch
                    checked={switchValue}
                    onChange={(e) => setSwitchValue(e.value)}
                  />
                </div>
              </div>
            </div>
            <p className="text-muted mb-0">Past 24 hours</p>
            <div className="row">
              <div className="col-12  col-sm-12 col-xl-12 ">
                <div className="py-2 mb-3 px-1 text-xs   bg-green-900 text-center">
                  {" "}
                  High :$13,443
                </div>
                <div className="py-2 px-1 text-xs bg-red-900 text-center">
                  {" "}
                  Low : $71,234
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid hidden lg:flex">
        <div className="col-12 lg:col-6 xl:col-4">
          <div className="card mb-0">
            <div className="flex justify-content-between mb-4">
              <div>
                <span className="block text-500 font-medium mb-3">Revenue</span>
                <div className="text-900 py-2 font-medium text-4xl">
                  $24,526
                </div>
              </div>
              <div className="flex align-items-center justify-content-center ">
                <Avatar
                  image={`data:image/jpeg;base64,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`}
                  size="large"
                  shape="circle"
                ></Avatar>
              </div>
            </div>
            <span className="text-green-500 font-medium">$136,75 </span>
            <span className="text-500">made today</span>
          </div>
        </div>
        <div className="col-12 lg:col-6 xl:col-4">
          <div className="card mb-0 py-3">
            <div className="flex justify-content-between mb-3">
              <div>
                <span className="block text-500 font-medium mb-3">
                  Current Prices{" "}
                </span>
                <div className="text-900 font-medium text-4xl">$1024</div>
                <span className="text-green-500 font-medium">Buy</span>
              </div>
              <div
                className="flex align-items-center justify-content-center  border-round"
                style={{ width: "3.5rem", height: "3.5rem" }}
              >
                <i className="pi pi-car text-gray-500 text-5xl" />
              </div>
            </div>
            <div className="text-900 font-medium text-4xl">$9.989</div>
            <span className="text-red-500 font-medium">Sell</span>
          </div>
        </div>
        <div className="col-12 lg:col-6 xl:col-4">
          <div className="card mb-0 py-3">
            <div className="flex justify-content-between ">
              <div className="d-flex d-md-block   d-xl-flex justify-content-between">
                <h6>Enable V2G </h6>
              </div>

              <div className="flex align-items-center justify-content-center ">
                <div class="custom-control custom-switch ">
                  <InputSwitch
                    checked={switchValue}
                    onChange={(e) => setSwitchValue(e.value)}
                  />
                </div>
              </div>
            </div>
            <p className="text-muted mb-0">Past 24 hours</p>
            <div className="row">
              <div className="col-12  col-sm-12 col-xl-12 ">
                <div className="py-2 mb-3  bg-green-900 text-center">
                  {" "}
                  High :$13,443
                </div>
                <div className="py-2  bg-red-900 text-center">
                  {" "}
                  Low : $71,234
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h2>Fleet</h2>
      <div className="grid">
        <div className="col-12 xl:col-4">
          <div className="card">
            <div className="flex flex-wrap gap-2 align-items-center justify-content-between mb-2">
              <div className="flex align-items-center">
                <span className="font-bold text-xl">Volkswagen 2021</span>
              </div>
              <span className="text-xs bg-orange-400 p-2 border-round text-white">
                CHARGING
              </span>
            </div>
            <p className="text-muted text-small">786 XYZ</p>
            <div className="d-flex py-1">
              <div className="preview-list w-100">
                <div className="preview-item p-0">
                  <div className="preview-item-content d-flex flex-grow">
                    <div className="flex-grow">
                      <div className="d-flex d-md-block d-xl-flex justify-content-between">
                        <h2 className="mb-0">$31.53</h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-muted">Battery Capacity </p>
            <ul className="list-none p-0 m-0">
              <li className="flex flex-column md:flex-row md:align-items-center md:justify-content-between ">
                <div className="mt-2 md:mt-0 ml-0 flex align-items-center">
                  <div
                    className="surface-300 border-round overflow-hidden w-30rem lg:w-11rem"
                    style={{ height: "8px" }}
                  >
                    <div
                      className="bg-green-500 h-full"
                      style={{ width: "35%" }}
                    />
                  </div>
                  <span className="text-green-500 ml-3 font-medium">%35</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-12 xl:col-4">
          <div className="card">
            <div className="flex flex-wrap gap-2 align-items-center justify-content-between mb-2">
              <div className="flex align-items-center">
                <span className="font-bold text-xl">Nissan 2020</span>
              </div>
              <span className="text-xs bg-red-400 p-2 border-round text-white font-bold">
                DISCHARGING
              </span>
            </div>
            <p className="text-muted text-small">786 XYZ</p>
            <div className="d-flex py-1">
              <div className="preview-list w-100">
                <div className="preview-item p-0">
                  <div className="preview-item-content d-flex flex-grow">
                    <div className="flex-grow">
                      <div className="d-flex d-md-block d-xl-flex justify-content-between">
                        <h2 className="mb-0">$31.53</h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-muted">Battery Capacity </p>
            <ul className="list-none p-0 m-0">
              <li className="flex flex-column md:flex-row md:align-items-center md:justify-content-between ">
                <div className="mt-2 md:mt-0 ml-0 flex align-items-center">
                  <div
                    className="surface-300 border-round overflow-hidden w-30rem lg:w-11rem"
                    style={{ height: "8px" }}
                  >
                    <div
                      className="bg-green-500 h-full"
                      style={{ width: "50%" }}
                    />
                  </div>
                  <span className="text-green-500 ml-3 font-medium">%50</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-12 xl:col-4">
          <div className="card">
            <div className="flex flex-wrap gap-2 align-items-center justify-content-between mb-2">
              <div className="flex align-items-center">
                <span className="font-bold text-xl">Nissan Leaf</span>
              </div>
              <span className="text-xs bg-green-400 p-2 border-round text-white font-bold">
                CHARGING FULL
              </span>
            </div>
            <p className="text-muted text-small">786 XYZ</p>
            <div className="d-flex py-1">
              <div className="preview-list w-100">
                <div className="preview-item p-0">
                  <div className="preview-item-content d-flex flex-grow">
                    <div className="flex-grow">
                      <div className="d-flex d-md-block d-xl-flex justify-content-between">
                        <h2 className="mb-0">$31.53</h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-muted">Battery Capacity </p>
            <ul className="list-none p-0 m-0">
              <li className="flex flex-column md:flex-row md:align-items-center md:justify-content-between ">
                <div className="mt-2 md:mt-0 ml-0 flex align-items-center">
                  <div
                    className="surface-300 border-round overflow-hidden w-30rem lg:w-11rem"
                    style={{ height: "8px" }}
                  >
                    <div
                      className="bg-green-500 h-full"
                      style={{ width: "95%" }}
                    />
                  </div>
                  <span className="text-green-500 ml-3 font-medium">%95</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
