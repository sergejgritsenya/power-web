import { Link as MuiLink } from "@material-ui/core"
import { LinkProps as MuiLinkProps } from "@material-ui/core/Link"
import React, { FC } from "react"
import { LinkProps as RouterLinkProps } from "react-router-dom"

type THeaderLinkProps = MuiLinkProps & RouterLinkProps
export const HeaderLink: FC<THeaderLinkProps> = (props) => {
  // return <MuiLink component={RouterDomLink as any} {...props} />
  return <MuiLink {...props} />
}
