import { Button } from "primereact/button";
import { Menu } from "primereact/menu";
import { InputSwitch } from "primereact/inputswitch";
import { Avatar } from "primereact/avatar";
import React, { useContext, useEffect, useRef, useState } from "react";
import { LayoutContext } from "../layout/context/layoutcontext";

const Home = () => {
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
          <div className="card">
            <div className="justify-content-between mb-3">
              <div className="justify-content-center flex  border-round">
                <i
                  className="pi pi-wallet text-gray-500 text-5xl "
                  style={{ width: "3.5rem", height: "3.5rem" }}
                />
              </div>
              <div>
                <span className="block text-500 text-xl font-medium mb-3 px-2">
                  My Wallet{" "}
                </span>
                <div className="text-900 font-medium text-4xl">$1024</div>
              </div>
            </div>
            <div className="text-900 font-medium text-4xl">$9.989</div>
          </div>
          <div className="card py-2 px-2">
            <div className="justify-content-between ">
              <div className="justify-content-center flex pt-3">
                <i
                  className="pi pi-gift text-gray-500 text-5xl "
                  style={{ width: "3.5rem", height: "3.5rem" }}
                />
              </div>
              <div>
                <span className="block text-500 text-xl font-medium mb-3 px-2">
                  <Button label=" VIEW FUNDS" severity="info" />
                  <div
                    class="btn-group py-2"
                    role="group"
                    aria-label="Basic example"
                  >
                    <button type="button" class="btn btn-secondary border">
                      12
                    </button>
                    <button type="button" class="btn btn-secondary border">
                      8.0%
                    </button>
                    <button type="button" class="btn btn-secondary border">
                      1
                    </button>
                  </div>
                  <div
                    class="btn-group py-2"
                    role="group"
                    aria-label="Basic example"
                  >
                    <button type="button" class="btn btn-secondary border">
                      12
                    </button>
                    <button type="button" class="btn btn-secondary border">
                      8.0%
                    </button>
                    <button type="button" class="btn btn-secondary border">
                      1
                    </button>
                  </div>
                </span>
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
                  My Wallet{" "}
                </span>
                <div className="text-900 font-medium text-4xl">$1024</div>
              </div>
              <div
                className="flex align-items-center justify-content-center  border-round"
                style={{ width: "3.5rem", height: "3.5rem" }}
              >
                <i className="pi pi-wallet text-gray-500 text-5xl" />
              </div>
            </div>
            <div className="text-900 font-medium text-4xl">$9.989</div>
          </div>
        </div>
        <div className="col-12 lg:col-6 xl:col-4">
          <div className="card mb-0">
            <div className="flex justify-content-between mb-3">
              <div className="row ">
                <div className="col-12 col-sm-12 col-xl-8 my-auto d-flex justify-content-center">
                  <Button label="VIEW FUNDS" severity="info" />
                </div>
                <div className="col-12 col-sm-12 col-xl-8 my-auto py-2 d-flex justify-content-center">
                  <span className="p-buttonset flex ">
                    <Button label="12" />
                    <Button label="8.0%" />
                    <Button label="1" />
                  </span>
                </div>
                <div className="col-12 col-sm-12 col-xl-8 my-auto py-1 d-flex justify-content-center">
                  <span className="p-buttonset flex ">
                    <Button label="12" />
                    <Button label="8.0%" />
                    <Button label="1" />
                  </span>
                </div>
              </div>
              <div
                className="flex align-items-center justify-content-center  border-round"
                style={{ width: "3.5rem", height: "3.5rem" }}
              >
                <i className="pi pi-th-large text-gray-500 text-5xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <h2>My Funds</h2>
      <div className="grid">
        <div className="col-12 xl:col-4">
          <div className="card">
            <div className="flex flex-wrap gap-2 align-items-center justify-content-between mb-2">
              <div className="flex align-items-center">
                <span className="font-bold text-xl">Volkswagen 2021</span>
              </div>
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
          </div>
        </div>
        <div className="col-12 xl:col-4">
          <div className="card">
            <div className="flex flex-wrap gap-2 align-items-center justify-content-between mb-2">
              <div className="flex align-items-center">
                <span className="font-bold text-xl">Nissan 2020</span>
              </div>
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
          </div>
        </div>
        <div className="col-12 xl:col-4">
          <div className="card">
            <div className="flex flex-wrap gap-2 align-items-center justify-content-between mb-2">
              <div className="flex align-items-center">
                <span className="font-bold text-xl">Nissan Leaf</span>
              </div>
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
