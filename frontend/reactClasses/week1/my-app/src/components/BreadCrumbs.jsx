import React from 'react'

function BreadCrumbs({paths}) {
  return (
    <nav>
        {paths.map((path, index) => (
            <span key={index}>
                {path}
                {index < paths.length - 1 && " > "}
            </span>
        ))
        }
    </nav>
  )
}

export default BreadCrumbs