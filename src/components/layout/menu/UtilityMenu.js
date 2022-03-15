import React from "react"

import Edges from "../Edges"
 
export default function UtilityMenu() {
  return (
    <>
      <div
        style={{
          display: 'flex',
          padding: "0",
          background: "#000000",
          color: "#FFFFFF",
          alignItems: "center"
        }}
      >
        <Edges size="lg">
          <div
            style={{
              display: 'flex',
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: 'wrap',
              "a:hover": {
                color: "#03943F"
              }, 
            }}
          >
              <p>Utility Menu Text</p>
              <p>Utility Menu Text</p>
          </div>
        </Edges>
      </div>
    </>
  )
}
