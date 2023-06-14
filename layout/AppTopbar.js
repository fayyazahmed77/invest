import Link from "next/link";
import Router, { useRouter } from "next/router";
import { classNames } from "primereact/utils";
import React, {
  forwardRef,
  useContext,
  useImperativeHandle,
  useRef
} from "react";
import { LayoutContext } from "./context/layoutcontext";

const AppTopbar = forwardRef((props, ref) => {
  const { layoutConfig, layoutState, onMenuToggle, showProfileSidebar } =
    useContext(LayoutContext);
  const menubuttonRef = useRef(null);
  const topbarmenuRef = useRef(null);
  const topbarmenubuttonRef = useRef(null);

  useImperativeHandle(ref, () => ({
    menubutton: menubuttonRef.current,
    topbarmenu: topbarmenuRef.current,
    topbarmenubutton: topbarmenubuttonRef.current
  }));

  return (
    <div className="layout-topbar justify-content-center">
      <Link href="/" className="layout-topbar-logo justify-content-center">
        <img
          src="/layout/images/logo/logo-white.png"
          width="77px"
          height={"70px"}
          widt={"true"}
          alt="logo"
        />
      </Link>

      {/* <button
        ref={menubuttonRef}
        type="button"
        className="p-link layout-menu-button layout-topbar-button"
        onClick={onMenuToggle}
      >
        <i className="pi pi-bars" />
      </button> */}

      {/* <button
        ref={topbarmenubuttonRef}
        type="button"
        className="p-link layout-topbar-menu-button layout-topbar-button "
        onClick={showProfileSidebar}
      >
        <i className="pi pi-ellipsis-v" />
      </button> */}

      <div></div>
    </div>
  );
});

export default AppTopbar;
