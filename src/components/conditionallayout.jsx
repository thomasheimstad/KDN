import React from "react";
import Layout from "./layout";
import { Link, ModalRoutingContext } from 'gatsby-plugin-modal-routing-3';
import {IoMdClose} from "react-icons/io";

const ConditionalLayout = ({ children, ...rest }) => (
  <ModalRoutingContext.Consumer>
    {({ modal, closeTo }) => (
      modal ? (
        <React.Fragment>
          <Link to={closeTo}>
          <div className="buttons">
            <div className="button closeButton">
              <IoMdClose size={24} />
            </div>
          </div>
          </Link>
          {children}
        </React.Fragment>
      ) : (
        <Layout { ...rest }>
          {children}
        </Layout>
      )
    )}
  </ModalRoutingContext.Consumer>
)

export default ConditionalLayout;
