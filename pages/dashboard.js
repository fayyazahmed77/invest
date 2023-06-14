import { Button } from "primereact/button";
import { Menu } from "primereact/menu";
import { InputSwitch } from "primereact/inputswitch";
import { Avatar } from "primereact/avatar";
import React, { useContext, useEffect, useRef, useState } from "react";
import { LayoutContext } from "../layout/context/layoutcontext";

const Dashboard = () => {
  const [switchValue, setSwitchValue] = useState(true);
  const menu1 = useRef(null);
  const menu2 = useRef(null);
  const [lineOptions, setLineOptions] = useState(null);
  const { layoutConfig } = useContext(LayoutContext);

  const applyLightTheme = () => {
    const lineOptions = {
      plugins: {
        legend: {
          labels: {
            color: "#495057"
          }
        }
      },
      scales: {
        x: {
          ticks: {
            color: "#495057"
          },
          grid: {
            color: "#ebedef"
          }
        },
        y: {
          ticks: {
            color: "#495057"
          },
          grid: {
            color: "#ebedef"
          }
        }
      }
    };

    setLineOptions(lineOptions);
  };

  const applyDarkTheme = () => {
    const lineOptions = {
      plugins: {
        legend: {
          labels: {
            color: "#ebedef"
          }
        }
      },
      scales: {
        x: {
          ticks: {
            color: "#ebedef"
          },
          grid: {
            color: "rgba(160, 167, 181, .3)"
          }
        },
        y: {
          ticks: {
            color: "#ebedef"
          },
          grid: {
            color: "rgba(160, 167, 181, .3)"
          }
        }
      }
    };

    setLineOptions(lineOptions);
  };

  useEffect(() => {
    if (layoutConfig.colorScheme === "dark") {
      applyDarkTheme();
    } else {
      applyLightTheme();
    }
  }, [layoutConfig.colorScheme]);

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
          <div className="card mb-0">
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
                <div className="py-2 mb-3   bg-gray-900 text-center">
                  {" "}
                  High :$13,443
                </div>
                <div className="py-2  bg-gray-900 text-center">
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
        <div className="col-12 lg:col-6 xl:col-4">
          <div className="card mb-0">
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
          <div className="card mb-0">
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
                <div className="py-2 mb-3  bg-gray-900 text-center">
                  {" "}
                  High :$13,443
                </div>
                <div className="py-2  bg-gray-900 text-center">
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
                    className="surface-300 border-round overflow-hidden w-30rem lg:w-13rem"
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
                    className="surface-300 border-round overflow-hidden w-30rem lg:w-13rem"
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
                    className="surface-300 border-round overflow-hidden w-30rem lg:w-13rem"
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
